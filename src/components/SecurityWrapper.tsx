import React, { Component, ReactNode } from 'react';
import { detectSuspiciousActivity, getSecurityConfig } from '../utils/security';

interface SecurityWrapperProps {
  children: ReactNode;
}

interface SecurityWrapperState {
  hasSecurityError: boolean;
  errorDetails: string;
}

class SecurityWrapper extends Component<SecurityWrapperProps, SecurityWrapperState> {
  private securityConfig = getSecurityConfig();
  
  constructor(props: SecurityWrapperProps) {
    super(props);
    this.state = {
      hasSecurityError: false,
      errorDetails: ''
    };
  }

  componentDidMount() {
    this.initializeSecurityMeasures();
    this.setupContentProtection();
  }

  private initializeSecurityMeasures() {
    // Detect and prevent common attacks (HTTPS, XSS, DOM monitoring)
    this.monitorDOMChanges();
    this.enforceHTTPS();
    this.detectXSSAttempts();
    this.monitorNetworkRequests();
    this.preventConsoleAbuse();
    this.setupSecurityMonitoring();
  }

  private setupContentProtection() {
    // Copying, text selection, highlighting, and right click are fully allowed.
  }

  private monitorDOMChanges() {
    // Monitor for suspicious DOM modifications - less aggressive to avoid false positives
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const element = node as Element;
              // Only check script tags and specific suspicious elements
              if (element.tagName === 'SCRIPT' || element.tagName === 'IFRAME') {
              const content = element.textContent || element.innerHTML || '';
              
                // Only flag if content is definitely malicious (very strict check)
                if (content.length > 0 && detectSuspiciousActivity(content)) {
                  console.warn('Security: Suspicious script/iframe detected');
                  // Don't block the page, just remove the suspicious element
                  try {
                    element.remove();
                  } catch {
                    // If removal fails, then we might have a real security issue
                this.setState({
                  hasSecurityError: true,
                      errorDetails: 'Suspicious content detected and could not be removed'
                });
                  }
                }
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: false // Only observe direct children to reduce false positives
    });
  }

  private enforceHTTPS() {
    if (this.securityConfig.enforceHTTPS && window.location.protocol !== 'https:') {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }

  private detectXSSAttempts() {
    // Monitor for XSS attempts in URL parameters - only log, don't block
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      // Only check parameters that could be malicious (ignore common legitimate params)
      const safeParams = ['utm_source', 'utm_medium', 'utm_campaign', 'ref', 'source', 'page', 'tab'];
      if (!safeParams.includes(key.toLowerCase()) && detectSuspiciousActivity(value)) {
        console.warn('Security: Suspicious URL parameter detected', key);
        // Only remove if it's clearly malicious, otherwise just log
        if (value.includes('<script') || value.includes('javascript:') || value.includes('data:text/html')) {
          urlParams.delete(key);
          window.history.replaceState({}, '', window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : ''));
        }
      }
    });
  }

  private monitorNetworkRequests() {
    // Monitor fetch requests for suspicious activity
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const first = args[0];
      const url =
        typeof first === 'string' ? first : (first as { url?: string }).url ?? '';

      // Log security events for monitoring
      if (url.includes('javascript:') || url.includes('data:text/html')) {
        console.warn('Security: Suspicious fetch request blocked');
        throw new Error('Suspicious network request detected');
      }

      return originalFetch.apply(this, args);
    };
  }

  private preventConsoleAbuse() {
    // In production, disable console in non-debug mode
    if (this.securityConfig.enforceHTTPS && import.meta.env.PROD) {
      // Store original console methods
      const originalConsole = { ...console };

      // Override console methods to prevent information leakage
      const silentMethods = ['debug', 'info', 'log'] as const;
      silentMethods.forEach((method) => {
        console[method] = () => {};
      });
      
      // Keep error and warn for development purposes but sanitize
      console.error = () => {
        originalConsole.error('[Sanitized Error]');
      };
    }
  }

  private setupSecurityMonitoring() {
    // Monitor for security events - less aggressive
    window.addEventListener('beforeunload', (e) => {
      // Only prevent if there's a confirmed security error
      if (this.state.hasSecurityError && this.state.errorDetails.includes('could not be removed')) {
        e.preventDefault();
        e.returnValue = '';
      }
    });

    // Monitor localStorage access - only block clearly malicious content
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key: string, value: string) {
      // Only block if it's clearly malicious (script tags, eval, etc.)
      if (value && (
        value.includes('<script') || 
        value.includes('javascript:') || 
        value.includes('eval(') ||
        value.length > 1000000 // Very large data (potential DoS)
      )) {
        console.warn('Security: Suspicious data attempted to be stored');
        return;
      }
      originalSetItem.call(this, key, value);
    };
  }

  static getDerivedStateFromError(error: Error): SecurityWrapperState {
    // Only flag errors that are clearly security-related, not normal React errors
    const criticalSecurityKeywords = ['script injection', 'xss', 'csrf', 'eval(', 'javascript:', '<script'];
    const errorMessage = error.message.toLowerCase();
    const errorStack = error.stack?.toLowerCase() || '';
    
    // Only flag if it contains critical security keywords AND looks like an attack
    const isSecurityError = criticalSecurityKeywords.some(keyword => {
      const hasKeyword = errorMessage.includes(keyword) || errorStack.includes(keyword);
      // Additional check: must also have suspicious patterns
      const hasSuspiciousPattern = errorMessage.includes('inject') || 
                                   errorMessage.includes('bypass') ||
                                   errorStack.includes('hack');
      return hasKeyword && hasSuspiciousPattern;
    });

    if (isSecurityError) {
      console.error('Security: Potential security error detected', error);
      return {
        hasSecurityError: true,
        errorDetails: 'Security error detected'
      };
    }

    // Return current state for non-security errors (normal React errors)
    return { hasSecurityError: false, errorDetails: '' };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log security-related errors
    console.error('Security Wrapper Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasSecurityError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 18.5C3.544 20.333 4.506 22 6.046 22z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-secunova-dark mb-4">Security Error</h2>
            <p className="text-gray-600 mb-6">
              A security issue has been detected. For your protection, this page has been blocked.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default SecurityWrapper;
/*
========================================
SECURITY WRAPPER COMPONENT
Built by SecuNova Inc.
========================================

Security wrapper component that implements client-side
security measures and monitoring.

Features:
- XSS protection
- Content validation
- Security monitoring
- Error boundary with security context

Built from scratch for comprehensive protection.
========================================
*/

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
    // Detect and prevent common attacks
    this.preventRightClick();
    this.preventDevTools();
    this.monitorDOMChanges();
    this.enforceHTTPS();
    this.detectXSSAttempts();
    this.monitorNetworkRequests();
    this.preventConsoleAbuse();
    this.setupSecurityMonitoring();
  }

  private setupContentProtection() {
    // Helper function to check if event is from chat widget
    const isFromChatWidget = (target: EventTarget | null): boolean => {
      if (!target || !(target instanceof Element)) return false;
      // Check if the target or any parent has the chat widget class/data attribute
      const chatElement = (target as Element).closest('[data-chat-widget], .chat-widget-container');
      return chatElement !== null;
    };

    // Disable right click
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right click in chat widget
      if (isFromChatWidget(e.target)) {
        return true;
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      // Allow text selection in chat widget
      if (isFromChatWidget(e.target)) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      // Allow drag in chat widget
      if (isFromChatWidget(e.target)) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // Disable copy, cut, paste
    const handleCopy = (e: ClipboardEvent) => {
      // Allow copy in chat widget
      if (isFromChatWidget(e.target)) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    const handleCut = (e: ClipboardEvent) => {
      // Allow cut in chat widget
      if (isFromChatWidget(e.target)) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    const handlePaste = (e: ClipboardEvent) => {
      // Allow paste in chat widget
      if (isFromChatWidget(e.target)) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+A (Select All) - Allow in chat widget
      if (e.ctrlKey && e.key === 'a') {
        if (isFromChatWidget(e.target)) {
          return true; // Allow select all in chat
        }
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+C (Copy) - Allow in chat widget
      if (e.ctrlKey && e.key === 'c') {
        if (isFromChatWidget(e.target)) {
          return true; // Allow copy in chat
        }
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+X (Cut) - Allow in chat widget
      if (e.ctrlKey && e.key === 'x') {
        if (isFromChatWidget(e.target)) {
          return true; // Allow cut in chat
        }
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+V (Paste) - Allow in chat widget
      if (e.ctrlKey && e.key === 'v') {
        if (isFromChatWidget(e.target)) {
          return true; // Allow paste in chat
        }
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+P (Command Palette)
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        return false;
      }
      
      // Disable Print Screen
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
      }
    };

    // Disable print
    const handleBeforePrint = () => {
      window.alert('Printing is disabled for this page.');
      return false;
    };

    // Apply CSS to prevent selection - Allow selection in chat widget
    const style = document.createElement('style');
    style.id = 'content-protection-style';
    style.textContent = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      
      img {
        -webkit-user-drag: none !important;
        -moz-user-drag: none !important;
        -ms-user-drag: none !important;
        user-drag: none !important;
      }
      
      a, button, input, textarea, select {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
      
      /* Allow selection and copy in chat widget */
      [data-chat-widget] *,
      .chat-widget-container * {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
        -webkit-touch-callout: default !important;
      }
      
      @media print {
        * {
          display: none !important;
        }
      }
    `;
    
    // Only add style if it doesn't exist
    if (!document.getElementById('content-protection-style')) {
      document.head.appendChild(style);
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('beforeprint', handleBeforePrint);

    // Store cleanup function
    (this as any).contentProtectionCleanup = () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeprint', handleBeforePrint);
      const styleElement = document.getElementById('content-protection-style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }

  componentWillUnmount() {
    // Cleanup content protection
    if ((this as any).contentProtectionCleanup) {
      (this as any).contentProtectionCleanup();
    }
  }

  private preventRightClick() {
    // Right click is now fully disabled in setupContentProtection
    // This method is kept for compatibility but enhanced
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }, { capture: true });
  }

  private preventDevTools() {
    // Monitor for developer tools (basic detection)
    let devtools = false;
    setInterval(() => {
      if (devtools) return;
      
      const threshold = 160;
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        devtools = true;
        console.log('Security: Developer tools detected');
      }
    }, 500);
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
                  } catch (e) {
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
      const url = typeof args[0] === 'string' ? args[0] : args[0].url;
      
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
    if (this.securityConfig.enforceHTTPS && process.env.NODE_ENV === 'production') {
      // Store original console methods
      const originalConsole = { ...console };
      
      // Override console methods to prevent information leakage
      ['debug', 'info', 'log'].forEach(method => {
        console[method] = () => {};
      });
      
      // Keep error and warn for development purposes but sanitize
      console.error = (...args: any[]) => {
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
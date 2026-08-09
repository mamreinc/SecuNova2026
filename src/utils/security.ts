// Input sanitization to prevent XSS attacks
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/[<>'"&]/g, (match) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entities[match] || match;
    })
    .trim()
    .slice(0, 1000); // Limit input length
};

// Email validation with comprehensive checks
export const validateEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false;
  
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return emailRegex.test(email) && 
         email.length <= 254 && 
         !email.includes('..') &&
         !email.startsWith('.') &&
         !email.endsWith('.');
};

// Phone number validation
export const validatePhone = (phone: string): boolean => {
  if (!phone || typeof phone !== 'string') return false;
  
  const phoneRegex = /^\+?[1-9]\d{0,15}$/;
  const cleanPhone = phone.replace(/[\s()-]/g, '');
  
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10 && cleanPhone.length <= 16;
};

// Generate CSRF token
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Rate limiting utility
class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number }> = new Map();
  
  isAllowed(identifier: string, maxAttempts: number = 5, windowMs: number = 900000): boolean {
    const now = Date.now();
    const record = this.attempts.get(identifier);
    
    if (!record || now > record.resetTime) {
      this.attempts.set(identifier, { count: 1, resetTime: now + windowMs });
      return true;
    }
    
    if (record.count >= maxAttempts) {
      return false;
    }
    
    record.count++;
    return true;
  }
  
  getRemainingTime(identifier: string): number {
    const record = this.attempts.get(identifier);
    if (!record) return 0;
    
    const remaining = record.resetTime - Date.now();
    return Math.max(0, remaining);
  }
}

export const rateLimiter = new RateLimiter();

// Secure localStorage wrapper
export const secureStorage = {
  set: <T,>(key: string, value: T): void => {
    try {
      const serializedValue = JSON.stringify({
        data: value,
        timestamp: Date.now(),
        checksum: btoa(JSON.stringify(value)) // Simple integrity check
      });
      localStorage.setItem(key, serializedValue);
    } catch {
      console.warn('SecureStorage: Failed to save data');
    }
  },
  
  get: <T,>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      
      const parsed = JSON.parse(item);
      
      // Verify integrity
      const expectedChecksum = btoa(JSON.stringify(parsed.data));
      if (parsed.checksum !== expectedChecksum) {
        localStorage.removeItem(key);
        return null;
      }
      
      // Check if data is too old (24 hours)
      if (Date.now() - parsed.timestamp > 86400000) {
        localStorage.removeItem(key);
        return null;
      }
      
      return parsed.data;
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  },
  
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
  
  clear: (): void => {
    localStorage.clear();
  }
};

// URL validation for external links
export const validateURL = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
    return allowedProtocols.includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Content security for dynamic content
export const sanitizeHTML = (html: string): string => {
  // Create a temporary element to parse HTML
  const temp = document.createElement('div');
  temp.textContent = html;
  return temp.innerHTML;
};

// Password strength checker
export const checkPasswordStrength = (password: string): {
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;
  
  if (password.length >= 8) score++;
  else feedback.push('Use at least 8 characters');
  
  if (/[a-z]/.test(password)) score++;
  else feedback.push('Include lowercase letters');
  
  if (/[A-Z]/.test(password)) score++;
  else feedback.push('Include uppercase letters');
  
  if (/\d/.test(password)) score++;
  else feedback.push('Include numbers');
  
  if (/[^a-zA-Z\d]/.test(password)) score++;
  else feedback.push('Include special characters');
  
  if (password.length >= 12) score++;
  
  return { score, feedback };
};

// Prevent common attack patterns - Enhanced detection (balanced to avoid false positives)
export const detectSuspiciousActivity = (input: string): boolean => {
  if (!input || typeof input !== 'string' || input.length < 3) {
    return false;
  }
  
  // Only check for truly malicious patterns, not legitimate code patterns
  const suspiciousPatterns = [
    // XSS patterns - only check for actual injection attempts
    /<script[^>]*>[\s\S]*?<\/script>/gi,
    /javascript:\s*[^'"\s]/gi, // More specific - not just "javascript:" in URLs
    /on(load|error|click|mouseover|focus|blur)\s*=\s*["'][^"']*["']/gi,
    /eval\s*\(\s*["']/gi, // Only eval with string literals
    /expression\s*\(/gi,
    /vbscript:/gi,
    /data:text\/html[,;]/gi,
    /<iframe[^>]*src\s*=\s*["']javascript:/gi,
    
    // SQL Injection patterns - more specific
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b[\s\S]{0,100}(FROM|INTO|SET|VALUES|WHERE|UNION|SCRIPT)\b)/gi,
    /(--\s*$|;\s*DROP\s+TABLE|;\s*DELETE\s+FROM|\/\*[\s\S]*?\*\/)/gi,
    
    // Command Injection patterns - more specific
    /\|\s*(rm|cat|wget|curl|nc|bash|sh)\s|&\s*(rm|cat|wget|curl|nc|bash|sh)\s/gi,
    /`[^`]*(rm|cat|wget|curl|nc|bash|sh|ls|cd)[^`]*`/gi,
    
    // Path traversal - more specific
    /\.\.\/\.\.\/\.\.\//gi, // Multiple ../ patterns
    /\.\.\\\.\.\\/gi, // Windows path traversal
    
    // Crypto mining patterns
    /coinhive|coinhive\.com|cryptonight|xmrig|mining/gi,
    
    // File inclusion - very specific PHP patterns
    /(include|require|include_once|require_once)\s*\(\s*["']\$_(GET|POST|COOKIE|SERVER)/gi
  ];
  
  // Check for suspicious patterns but be lenient with common legitimate content
  const hasSuspiciousPattern = suspiciousPatterns.some(pattern => pattern.test(input));
  
  // Additional check: If it's too long, might be suspicious
  if (input.length > 10000) {
    return true;
  }
  
  return hasSuspiciousPattern;
};

// Environment-based security settings
export const getSecurityConfig = () => {
  const isProduction = window.location.hostname !== 'localhost';
  
  return {
    enforceHTTPS: isProduction,
    enableCSP: true,
    enableHSTS: isProduction,
    sessionTimeout: 3600000, // 1 hour
    maxLoginAttempts: 5,
    rateLimitWindow: 900000, // 15 minutes
    enableSecureCookies: isProduction,
    enableSubresourceIntegrity: isProduction,
    enableExpectCT: isProduction,
    enableFeaturePolicy: true,
    enableCertificateTransparency: isProduction
  };
};

// Generate secure random token
export const generateSecureToken = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Hash function for sensitive data (simple SHA-256 wrapper)
export const hashData = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Validate and sanitize file names
export const sanitizeFileName = (fileName: string): string => {
  // Remove path traversal attempts
  const sanitized = fileName
    .replace(/\.\./g, '')
    .replace(/\//g, '')
    .replace(/\\/g, '')
    .replace(/[<>:"|?*]/g, '')
    .trim()
    .slice(0, 255);
  
  return sanitized || 'file';
};

// Check for malicious file extensions
export const isSecureFileType = (fileName: string): boolean => {
  const dangerousExtensions = [
    '.exe', '.bat', '.cmd', '.com', '.pif', '.scr', '.vbs', '.js', '.jar',
    '.php', '.asp', '.aspx', '.jsp', '.sh', '.ps1', '.py', '.rb', '.pl'
  ];
  
  const extension = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
  return !dangerousExtensions.includes(extension);
};

// Enhanced URL validation with whitelist
export const validateSecureURL = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const allowedProtocols = ['http:', 'https:'];
    const allowedDomains = [
      'secunovainc.com',
      'secunova.ca',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'fonts.cdnfonts.com',
      'images.pexels.com',
      'maps.google.com',
      'www.google.com'
    ];
    
    if (!allowedProtocols.includes(urlObj.protocol)) {
      return false;
    }
    
    // Check if domain is in whitelist (for production)
    if (import.meta.env.PROD) {
      return allowedDomains.some(domain => urlObj.hostname.includes(domain));
    }
    
    return true;
  } catch {
    return false;
  }
};
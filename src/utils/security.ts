/**
 * Security utilities for the portfolio application
 */

// Input sanitization functions
export class SecurityUtils {
  /**
   * Sanitize HTML input to prevent XSS attacks
   */
  static sanitizeHTML(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  /**
   * Validate email format with strict regex
   */
  static validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  /**
   * Validate phone number format
   */
  static validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/[\s-()]/g, ''));
  }

  /**
   * Sanitize form input
   */
  static sanitizeInput(input: string, maxLength: number = 1000): string {
    if (typeof input !== 'string') return '';
    
    return input
      .trim()
      .substring(0, maxLength)
      .replace(/[<>\"']/g, '') // Remove potentially dangerous characters
      .replace(/\s+/g, ' '); // Normalize whitespace
  }

  /**
   * Validate URL format
   */
  static validateURL(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return ['http:', 'https:'].includes(urlObj.protocol);
    } catch {
      return false;
    }
  }

  /**
   * Rate limiting for form submissions
   */
  private static submissions: Map<string, number[]> = new Map();

  static isRateLimited(identifier: string, maxSubmissions: number = 3, timeWindow: number = 300000): boolean {
    const now = Date.now();
    const submissions = this.submissions.get(identifier) || [];
    
    // Remove old submissions outside the time window
    const recentSubmissions = submissions.filter(time => now - time < timeWindow);
    
    if (recentSubmissions.length >= maxSubmissions) {
      return true;
    }

    // Add current submission
    recentSubmissions.push(now);
    this.submissions.set(identifier, recentSubmissions);
    
    return false;
  }

  /**
   * Generate a secure random string for CSRF tokens
   */
  static generateSecureToken(length: number = 32): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const values = new Uint8Array(length);
    crypto.getRandomValues(values);
    
    for (let i = 0; i < length; i++) {
      result += charset[values[i] % charset.length];
    }
    
    return result;
  }

  /**
   * Secure local storage operations
   */
  static secureLocalStorage = {
    setItem: (key: string, value: string): void => {
      try {
        // Add timestamp and basic obfuscation
        const data = {
          value: btoa(value), // Basic encoding
          timestamp: Date.now(),
          integrity: SecurityUtils.generateSecureToken(8)
        };
        localStorage.setItem(key, JSON.stringify(data));
      } catch (error) {
        console.warn('Failed to store data securely:', error);
      }
    },

    getItem: (key: string, maxAge: number = 3600000): string | null => {
      try {
        const stored = localStorage.getItem(key);
        if (!stored) return null;

        const data = JSON.parse(stored);
        
        // Check if data is expired
        if (Date.now() - data.timestamp > maxAge) {
          localStorage.removeItem(key);
          return null;
        }

        return atob(data.value);
      } catch (error) {
        console.warn('Failed to retrieve data securely:', error);
        return null;
      }
    },

    removeItem: (key: string): void => {
      localStorage.removeItem(key);
    }
  };

  /**
   * Content Security Policy violation reporter
   */
  static reportCSPViolation(violationReport: any): void {
    console.warn('CSP Violation:', violationReport);
    // In production, you might want to send this to a logging service
  }

  /**
   * Detect and prevent potential XSS attempts
   */
  static detectXSS(input: string): boolean {
    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
      /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
    ];

    return xssPatterns.some(pattern => pattern.test(input));
  }

  /**
   * Secure external link handler
   */
  static openExternalLink(url: string, target: string = '_blank'): void {
    if (!this.validateURL(url)) {
      console.warn('Invalid URL detected:', url);
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.target = target;
    link.rel = 'noopener noreferrer'; // Security: prevent window.opener access
    link.click();
  }
}

// CSP violation event listener
if (typeof window !== 'undefined') {
  document.addEventListener('securitypolicyviolation', (e) => {
    SecurityUtils.reportCSPViolation({
      blockedURI: e.blockedURI,
      violatedDirective: e.violatedDirective,
      originalPolicy: e.originalPolicy,
      sourceFile: e.sourceFile,
      lineNumber: e.lineNumber,
      columnNumber: e.columnNumber
    });
  });
}

export default SecurityUtils;

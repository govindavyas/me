/**
 * Security Configuration for Portfolio Application
 */

export const securityConfig = {
  // Content Security Policy configuration
  csp: {
    directives: {
      'default-src': ["'self'"],
      'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdn.jsdelivr.net"],
      'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.jsdelivr.net"],
      'font-src': ["'self'", "https://fonts.gstatic.com", "https://cdn.jsdelivr.net"],
      'img-src': ["'self'", "data:", "https:", "blob:"],
      'connect-src': ["'self'", "https:", "wss:"],
      'frame-ancestors': ["'none'"],
      'base-uri': ["'self'"],
      'form-action': ["'self'"],
      'object-src': ["'none'"],
      'upgrade-insecure-requests': []
    }
  },

  // Rate limiting configuration
  rateLimiting: {
    formSubmissions: {
      maxAttempts: 3,
      windowMs: 300000, // 5 minutes
    },
    apiCalls: {
      maxAttempts: 100,
      windowMs: 60000, // 1 minute
    }
  },

  // Input validation rules
  validation: {
    name: {
      minLength: 2,
      maxLength: 100,
      allowedChars: /^[a-zA-Z\s\-\.\']+$/
    },
    email: {
      maxLength: 254,
      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    },
    message: {
      minLength: 10,
      maxLength: 2000,
      forbiddenPatterns: [
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi
      ]
    }
  },

  // Security headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  },

  // Trusted domains for external links
  trustedDomains: [
    'github.com',
    'linkedin.com',
    'www.linkedin.com'
  ],

  // Environment-specific settings
  development: {
    enableConsoleLogging: true,
    enableContextMenu: true,
    enableTextSelection: true,
    enableDragAndDrop: true
  },

  production: {
    enableConsoleLogging: false,
    enableContextMenu: false,
    enableTextSelection: false,
    enableDragAndDrop: false,
    enableSourceMaps: false
  }
};

export default securityConfig;

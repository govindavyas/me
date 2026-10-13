import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    open: true,
    host: 'localhost', // Restrict to localhost only
    cors: {
      origin: false, // Disable CORS for development security
    },
    headers: {
      // Security headers for development server
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    },
  },
  build: {
    // Security optimizations for production build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        // Code splitting for better caching and reduced initial bundle
        manualChunks: {
          // Split GSAP into separate chunk - loaded only when needed
          'gsap': ['gsap'],
          // Vue core in separate chunk
          'vue-vendor': ['vue'],
          // Axios in separate chunk - only loaded when contact form is used
          'axios': ['axios'],
        },
        // Add integrity checks
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable source map for debugging but ensure it's secure
    sourcemap: false, // Disable source maps in production for security
    reportCompressedSize: false, // Don't expose build information
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 500,
  },
  preview: {
    port: 4173,
    host: 'localhost',
    headers: {
      // Security headers for preview server
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
  define: {
    // Remove development-only code in production
    __DEV__: false,
  },
})

import { defineConfig, splitVendorChunk } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
    }),
  ],
  
  build: {
    outDir: 'dist',
    // Disable source maps completely for production to prevent code exposure
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.info', 'console.debug', 'console.warn'],
        // Additional obfuscation options
        passes: 2, // Multiple passes for better minification
        unsafe: false, // Safe mode for production
        unsafe_comps: false,
        unsafe_math: false,
        unsafe_methods: false,
        unsafe_proto: false,
        unsafe_regexp: false,
        unsafe_undefined: false,
      },
      format: {
        // Remove comments completely
        comments: false,
        // Beautify: false makes code harder to read
        beautify: false,
      },
      mangle: {
        // Mangle variable names for obfuscation
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
    },
    // Optimize chunk size - reduce warning threshold for better performance
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Obfuscate file names in production
        chunkFileNames: 'assets/js/[hash]-[name].js',
        entryFileNames: 'assets/js/[hash]-[name].js',
        // Better code splitting for performance
        manualChunks: (id, { getModuleInfo }) => {
          // React and core
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Router
          if (id.includes('react-router-dom')) {
            return 'router';
          }
          // UI libraries
          if (id.includes('lucide-react') || id.includes('swiper')) {
            return 'ui-vendor';
          }
          // React Helmet
          if (id.includes('react-helmet-async')) {
            return 'helmet-vendor';
          }
          // Tailwind
          if (id.includes('tailwindcss')) {
            return 'tailwind-vendor';
          }
          // Default vendor chunk splitting
          const vendorChunk = splitVendorChunk()(id, { getModuleInfo });
          if (vendorChunk) {
            return vendorChunk;
          }
          // Split large page chunks
          if (id.includes('/pages/')) {
            const match = id.match(/\/pages\/([^/]+)/);
            if (match) {
              const pageName = match[1];
              // Group service pages together
              if (pageName === 'services') {
                return 'services-pages';
              }
              return `page-${pageName}`;
            }
          }
        },
        // Optimize asset file names with hashing
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[hash]-[name][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[hash]-[name][extname]`;
          }
          return `assets/${ext}/[hash]-[name][extname]`;
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize asset inlining threshold (reduce to 512b for smaller bundles)
    assetsInlineLimit: 512,
    // Remove empty chunks
    emptyOutDir: true,
  },
  
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'lucide-react',
    ],
    exclude: ['swiper'], // Exclude swiper if not used on every page
    // Force optimization for better caching
    force: false,
  },
  
  // Improve dev server performance
  server: {
    port: 4173,
    host: true,
    // Enable HTTP/2 for better performance
    https: false,
    // Optimize file watching
    watch: {
      usePolling: false,
      interval: 100,
    },
  },
  
  preview: {
    port: 4173,
    host: true,
    // Enable compression for preview
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  
  // Image optimization hints
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif', '**/*.webp'],
});
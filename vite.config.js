import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers — smaller, faster output
    target: 'es2020',
    // Minify with esbuild (faster than Terser, comparable output)
    minify: 'esbuild',
    // No source maps in production — reduces bundle size
    sourcemap: false,
    // Split CSS per chunk for better caching
    cssCodeSplit: true,
    // Suppress the chunk size warning at 1 MB (recharts is large by design)
    chunkSizeWarningLimit: 1000,
    // Skip reporting gzip sizes during build — slightly faster CI
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Split vendor chunks for better long-term caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-recharts': ['recharts'],
          'vendor-framer': ['framer-motion'],
          'vendor-lucide': ['lucide-react'],
        },
      },
    },
  },
  // Optimize dep pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'recharts', 'framer-motion', 'lucide-react'],
  },
})

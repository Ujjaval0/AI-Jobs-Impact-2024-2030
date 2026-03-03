import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Minify with esbuild (faster than Terser, good output)
    minify: 'esbuild',
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
})

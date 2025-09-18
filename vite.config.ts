import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/real-webiste/',
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to hide warning
  },
})

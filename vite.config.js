
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// https://vitejs.dev/guide/features.html#css
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})

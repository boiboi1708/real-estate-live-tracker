import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// This repo is https://github.com/boiboi1708/real-estate-live-tracker
// and will be served at:
//   https://boiboi1708.github.io/real-estate-live-tracker/
// So the base path must be the repo name.
export default defineConfig({
  base: '/real-estate-live-tracker/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  server: {
    port: 5173,
  },
})

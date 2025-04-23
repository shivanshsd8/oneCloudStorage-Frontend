import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:'/',
  plugins: [react(),tailwindcss()], // Important: matches the subpath where it's served
  server: {
    historyApiFallback: true, // this is the fix for local dev 404s on refresh
  }
})
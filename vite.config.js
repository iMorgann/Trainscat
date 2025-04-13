// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Use this instead of plugin-react-swc

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
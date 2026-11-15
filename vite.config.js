import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Bundle CommonJS-only deps into the prerender (SSR) build.
  ssr: { noExternal: ['react-helmet-async', 'lucide-react'] },
})

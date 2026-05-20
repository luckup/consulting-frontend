import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { contactApiDevPlugin } from './server/contactApiDevPlugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.resolve(__dirname, './src')

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '')
  const cdnBase = env.VITE_CDN_BASE_URL?.trim() ?? ''
  const useLocalAssets = env.VITE_USE_LOCAL_ASSETS === 'true' && !cdnBase

  if (mode === 'production' && !cdnBase) {
    throw new Error(
      'Production build requires VITE_CDN_BASE_URL.\n' +
        '  1. Upload images: npm run cdn:prepare → upload cdn-upload/ to your CDN\n' +
        '  2. Copy .env.production.example → .env.production and set VITE_CDN_BASE_URL\n' +
        '  3. npm run build',
    )
  }

  const siteImagesModule = useLocalAssets ? 'siteImages.local.ts' : 'siteImages.cdn.ts'

  const contactEnv = {
    RESEND_API_KEY: env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: env.CONTACT_TO_EMAIL,
    SMTP_FROM: env.SMTP_FROM,
    RESEND_FROM: env.RESEND_FROM,
  }

  const useContactDevApi = Boolean(contactEnv.RESEND_API_KEY?.trim())

  return {
    plugins: [react(), ...(useContactDevApi ? [contactApiDevPlugin(contactEnv)] : [])],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('lenis')) return 'lenis'
          },
        },
      },
    },
    server: {
      port: 3000,
      proxy: useContactDevApi
        ? undefined
        : {
            '/api': {
              target: 'http://localhost:5000',
              changeOrigin: true,
            },
          },
    },
    resolve: {
      alias: [
        {
          find: '@site-images',
          replacement: path.resolve(srcDir, 'lib', siteImagesModule),
        },
        { find: '@', replacement: srcDir },
      ],
    },
  }
})

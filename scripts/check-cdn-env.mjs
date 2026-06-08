/**
 * Ensures VITE_CDN_BASE_URL is set before production builds (when not using local assets).
 */
import { loadEnv } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
// npm run build always targets production env files; merge process.env for Vercel-injected vars
const env = loadEnv('production', root, '')
const get = (key) => (process.env[key] ?? env[key])?.trim()
const cdn = get('VITE_CDN_BASE_URL')
const local = get('VITE_USE_LOCAL_ASSETS') === 'true'

if (!cdn && !local) {
  console.error(
    '\n[build] Missing VITE_CDN_BASE_URL in .env.production\n' +
      'Upload images to your CDN, then set the public base URL (no trailing slash).\n' +
      'See frontend/.env.production.example and src/assets/ASSETS.txt\n',
  )
  process.exit(1)
}

if (cdn) {
  console.log(`[build] CDN images: ${cdn}`)
}

const emailToken = get('VITE_EMAIL_SERVICE_TOKEN')
if (emailToken) {
  console.log('[build] Contact form: email service token configured')
}

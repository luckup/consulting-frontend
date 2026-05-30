/**
 * Ensures `public/brand/logo.png` exists and mirrors it to `public/favicon.png` and `public/favicon.ico` (tab icon).
 * Order: copy from `src/assets/brand/logo.png` if present, else download from `VITE_CDN_BASE_URL`.
 *
 * Pass `--soft` to warn and exit 0 when no source is available (optional dev convenience).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dest = path.join(root, 'public', 'brand', 'logo.png')
const faviconPng = path.join(root, 'public', 'favicon.png')
const faviconIco = path.join(root, 'public', 'favicon.ico')

function writeFaviconCopy() {
  if (!fs.existsSync(dest)) return
  fs.copyFileSync(dest, faviconPng)
  fs.copyFileSync(dest, faviconIco)
}
const assetSrc = path.join(root, 'src', 'assets', 'brand', 'logo.png')
const soft = process.argv.includes('--soft')
const force = process.argv.includes('--force')

function cdnBase() {
  const dev = loadEnv('development', root, '')
  const prod = loadEnv('production', root, '')
  return (prod.VITE_CDN_BASE_URL || dev.VITE_CDN_BASE_URL || '').trim().replace(/\/$/, '')
}

async function downloadFromCdn(base) {
  const url = `${base}/brand/logo.png`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`GET ${url} failed: ${res.status} ${res.statusText}`)
  }
  return Buffer.from(await res.arrayBuffer())
}

async function main() {
  fs.mkdirSync(path.dirname(dest), { recursive: true })

  if (fs.existsSync(dest) && !force) {
    writeFaviconCopy()
    console.log('[favicon-source] using existing public/brand/logo.png (pass --force to refresh)')
    return
  }

  if (fs.existsSync(assetSrc)) {
    fs.copyFileSync(assetSrc, dest)
    writeFaviconCopy()
    console.log('[favicon-source] copied src/assets/brand/logo.png -> public/brand/logo.png')
    return
  }

  const base = cdnBase()
  if (base) {
    const buf = await downloadFromCdn(base)
    fs.writeFileSync(dest, buf)
    writeFaviconCopy()
    console.log(`[favicon-source] downloaded ${base}/brand/logo.png -> public/brand/logo.png`)
    return
  }

  console.error(
    '[favicon-source] Missing public/brand/logo.png.\n' +
      '  Add src/assets/brand/logo.png, or set VITE_CDN_BASE_URL so the logo can be downloaded at build time.\n' +
      '  (You can also run `npm run cdn:prepare` if logo.png exists under src/assets.)\n',
  )
  if (soft) {
    console.warn('[favicon-source] --soft: continuing without tab logo source (favicon may be blank until fixed).')
    return
  }
  process.exit(1)
}

main().catch((err) => {
  console.error('[favicon-source]', err)
  if (soft) {
    console.warn('[favicon-source] --soft: continuing without updating tab logo source.')
    process.exit(0)
  }
  process.exit(1)
})

/**
 * Copies src/assets/* into cdn-upload/ using CDN keys from cdn-asset-manifest.json
 * (slugified names for news/team). Upload the cdn-upload/ folder to your CDN as-is.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const manifestPath = path.resolve(__dirname, 'cdn-asset-manifest.json')
const assetsRoot = path.resolve(__dirname, '../src/assets')
const outRoot = path.resolve(__dirname, '../cdn-upload')

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
const entries = Object.entries(manifest.assets)

fs.rmSync(outRoot, { recursive: true, force: true })

let copied = 0
let missing = 0

for (const [localRel, cdnKey] of entries) {
  const src = path.join(assetsRoot, localRel)
  const dest = path.join(outRoot, cdnKey)

  if (!fs.existsSync(src)) {
    console.warn(`[skip] missing: src/assets/${localRel}`)
    missing += 1
    continue
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(src, dest)
  copied += 1
}

// Tab icon uses `public/brand/logo.png` (+ `public/favicon.svg` / `public/favicon.png`). Copy logo for local/static serving.
const brandLogoSrc = path.join(assetsRoot, 'brand/logo.png')
const brandLogoPublic = path.resolve(__dirname, '../public/brand/logo.png')
const faviconPngPublic = path.resolve(__dirname, '../public/favicon.png')
const faviconIcoPublic = path.resolve(__dirname, '../public/favicon.ico')
function mirrorTabIconFromLogo() {
  if (fs.existsSync(brandLogoPublic)) {
    fs.copyFileSync(brandLogoPublic, faviconPngPublic)
    fs.copyFileSync(brandLogoPublic, faviconIcoPublic)
  }
}

if (fs.existsSync(brandLogoSrc)) {
  fs.mkdirSync(path.dirname(brandLogoPublic), { recursive: true })
  fs.copyFileSync(brandLogoSrc, brandLogoPublic)
  mirrorTabIconFromLogo()
  console.log('Updated public/brand/logo.png from src/assets/brand/logo.png (favicon source)')
} else if (fs.existsSync(path.join(outRoot, 'brand/logo.png'))) {
  fs.mkdirSync(path.dirname(brandLogoPublic), { recursive: true })
  fs.copyFileSync(path.join(outRoot, 'brand/logo.png'), brandLogoPublic)
  mirrorTabIconFromLogo()
  console.log('Updated public/brand/logo.png from cdn-upload/brand/logo.png (favicon source)')
}

console.log(`\nPrepared ${copied} file(s) in cdn-upload/`)
if (missing > 0) {
  console.log(`${missing} file(s) missing — add PNGs under src/assets/ (see scripts/cdn-asset-manifest.json)`)
  process.exitCode = 1
} else {
  console.log('\nNext: upload cdn-upload/ to your CDN, then set VITE_CDN_BASE_URL in .env.production')
  console.log('  npm run cdn:upload   (AWS CLI / Cloudflare R2 / S3-compatible)')
  console.log('  or drag cdn-upload/ into your CDN dashboard\n')
}

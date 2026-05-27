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

// Tab / PWA icon: use committed `public/favicon.svg` (white mark on dark tile). Do not overwrite from brand PNG.

console.log(`\nPrepared ${copied} file(s) in cdn-upload/`)
if (missing > 0) {
  console.log(`${missing} file(s) missing — add PNGs under src/assets/ (see scripts/cdn-asset-manifest.json)`)
  process.exitCode = 1
} else {
  console.log('\nNext: upload cdn-upload/ to your CDN, then set VITE_CDN_BASE_URL in .env.production')
  console.log('  npm run cdn:upload   (AWS CLI / Cloudflare R2 / S3-compatible)')
  console.log('  or drag cdn-upload/ into your CDN dashboard\n')
}

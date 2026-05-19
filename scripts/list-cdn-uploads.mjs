/**
 * Prints upload mapping from scripts/cdn-asset-manifest.json.
 *
 * Usage:
 *   npm run cdn:manifest
 *   VITE_CDN_BASE_URL=https://cdn.example.com/moonsofts npm run cdn:manifest
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const manifestPath = path.resolve(__dirname, 'cdn-asset-manifest.json')
const assetsRoot = path.resolve(__dirname, '../src/assets')
const base = (process.env.VITE_CDN_BASE_URL ?? '').replace(/\/$/, '')

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
const entries = Object.entries(manifest.assets)

console.log(manifest.description ?? 'CDN upload manifest')
console.log(`\n${entries.length} files\n`)

if (!base) {
  console.log('Set VITE_CDN_BASE_URL to print full URLs.\n')
}

for (const [localRel, cdnKey] of entries) {
  const localFile = path.join(assetsRoot, localRel)
  const exists = fs.existsSync(localFile)
  const encoded = cdnKey.split('/').map(encodeURIComponent).join('/')
  const url = base ? `${base}/${encoded}` : `→ ${cdnKey}`
  console.log(`${localRel}`)
  console.log(`  upload as: ${cdnKey}${exists ? '' : '  [MISSING LOCAL FILE]'}`)
  if (base) console.log(`  URL: ${url}`)
  console.log('')
}

console.log('---')
console.log('Prepare upload folder (renames news/team files to CDN keys):')
console.log('  npm run cdn:prepare')
console.log('')
console.log('Upload to S3 / Cloudflare R2 / compatible storage:')
console.log('  CDN_S3_BUCKET=your-bucket CDN_S3_PREFIX=moonsofts npm run cdn:upload')
console.log('')
console.log('Production build after CDN is live:')
console.log('  copy .env.production.example → .env.production, set VITE_CDN_BASE_URL, then npm run build')

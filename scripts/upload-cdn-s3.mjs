/**
 * Uploads cdn-upload/ to S3 or S3-compatible storage (Cloudflare R2, DigitalOcean Spaces, etc.)
 *
 * Required env:
 *   CDN_S3_BUCKET=my-bucket
 *
 * Optional:
 *   CDN_S3_PREFIX=moonsofts          (folder inside the bucket)
 *   CDN_S3_ENDPOINT=https://...      (R2 / custom endpoint)
 *   CDN_S3_PUBLIC_ACL=0              (set to skip --acl public-read)
 *
 * Prerequisites:
 *   npm run cdn:prepare
 *   AWS CLI installed and configured (aws configure)
 */
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const bundleDir = path.resolve(__dirname, '../cdn-upload')

const bucket = process.env.CDN_S3_BUCKET?.trim()
const prefix = (process.env.CDN_S3_PREFIX ?? '').replace(/^\/|\/$/g, '')
const endpoint = process.env.CDN_S3_ENDPOINT?.trim()
const useAcl = process.env.CDN_S3_PUBLIC_ACL !== '0'

if (!bucket) {
  console.error('Set CDN_S3_BUCKET (e.g. my-moonsofts-assets)')
  process.exit(1)
}

if (!fs.existsSync(bundleDir)) {
  console.error('cdn-upload/ not found. Run: npm run cdn:prepare')
  process.exit(1)
}

const destKey = prefix ? `${prefix}/` : ''
const dest = `s3://${bucket}/${destKey}`

const parts = [
  'aws',
  's3',
  'sync',
  `"${bundleDir.replace(/\\/g, '/')}"`,
  `"${dest}"`,
  '--exclude',
  '".DS_Store"',
]

if (useAcl) {
  parts.push('--acl', 'public-read')
}

if (endpoint) {
  parts.push('--endpoint-url', endpoint)
}

const cmd = parts.join(' ')
console.log(`Uploading to ${dest}\n${cmd}\n`)

try {
  execSync(cmd, { stdio: 'inherit', shell: true })
} catch {
  process.exit(1)
}

const baseUrl = process.env.VITE_CDN_BASE_URL?.replace(/\/$/, '')
console.log('\nUpload complete.')
if (baseUrl) {
  console.log(`App expects: VITE_CDN_BASE_URL=${baseUrl}`)
  console.log(`Example image: ${baseUrl}/${prefix ? `${prefix}/` : ''}brand/logo.png`)
} else {
  console.log('Set VITE_CDN_BASE_URL to your public CDN URL (custom domain or bucket URL + prefix).')
}

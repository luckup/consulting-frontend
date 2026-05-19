/**
 * Copies cdn-upload/ → public/ so Vercel serves images at /brand/logo.png, etc.
 * Run after: npm run cdn:prepare
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const bundleDir = path.resolve(__dirname, '../cdn-upload')
const publicRoot = path.resolve(__dirname, '../public')

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name)
    const to = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(from, to)
    } else {
      fs.mkdirSync(path.dirname(to), { recursive: true })
      fs.copyFileSync(from, to)
    }
  }
}

if (!fs.existsSync(bundleDir)) {
  console.error('cdn-upload/ not found. Run: npm run cdn:prepare')
  process.exit(1)
}

// Remove previous image trees (keep favicon etc. at public root)
const imageRoots = ['brand', 'heroes', 'home', 'news', 'pages']
for (const dir of imageRoots) {
  const target = path.join(publicRoot, dir)
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true })
  }
}

copyDir(bundleDir, publicRoot)

const count = fs.readdirSync(bundleDir, { recursive: true }).filter((f) => {
  try {
    return fs.statSync(path.join(bundleDir, f)).isFile()
  } catch {
    return false
  }
}).length

console.log(`Synced ${count} file(s) from cdn-upload/ to public/`)
console.log('Vercel will serve them at https://<your-domain>/<path> (e.g. /brand/logo.png)')

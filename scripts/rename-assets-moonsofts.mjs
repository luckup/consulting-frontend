/**
 * One-time: prefix every file under src/assets/ with moonsofts- and refresh the CDN manifest keys.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const assetsRoot = path.join(root, 'src', 'assets')
const manifestPath = path.join(__dirname, 'cdn-asset-manifest.json')

const PREFIX = 'moonsofts-'
const SKIP = new Set(['.gitkeep', 'ASSETS.txt'])

function prefixedBase(name) {
  return name.startsWith(PREFIX) ? name : `${PREFIX}${name}`
}

function prefixedRel(rel) {
  const dir = path.dirname(rel)
  const base = path.basename(rel)
  const next = prefixedBase(base)
  return dir === '.' ? next : `${dir}/${next}`.replace(/\\/g, '/')
}

function walkFiles(dir, list = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === '.gitkeep') continue
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) walkFiles(full, list)
    else if (!SKIP.has(ent.name)) list.push(full)
  }
  return list
}

// Rename deepest paths first
const files = walkFiles(assetsRoot).sort((a, b) => b.length - a.length)
const renames = []

for (const full of files) {
  const rel = path.relative(assetsRoot, full).replace(/\\/g, '/')
  const base = path.basename(rel)
  if (base.startsWith(PREFIX)) continue
  const newRel = prefixedRel(rel)
  const dest = path.join(assetsRoot, newRel)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.renameSync(full, dest)
  renames.push({ from: rel, to: newRel })
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
const nextAssets = {}

for (const [local, cdn] of Object.entries(manifest.assets)) {
  const newLocal = prefixedRel(local)
  nextAssets[newLocal] = cdn
}

manifest.assets = nextAssets
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

console.log(`Renamed ${renames.length} file(s) under src/assets/`)
console.log(`Updated ${Object.keys(nextAssets).length} manifest key(s)`)

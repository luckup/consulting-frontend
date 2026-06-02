import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const PREFIX = 'moonsofts-'

function prefixPath(p) {
  const parts = p.split('/')
  const file = parts.pop()
  if (file.startsWith(PREFIX)) return p
  return `${parts.join('/')}/${PREFIX}${file}`
}

function prefixImports(content) {
  return content.replace(/@\/assets\/(.+?)'/g, (m, rel) => m.replace(rel, prefixPath(rel)))
}

function prefixCdnUrl(content) {
  return content.replace(/cdnUrl\('([^']+)'\)/g, (_, p) => `cdnUrl('${prefixPath(p)}')`)
}

function prefixCdnKey(content) {
  return content.replace(/cdnKey\('([^']+)'\)/g, (_, p) => `cdnKey('${prefixPath(p)}')`)
}

const files = [
  { path: 'src/lib/siteImages.local.ts', fn: prefixImports },
  { path: 'src/lib/siteImages.cdn.ts', fn: prefixCdnUrl },
  { path: 'src/lib/siteImagePaths.ts', fn: (c) => prefixCdnKey(prefixCdnUrl(c)) },
  { path: 'src/components/icons/ClutchLogo.tsx', fn: prefixImports },
  { path: 'src/components/icons/TrustpilotLogo.tsx', fn: prefixImports },
]

for (const { path: rel, fn } of files) {
  const fp = path.join(root, rel)
  const next = fn(fs.readFileSync(fp, 'utf8'))
  fs.writeFileSync(fp, next)
  console.log('Updated', rel)
}

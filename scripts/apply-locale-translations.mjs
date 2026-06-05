/**
 * Applies locale string replacements to cloned en content files.
 * Run: node scripts/apply-locale-translations.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'i18n', 'messages', 'content')

/** @type {Record<string, Record<string, string>>} */
const maps = {
  es: {},
  pt: {},
  ja: {},
}

function loadMap(locale, filename) {
  const path = join(dirname(fileURLToPath(import.meta.url)), 'locale-maps', `${locale}-${filename}.json`)
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    return {}
  }
}

function applyMap(content, map) {
  const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length)
  let out = content
  for (const [from, to] of entries) {
    if (from && to) out = out.split(from).join(to)
  }
  return out
}

const files = ['Ui', 'Sidebar', 'HomeSections', 'HomeFaq', 'Industries', 'News', 'Pages']

for (const locale of ['es', 'pt', 'ja']) {
  for (const file of files) {
    const map = { ...loadMap(locale, file.toLowerCase()), ...loadMap(locale, 'common') }
    if (Object.keys(map).length === 0) continue
    const path = join(root, `${locale}${file}.ts`)
    const updated = applyMap(readFileSync(path, 'utf8'), map)
    writeFileSync(path, updated)
    console.log(`Updated ${locale}${file}.ts (${Object.keys(map).length} replacements)`)
  }
}

const CDN_BASE = (import.meta.env.VITE_CDN_BASE_URL ?? '').replace(/\/$/, '')

const MOONSOFTS_PREFIX = 'moonsofts-'

/** CDN object key with `moonsofts-` on the filename for image SEO. */
export function moonsoftsImageKey(relativePath: string): string {
  const path = relativePath.replace(/^\//, '')
  const slash = path.lastIndexOf('/')
  const dir = slash >= 0 ? path.slice(0, slash + 1) : ''
  const base = slash >= 0 ? path.slice(slash + 1) : path
  if (!base || base.startsWith(MOONSOFTS_PREFIX)) {
    return path
  }
  return `${dir}${MOONSOFTS_PREFIX}${base}`
}

export function isCdnEnabled(): boolean {
  return CDN_BASE.length > 0
}

/** Absolute URL on the CDN, or a root-relative path when CDN is not configured. */
export function cdnUrl(relativePath: string): string {
  const path = moonsoftsImageKey(relativePath)
  if (!isCdnEnabled()) {
    return `/${path}`
  }
  return `${CDN_BASE}/${path}`
}

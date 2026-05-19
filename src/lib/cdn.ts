const CDN_BASE = (import.meta.env.VITE_CDN_BASE_URL ?? '').replace(/\/$/, '')

export function isCdnEnabled(): boolean {
  return CDN_BASE.length > 0
}

/** Absolute URL on the CDN, or a root-relative path when CDN is not configured. */
export function cdnUrl(relativePath: string): string {
  const path = relativePath.replace(/^\//, '')
  if (!isCdnEnabled()) {
    return `/${path}`
  }
  return `${CDN_BASE}/${path}`
}

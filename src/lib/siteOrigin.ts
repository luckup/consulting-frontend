/**
 * Canonical site origin for SEO (Open Graph URL, JSON-LD, sitemap alignment).
 * Set `VITE_SITE_URL` in production to your public origin (no trailing slash), e.g. https://moonsofts.com
 * When unset, the browser uses `window.location.origin` after load (fine for SPA + Google).
 */
export function getSiteOrigin(): string {
  const fromEnv = (import.meta.env.VITE_SITE_URL ?? '').trim().replace(/\/$/, '')
  if (fromEnv) return fromEnv
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin
  return ''
}

export function absoluteUrl(origin: string, pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (!origin) return path
  return `${origin}${path}`
}

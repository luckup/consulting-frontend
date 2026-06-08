import { cdnUrl, isCdnEnabled } from '@/lib/cdn'
import { getSiteOrigin } from '@/lib/siteOrigin'

const DEFAULT_SITE_ORIGIN = 'https://moonsofts.com'

function emailAssetOrigin(): string {
  return getSiteOrigin() || DEFAULT_SITE_ORIGIN
}

function toAbsoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${emailAssetOrigin()}${normalized}`
}

/** Absolute URL for the MoonSofts logo in transactional email HTML. */
export function contactEmailCompanyLogoUrl(): string {
  if (isCdnEnabled()) {
    return cdnUrl('brand/moonsofts-logo.png')
  }
  return toAbsoluteUrl('/brand/logo.png')
}

/** Absolute URL for Yuji's profile photo in client-facing emails. */
export function contactEmailYujiLogoUrl(): string {
  if (isCdnEnabled()) {
    return cdnUrl('brand/yuji-logo.jpg')
  }
  return toAbsoluteUrl('/brand/yuji-logo.jpg')
}

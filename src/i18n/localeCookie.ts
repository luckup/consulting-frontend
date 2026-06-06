import {
  CHINESE_REGIONS,
  DEFAULT_LOCALE,
  JAPANESE_REGIONS,
  LOCALE_COOKIE,
  LOCALE_HTML_LANG,
  PORTUGUESE_REGIONS,
  SPANISH_REGIONS,
  isLocale,
  type Locale,
} from './types'

const LANGUAGE_TO_LOCALE: Record<string, Locale> = {
  en: 'en',
  zh: 'zh',
  es: 'es',
  pt: 'pt',
  ja: 'ja',
}

const IP_GEO_TIMEOUT_MS = 2800

export function localeFromCountry(countryCode: string | null | undefined): Locale {
  const code = countryCode?.trim().toUpperCase()
  if (code && CHINESE_REGIONS.has(code)) return 'zh'
  if (code && JAPANESE_REGIONS.has(code)) return 'ja'
  if (code && PORTUGUESE_REGIONS.has(code)) return 'pt'
  if (code && SPANISH_REGIONS.has(code)) return 'es'
  return DEFAULT_LOCALE
}

export function normalizeCountryCode(countryCode: string | null | undefined): string | null {
  const code = countryCode?.trim().toUpperCase()
  if (!code || code === 'XX') return null
  return code
}

export function clientIpFromRequest(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }

  return request.headers.get('x-real-ip')?.trim() ?? null
}

function isPrivateOrLocalIp(ip: string): boolean {
  if (ip === '127.0.0.1' || ip === '::1' || ip === 'localhost') return true
  if (ip.startsWith('10.') || ip.startsWith('192.168.') || ip.startsWith('169.254.')) return true

  if (ip.startsWith('172.')) {
    const second = Number(ip.split('.')[1])
    if (second >= 16 && second <= 31) return true
  }

  return false
}

export function countryCodeFromRequest(request: Request): string | null {
  return normalizeCountryCode(
    request.headers.get('x-vercel-ip-country') ?? request.headers.get('cf-ipcountry'),
  )
}

async function countryCodeFromIpLookup(ip: string): Promise<string | null> {
  if (isPrivateOrLocalIp(ip)) return null

  try {
    const response = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      headers: { 'User-Agent': 'moonsofts-locale/1.0' },
    })
    if (!response.ok) return null

    const data = (await response.json()) as { success?: boolean; country_code?: string }
    if (data.success === false) return null
    return normalizeCountryCode(data.country_code)
  } catch {
    return null
  }
}

/** Server-side IP lookup when CDN geo headers are missing (non-Vercel hosts). */
export async function countryCodeFromRequestAsync(request: Request): Promise<string | null> {
  const fromHeader = countryCodeFromRequest(request)
  if (fromHeader) return fromHeader

  const clientIp = clientIpFromRequest(request)
  if (!clientIp) return null

  return countryCodeFromIpLookup(clientIp)
}

/** Browser-side IP lookup for local dev and hosts without edge geo headers. */
export async function countryCodeFromClientIpGeo(): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), IP_GEO_TIMEOUT_MS)

    try {
      const response = await fetch('https://ipwho.is/', {
        signal: controller.signal,
        credentials: 'omit',
      })
      if (!response.ok) return null

      const data = (await response.json()) as { success?: boolean; country_code?: string }
      if (data.success === false) return null
      return normalizeCountryCode(data.country_code)
    } finally {
      window.clearTimeout(timeout)
    }
  } catch {
    return null
  }
}

export function localeFromAcceptLanguage(acceptLanguage: string | null | undefined): Locale | null {
  if (!acceptLanguage?.trim()) return null

  for (const part of acceptLanguage.split(',')) {
    const tag = part.trim().split(';')[0]?.trim().toLowerCase()
    if (!tag) continue

    const direct = LANGUAGE_TO_LOCALE[tag]
    if (direct) return direct

    const primary = tag.split('-')[0]
    const fromPrimary = primary ? LANGUAGE_TO_LOCALE[primary] : undefined
    if (fromPrimary) return fromPrimary
  }

  return null
}

export function localeFromNavigator(): Locale | null {
  if (typeof navigator === 'undefined') return null
  const languages = navigator.languages?.length ? [...navigator.languages] : [navigator.language]
  return localeFromAcceptLanguage(languages.filter(Boolean).join(','))
}

/** Prefer IP country; fall back to browser Accept-Language when geo is unknown. */
export function resolveAutoLocale(options: {
  countryCode?: string | null
  acceptLanguage?: string | null
}): Locale {
  if (normalizeCountryCode(options.countryCode)) {
    return localeFromCountry(options.countryCode)
  }

  const fromLanguage = localeFromAcceptLanguage(options.acceptLanguage)
  if (fromLanguage) return fromLanguage

  return DEFAULT_LOCALE
}

export async function resolveAutoLocaleAsync(options: {
  countryCode?: string | null
  acceptLanguage?: string | null
}): Promise<Locale> {
  if (normalizeCountryCode(options.countryCode)) {
    return localeFromCountry(options.countryCode)
  }

  const fromLanguage = localeFromAcceptLanguage(options.acceptLanguage)
  if (fromLanguage) return fromLanguage

  return DEFAULT_LOCALE
}

export function applyDocumentLocale(locale: Locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = LOCALE_HTML_LANG[locale]
  document.documentElement.dataset.locale = locale
}

export function readLocaleCookie(cookieHeader: string | null | undefined): Locale | null {
  if (!cookieHeader) return null
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=(en|zh|es|pt|ja)(?:;|$)`))
  const value = match?.[1]
  return isLocale(value) ? value : null
}

export function localeCookieValue(locale: Locale): string {
  return `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`
}

export function readLocaleFromDocumentCookie(): Locale | null {
  if (typeof document === 'undefined') return null
  return readLocaleCookie(document.cookie)
}

export function writeLocaleCookie(locale: Locale) {
  if (typeof document === 'undefined') return
  document.cookie = localeCookieValue(locale)
}

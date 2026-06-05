import {
  CHINESE_REGIONS,
  DEFAULT_LOCALE,
  JAPANESE_REGIONS,
  LOCALE_COOKIE,
  PORTUGUESE_REGIONS,
  SPANISH_REGIONS,
  isLocale,
  type Locale,
} from '@/i18n/types'

export function localeFromCountry(countryCode: string | null | undefined): Locale {
  const code = countryCode?.trim().toUpperCase()
  if (code && CHINESE_REGIONS.has(code)) return 'zh'
  if (code && JAPANESE_REGIONS.has(code)) return 'ja'
  if (code && PORTUGUESE_REGIONS.has(code)) return 'pt'
  if (code && SPANISH_REGIONS.has(code)) return 'es'
  return DEFAULT_LOCALE
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

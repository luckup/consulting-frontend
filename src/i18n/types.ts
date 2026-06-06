export type Locale = 'en' | 'zh' | 'es' | 'pt' | 'ja'

export const LOCALES: readonly Locale[] = ['en', 'zh', 'es', 'pt', 'ja'] as const

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_COOKIE = 'moonsofts_locale'

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  pt: 'Português',
  ja: '日本語',
}

/** Regional flags aligned with LOCALE_OG primary markets */
export const LOCALE_FLAGS: Record<Locale, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
  es: '🇪🇸',
  pt: '🇧🇷',
  ja: '🇯🇵',
}

export function formatLocaleOption(code: Locale): string {
  return `${LOCALE_FLAGS[code]} ${LOCALE_LABELS[code]}`
}

/** BCP 47 tags for document.documentElement.lang */
export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
  es: 'es',
  pt: 'pt',
  ja: 'ja',
}

/** ISO 3166-1 alpha-2 — regions where we show Simplified Chinese. */
export const CHINESE_REGIONS = new Set(['CN', 'HK', 'MO', 'TW', 'SG'])

export const JAPANESE_REGIONS = new Set(['JP'])

export const PORTUGUESE_REGIONS = new Set(['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL'])

export const SPANISH_REGIONS = new Set([
  'ES',
  'MX',
  'AR',
  'CO',
  'CL',
  'PE',
  'VE',
  'EC',
  'GT',
  'CU',
  'BO',
  'DO',
  'HN',
  'PY',
  'SV',
  'NI',
  'CR',
  'PA',
  'UY',
  'PR',
  'GQ',
])

/** Open Graph locale tags (underscore form) */
export const LOCALE_OG: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  es: 'es_ES',
  pt: 'pt_BR',
  ja: 'ja_JP',
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'zh' || value === 'es' || value === 'pt' || value === 'ja'
}

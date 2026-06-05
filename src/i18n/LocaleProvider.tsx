import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LocaleContext } from '@/i18n/localeContext'
import { readLocaleFromDocumentCookie, writeLocaleCookie } from '@/i18n/localeCookie'
import { translate } from '@/i18n/translate'
import { DEFAULT_LOCALE, LOCALE_HTML_LANG, isLocale, type Locale } from '@/i18n/types'

async function resolveInitialLocale(): Promise<Locale> {
  const fromCookie = readLocaleFromDocumentCookie()
  if (fromCookie) return fromCookie

  try {
    const response = await fetch('/api/locale', { credentials: 'same-origin' })
    if (!response.ok) return DEFAULT_LOCALE
    const data = (await response.json()) as { locale?: string }
    const locale = isLocale(data.locale) ? data.locale : DEFAULT_LOCALE
    writeLocaleCookie(locale)
    return locale
  } catch {
    return DEFAULT_LOCALE
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocaleFromDocumentCookie() ?? DEFAULT_LOCALE)
  const [ready, setReady] = useState(Boolean(readLocaleFromDocumentCookie()))

  useEffect(() => {
    let cancelled = false
    void resolveInitialLocale().then((next) => {
      if (cancelled) return
      setLocaleState(next)
      setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[locale]
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    writeLocaleCookie(next)
    setLocaleState(next)
  }, [])

  const t = useCallback((key: string) => translate(locale, key), [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      ready,
    }),
    [locale, ready, setLocale, t],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

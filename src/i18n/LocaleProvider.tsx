import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LocaleContext } from '@/i18n/localeContext'
import {
  applyDocumentLocale,
  countryCodeFromClientIpGeo,
  localeFromCountry,
  localeFromNavigator,
  readLocaleFromDocumentCookie,
  writeLocaleCookie,
} from '@/i18n/localeCookie'
import { translate } from '@/i18n/translate'
import { DEFAULT_LOCALE, isLocale, type Locale } from '@/i18n/types'

function LocaleBootScreen() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-paper-50"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="page-loader-shimmer h-[40px] w-[40px] rounded-full" aria-hidden />
    </div>
  )
}

async function resolveInitialLocale(): Promise<Locale> {
  const fromCookie = readLocaleFromDocumentCookie()
  if (fromCookie) return fromCookie

  try {
    const response = await fetch('/api/locale', { credentials: 'same-origin' })
    if (response.ok) {
      const data = (await response.json()) as { locale?: string }
      if (isLocale(data.locale)) {
        writeLocaleCookie(data.locale)
        return data.locale
      }
    }
  } catch {
    // fall through to client-side geo
  }

  const countryCode = await countryCodeFromClientIpGeo()
  if (countryCode) {
    const locale = localeFromCountry(countryCode)
    writeLocaleCookie(locale)
    return locale
  }

  const locale = localeFromNavigator() ?? DEFAULT_LOCALE
  writeLocaleCookie(locale)
  return locale
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readLocaleFromDocumentCookie() ?? DEFAULT_LOCALE)
  const [ready, setReady] = useState(() => Boolean(readLocaleFromDocumentCookie()))

  useEffect(() => {
    let cancelled = false
    void resolveInitialLocale().then((next) => {
      if (cancelled) return
      applyDocumentLocale(next)
      setLocaleState(next)
      setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    applyDocumentLocale(locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    writeLocaleCookie(next)
    applyDocumentLocale(next)
    setLocaleState(next)
    setReady(true)
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

  if (!ready) {
    return <LocaleBootScreen />
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

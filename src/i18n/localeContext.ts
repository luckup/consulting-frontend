import { createContext } from 'react'
import type { Locale } from '@/i18n/types'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  ready: boolean
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

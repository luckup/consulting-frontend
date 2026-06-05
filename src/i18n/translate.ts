import type { Locale } from '@/i18n/types'
import { DEFAULT_LOCALE } from '@/i18n/types'
import { deepMerge } from '@/i18n/deepMerge'
import { enMessages } from '@/i18n/messages/en'
import { esMessages } from '@/i18n/messages/es'
import { jaMessages } from '@/i18n/messages/ja'
import { ptMessages } from '@/i18n/messages/pt'
import { zhMessages } from '@/i18n/messages/zh'

export type Messages = typeof enMessages

const catalogs: Record<Locale, Messages> = {
  en: enMessages,
  zh: zhMessages as unknown as Messages,
  es: esMessages as unknown as Messages,
  pt: ptMessages as unknown as Messages,
  ja: jaMessages as unknown as Messages,
}

function readPath(source: unknown, path: string[]): unknown {
  let node: unknown = source
  for (const segment of path) {
    if (node == null || typeof node !== 'object') return undefined
    node = (node as Record<string, unknown>)[segment]
  }
  return node
}

export function translate(locale: Locale, key: string): string {
  const messages = getMessages(locale)
  const path = key.split('.')
  const primary = readPath(messages, path)
  if (typeof primary === 'string') return primary

  if (locale !== DEFAULT_LOCALE) {
    const fallback = readPath(enMessages, path)
    if (typeof fallback === 'string') return fallback
  }

  return key
}

export function getMessages(locale: Locale): Messages {
  if (locale === DEFAULT_LOCALE) return enMessages
  return deepMerge(enMessages, catalogs[locale]) as Messages
}

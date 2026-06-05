import { getMessages, type Messages } from '@/i18n/translate'
import type { Locale } from '@/i18n/types'
import { mediumPosts as baseMediumPosts } from '@/lib/mediumPosts'
import { openPositions as baseOpenPositions } from '@/lib/careersData'
import { websiteOfferings as baseOfferings } from '@/lib/servicesData'

export function getHomeFaqItems(locale: Locale) {
  return getMessages(locale).faq
}

export function getEngagementModels(locale: Locale) {
  const models = getMessages(locale).pages.data.engagementModels
  return Object.values(models)
}

export function getDeliveryPhases(locale: Locale) {
  const phases = getMessages(locale).pages.data.deliveryPhases
  return Object.values(phases)
}

export function getWebsiteOfferings(locale: Locale) {
  const offerings = getMessages(locale).pages.data.websiteOfferings
  return baseOfferings.map((base) => {
    const copy = offerings[base.id as keyof typeof offerings]
    if (!copy) return base
    return { ...base, ...copy }
  })
}

export function getClientStats(locale: Locale) {
  const stats = getMessages(locale).pages.data.clientStats
  return Object.values(stats)
}

export function getTestimonials(locale: Locale) {
  const data = getMessages(locale).pages.data.testimonials
  return Object.entries(data).map(([id, copy]) => ({ id, ...copy }))
}

export function getTestimonialForIndustry(locale: Locale, industryId: string) {
  const map: Record<string, string> = {
    ecommerce: 't1',
    logistics: 't3',
    healthcare: 't2',
    financial: 't6',
    construction: 't7',
    manufacturing: 't4',
    education: 't5',
  }
  const testimonialId = map[industryId]
  if (!testimonialId) return undefined
  const data = getMessages(locale).pages.data.testimonials
  const copy = data[testimonialId as keyof typeof data]
  if (!copy) return undefined
  return { id: testimonialId, ...copy }
}

export function getOpenPositions(locale: Locale) {
  const data = getMessages(locale).pages.data.openPositions
  return baseOpenPositions.map((base) => {
    const copy = data[base.id as keyof typeof data]
    if (!copy || typeof copy !== 'object') return base
    return { ...base, ...copy }
  })
}

export function getOpenPositionRoleLabels(locale: Locale) {
  return getMessages(locale).pages.data.openPositionRoleLabels
}

export function getMediumPosts(locale: Locale) {
  const localized = getMessages(locale).pages.data.mediumPosts
  return baseMediumPosts.map((base, index) => ({
    ...base,
    title: localized[index]?.title ?? base.title,
    date: localized[index]?.date ?? base.date,
    summary: localized[index]?.summary ?? base.summary,
  }))
}

export function getStackCatalog(locale: Locale) {
  return getMessages(locale).pages.data.stackCatalog
}

export function getOutcomeCards(locale: Locale) {
  const cards = getMessages(locale).pages.data.outcomeCards
  return Object.values(cards)
}

export function getTrustedIndustries(locale: Locale) {
  return getMessages(locale).pages.data.trustedIndustries
}

export function getPageContent<K extends keyof Messages['pages']>(locale: Locale, pageId: K): Messages['pages'][K] {
  return getMessages(locale).pages[pageId]
}

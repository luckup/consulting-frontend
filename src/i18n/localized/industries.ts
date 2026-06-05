import { getMessages } from '@/i18n/translate'
import type { Locale } from '@/i18n/types'
import { industries as baseIndustries } from '@/lib/industriesData'
import { siteImages } from '@/lib/siteImages'

const industryImages = baseIndustries.map((ind) => ({
  id: ind.id,
  heroImage: ind.heroImage,
  pageImage: ind.pageImage,
}))

export function getIndustries(locale: Locale) {
  const { industries: text } = getMessages(locale)
  return baseIndustries.map((base) => {
    const copy = text[base.id as keyof typeof text]
    if (!copy || typeof copy !== 'object' || !('title' in copy)) {
      return base
    }
    const t = copy as {
      label: string
      title: string
      body: string
      highlights: readonly string[]
      support: { intro: string; detail: string; services: readonly string[] }
      ctaLabel: string
    }
    return {
      ...base,
      label: t.label,
      title: t.title,
      body: t.body,
      highlights: t.highlights,
      support: t.support,
      cta: { label: t.ctaLabel, to: base.cta.to },
    }
  })
}

export function getIndustryBySlug(locale: Locale, slug: string | undefined) {
  if (!slug) return undefined
  return getIndustries(locale).find((sector) => sector.id === slug)
}

export function getHomeIndustries(locale: Locale) {
  const { homeSections } = getMessages(locale)
  const imageMap: Record<string, string> = {
    '/industries/ecommerce': siteImages.home.ecommerce,
    '/industries/logistics': siteImages.home.logistics,
    '/industries/healthcare': siteImages.home.healthcare,
    '/industries/construction': siteImages.home.construction,
    '/industries/financial': siteImages.home.fintech,
    '/industries/manufacturing': siteImages.home.manufacturing,
    '/industries/education': siteImages.home.education,
    '/industries/agriculture': siteImages.home.agriculture,
    '/industries/restaurant': siteImages.home.restaurant,
  }
  return homeSections.homeIndustries.map((item) => ({
    ...item,
    image: imageMap[item.to] ?? siteImages.home.ecommerce,
  }))
}

export { industryImages }

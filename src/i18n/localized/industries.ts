import { getMessages } from '@/i18n/translate'
import type { Locale } from '@/i18n/types'
import { industries as baseIndustries, industryPath } from '@/lib/industriesData'
import { canonicalizePath } from '@/lib/canonicalRoutes'
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

  const canonicalPath = canonicalizePath(`/industries/${decodeURIComponent(slug)}`)
  const canonicalSlug = canonicalPath.startsWith('/industries/')
    ? canonicalPath.slice('/industries/'.length).split(/[?#]/)[0]
    : slug

  return getIndustries(locale).find((sector) => sector.id === canonicalSlug)
}

const HOME_INDUSTRY_IMAGE_BY_ID: Record<string, string> = {
  ecommerce: siteImages.home.ecommerce,
  logistics: siteImages.home.logistics,
  healthcare: siteImages.home.healthcare,
  construction: siteImages.home.construction,
  financial: siteImages.home.fintech,
  manufacturing: siteImages.home.manufacturing,
  education: siteImages.home.education,
  agriculture: siteImages.home.agriculture,
  restaurant: siteImages.home.restaurant,
}

export function getHomeIndustries(locale: Locale) {
  const { homeSections } = getMessages(locale)

  return homeSections.homeIndustries.map((item, index) => {
    const industry = baseIndustries[index]
    const id = industry?.id ?? 'ecommerce'

    return {
      ...item,
      to: industry ? industryPath(industry.id) : item.to,
      image: HOME_INDUSTRY_IMAGE_BY_ID[id] ?? siteImages.home.ecommerce,
    }
  })
}

export { industryImages }

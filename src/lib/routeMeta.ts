import { getIndustryBySlug } from '@/i18n/localized/industries'
import { getNewsArticleById } from '@/i18n/localized/news'
import { newsDisplayDateToIso } from '@/lib/newsDate'
import { translate } from '@/i18n/translate'
import type { Locale } from '@/i18n/types'
import { CONTACT_PAGE_KEYWORDS, SERVICES_PAGE_KEYWORDS } from '@/lib/seoFootballKeywords'
import { siteImages } from '@/lib/siteImages'

export type PageSeo = {
  title: string
  description: string
  ogType: 'website' | 'article'
  ogImage?: string
  robots?: string
  articleDatePublished?: string
  pageKeywords?: string[]
  articleKeywords?: string[]
}

const META_ROUTE_KEYS: Record<string, string> = {
  '/': 'meta.home',
  '/about': 'meta.about',
  '/services': 'meta.services',
  '/portfolio': 'meta.portfolio',
  '/industries': 'meta.industries',
  '/clients': 'meta.clients',
  '/stack': 'meta.stack',
  '/news': 'meta.news',
  '/team': 'meta.team',
  '/engineers': 'meta.engineers',
  '/contact': 'meta.contact',
  '/privacy': 'meta.privacy',
}

function snippet(text: string, max = 158): string {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  const trimmed = (lastSpace > 60 ? cut.slice(0, lastSpace) : cut).trim()
  return `${trimmed}…`
}

export function resolvePageSeo(pathname: string, locale: Locale = 'en'): PageSeo {
  const newsMatch = pathname.match(/^\/news\/([^/]+)$/)
  if (newsMatch?.[1]) {
    const article = getNewsArticleById(locale, newsMatch[1])
    if (article) {
      const articleDatePublished = newsDisplayDateToIso(article.date)
      return {
        title: `${article.title} | MoonSofts`,
        description: snippet(article.excerpt, 155),
        ogType: 'article',
        ogImage: article.image,
        articleDatePublished,
        articleKeywords: article.seoKeywords,
      }
    }
  }

  const industryMatch = pathname.match(/^\/industries\/([^/]+)$/)
  if (industryMatch?.[1]) {
    const sector = getIndustryBySlug(locale, industryMatch[1])
    if (sector) {
      return {
        title: `${sector.title} | MoonSofts`,
        description: snippet(sector.body, 158),
        ogType: 'website',
        ogImage: sector.heroImage,
      }
    }
  }

  const metaKey = META_ROUTE_KEYS[pathname]
  if (metaKey) {
    const pageKeywords =
      pathname === '/contact'
        ? [...CONTACT_PAGE_KEYWORDS]
        : pathname === '/services'
          ? [...SERVICES_PAGE_KEYWORDS]
          : undefined
    return {
      title: translate(locale, `${metaKey}.title`),
      description: snippet(translate(locale, `${metaKey}.description`), 158),
      ogType: 'website',
      ogImage: pathname === '/' ? siteImages.home.section0 : undefined,
      pageKeywords,
    }
  }

  return {
    title: translate(locale, 'meta.default.title'),
    description: snippet(translate(locale, 'meta.default.description'), 158),
    ogType: 'website',
  }
}

import { getIndustryBySlug } from '@/lib/industriesData'
import { newsDisplayDateToIso } from '@/lib/newsDate'
import { getNewsBySlug } from '@/lib/newsData'
import { CONTACT_PAGE_KEYWORDS, SERVICES_PAGE_KEYWORDS } from '@/lib/seoFootballKeywords'
import { HOME_SEO_DESCRIPTION, HOME_SEO_TITLE } from '@/lib/seoLandingMeta'
import { siteImages } from '@/lib/siteImages'

export type PageSeo = {
  title: string
  description: string
  ogType: 'website' | 'article'
  ogImage?: string
  robots?: string
  /** ISO 8601 date (YYYY-MM-DD) for NewsArticle structured data */
  articleDatePublished?: string
  /** Schema.org keywords for WebPage JSON-LD */
  pageKeywords?: string[]
  /** Schema.org NewsArticle `keywords` (not the legacy meta keywords tag) */
  articleKeywords?: string[]
}

type RouteMetaBase = {
  title: string
  description: string
  robots?: string
  ogImage?: string
}

const defaults: RouteMetaBase = {
  title: 'MoonSofts | Software consulting company — custom websites & remote teams',
  description:
    'MoonSofts is a software consulting company helping startups and enterprises ship with remote senior squads, custom websites, AI-assisted delivery, and a free 2026 World Cup website program for football players.',
}

const exact: Record<string, RouteMetaBase> = {
  '/': {
    title: HOME_SEO_TITLE,
    description: HOME_SEO_DESCRIPTION,
    ogImage: siteImages.home.section0,
  },
  '/about': {
    title: 'About MoonSofts | Global software consulting & remote delivery',
    description:
      'Our story, values, and commitments as MoonSofts—a software consulting company built for remote collaboration, startup speed, and enterprise-grade accountability.',
  },
  '/services': {
    title: 'Custom websites & software consulting | MoonSofts — free World Cup football sites',
    description:
      'MoonSofts builds custom websites for football players and enterprises—portfolios, e-commerce, SaaS, MVPs, and free 2026 World Cup highlight sites for selected football stars and fan communities.',
  },
  '/industries': {
    title: 'Industries we serve | MoonSofts software consulting',
    description:
      'Sector-focused software consulting from MoonSofts—e-commerce, logistics, healthcare, fintech, manufacturing, education, agriculture, hospitality, and more. Remote teams with domain context.',
  },
  '/clients': {
    title: 'Client voices & outcomes | MoonSofts software consulting',
    description:
      'Testimonials, trust signals, and delivery outcomes from MoonSofts consulting programs—remote squads startups and enterprises rely on for predictable releases.',
  },
  '/stack': {
    title: 'Technology & delivery platform | MoonSofts remote engineering',
    description:
      'How MoonSofts equips remote software teams—stack, tooling, and delivery platform practices for secure, observable, and repeatable engineering.',
  },
  '/news': {
    title: 'News & insights | Free 2026 World Cup football websites & software consulting',
    description:
      'MoonSofts newsroom: free website development for 2026 World Cup football stars, football players, and fan communities—plus insights on AI, cloud, and software consulting.',
  },
  '/team': {
    title: 'Leadership team | MoonSofts software consulting',
    description:
      'Meet the MoonSofts leadership team guiding our global software consulting practice and remote delivery standards.',
  },
  '/engineers': {
    title: 'Careers & engineers | MoonSofts — remote software consulting jobs',
    description:
      'Join MoonSofts—remote-friendly software consulting careers for students, graduates, and experienced engineers who care about craft and client outcomes.',
  },
  '/contact': {
    title: 'Contact MoonSofts | Apply for a free 2026 World Cup football player website',
    description:
      'Contact MoonSofts to apply for a free custom website for football players, football stars, and fan communities ahead of the 2026 World Cup—share highlights, match clips, and your story—or discuss software consulting.',
  },
  '/privacy': {
    title: 'Legal, privacy & security | MoonSofts',
    description:
      'Privacy, security, and terms for MoonSofts websites and consulting engagements—how we handle data and communications.',
    robots: 'index, follow',
  },
}

function snippet(text: string, max = 158): string {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  const trimmed = (lastSpace > 60 ? cut.slice(0, lastSpace) : cut).trim()
  return `${trimmed}…`
}

export function resolvePageSeo(pathname: string): PageSeo {
  const newsMatch = pathname.match(/^\/news\/([^/]+)$/)
  if (newsMatch?.[1]) {
    const article = getNewsBySlug(newsMatch[1])
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
    const sector = getIndustryBySlug(industryMatch[1])
    if (sector) {
      return {
        title: `${sector.title} | MoonSofts software consulting`,
        description: snippet(
          `${sector.body} MoonSofts provides remote software consulting and delivery for teams in this sector.`,
          158,
        ),
        ogType: 'website',
        ogImage: sector.heroImage,
      }
    }
  }

  const base = exact[pathname]
  if (base) {
    const pageKeywords =
      pathname === '/contact'
        ? [...CONTACT_PAGE_KEYWORDS]
        : pathname === '/services'
          ? [...SERVICES_PAGE_KEYWORDS]
          : undefined
    return {
      title: base.title,
      description: snippet(base.description, 158),
      ogType: 'website',
      robots: base.robots,
      ogImage: base.ogImage,
      pageKeywords,
    }
  }

  return {
    title: defaults.title,
    description: snippet(defaults.description, 158),
    ogType: 'website',
    robots: defaults.robots,
  }
}

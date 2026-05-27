import { getIndustryBySlug } from '@/lib/industriesData'
import { newsDisplayDateToIso } from '@/lib/newsDate'
import { getNewsBySlug } from '@/lib/newsData'

export type PageSeo = {
  title: string
  description: string
  ogType: 'website' | 'article'
  ogImage?: string
  robots?: string
  /** ISO 8601 date (YYYY-MM-DD) for NewsArticle structured data */
  articleDatePublished?: string
}

type RouteMetaBase = {
  title: string
  description: string
  robots?: string
}

const defaults: RouteMetaBase = {
  title: 'MoonSofts | Software consulting company for startups & remote teams',
  description:
    'MoonSofts is a software consulting company helping startups and enterprises ship with remote senior squads, AI-assisted delivery, and cloud-native engineering. Book a free consultation to align on your next program.',
}

const exact: Record<string, RouteMetaBase> = {
  '/': {
    title: 'MoonSofts | Software consulting company — startups, remote teams & AI delivery',
    description:
      'MoonSofts is a global software consulting company for startups and enterprises: remote engineering squads, MVPs, marketing websites, cloud and AI delivery, and accountable programs. Book a free consultation; read the CEO vision on first-stage partnerships and long-form insights on Medium.',
  },
  '/about': {
    title: 'About MoonSofts | Global software consulting & remote delivery',
    description:
      'Our story, values, and commitments as MoonSofts—a software consulting company built for remote collaboration, startup speed, and enterprise-grade accountability.',
  },
  '/services': {
    title: 'Software consulting services | MoonSofts — discovery, squads & platforms',
    description:
      'MoonSofts services: software consulting, dedicated remote squads, platform integration, and delivery from align to operate—for startups scaling fast and enterprises modernizing safely.',
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
    title: 'News & insights | MoonSofts — AI, cloud & software consulting',
    description:
      'MoonSofts newsroom: company updates and insights on AI, cloud, remote delivery, and software consulting for startup and enterprise leaders.',
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
    title: 'Contact MoonSofts | Free consultation & partnership inquiries',
    description:
      'Contact MoonSofts for software consulting, remote squad engagements, or careers. Start with a free consultation to discuss timelines, scope, and fit.',
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
    return {
      title: base.title,
      description: snippet(base.description, 158),
      ogType: 'website',
      robots: base.robots,
    }
  }

  return {
    title: defaults.title,
    description: snippet(defaults.description, 158),
    ogType: 'website',
    robots: defaults.robots,
  }
}

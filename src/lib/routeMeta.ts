export const SITE_URL = 'https://moonsofts.net'

export type RouteMeta = {
  title: string
  description: string
  /** Absolute URL for og:image / twitter:image. Falls back to SITE_URL/og-default.png. */
  ogImage?: string
  /** og:type — defaults to "website". Use "article" for news posts. */
  ogType?: string
  /** robots content — defaults to "index, follow". Use "noindex" for hidden routes. */
  robots?: string
  /**
   * JSON-LD structured data for this page. When omitted, a default WebPage schema
   * is generated from the title/description/canonical. Pass `null` to suppress.
   */
  jsonLd?: object | null
}

const defaults: RouteMeta = {
  title: 'MoonSofts',
  description:
    'MoonSofts — software consulting for AI, cloud, and accountable engineering for global product teams.',
}

const exact: Record<string, RouteMeta> = {
  '/': {
    title: 'MoonSofts | Software consulting & engineering',
    description:
      'AI-assisted delivery, cloud-native architecture, and accountable engineering squads for enterprises worldwide.',
  },
  '/about': {
    title: 'About MoonSofts',
    description: 'Our story, values, commitments, and history as a global software consulting partner.',
  },
  '/services': {
    title: 'Services | MoonSofts',
    description: 'Consulting, engagement models, and delivery practices for modern product organizations.',
  },
  '/industries': {
    title: 'Industries | MoonSofts',
    description:
      'Sector-specific software practices for e-commerce, healthcare, manufacturing, education, logistics, and more.',
  },
  '/clients': {
    title: 'Client voices | MoonSofts',
    description: 'Testimonials, trust metrics, and outcomes from MoonSofts delivery programs.',
  },
  '/stack': {
    title: 'Technology & platform | MoonSofts',
    description: 'Delivery platform, technology stack, and tools for distributed engineering teams.',
  },
  '/news': {
    title: 'Newsroom | MoonSofts',
    description: 'Company updates and industry insights on AI, cloud, and engineering delivery.',
  },
  '/team': {
    title: 'Leadership team | MoonSofts',
    description: 'Meet the MoonSofts leadership team.',
  },
  '/engineers': {
    title: 'Careers | MoonSofts',
    description: 'Join MoonSofts — engineering careers for students, graduates, and experienced builders.',
  },
  '/contact': {
    title: 'Contact | MoonSofts',
    description: 'Get in touch with MoonSofts for partnerships, careers, or client engagements.',
  },
  '/privacy': {
    title: 'Legal & privacy | MoonSofts',
    description: 'Privacy, security, and terms for MoonSofts digital properties.',
    robots: 'noindex, follow',
  },
}

export function getRouteMeta(pathname: string): RouteMeta {
  if (exact[pathname]) return exact[pathname]

  if (pathname.startsWith('/news/') && pathname !== '/news') {
    return {
      title: 'Article | MoonSofts News',
      description: defaults.description,
      ogType: 'article',
    }
  }

  if (pathname.startsWith('/industries/')) {
    return {
      title: 'Industry | MoonSofts',
      description: 'Industry-specific software consulting and delivery from MoonSofts.',
    }
  }

  return defaults
}

/** Set all <head> SEO tags for a given page. Safe to call on every route change. */
export function setPageMeta(meta: RouteMeta, pathname: string): void {
  const title = meta.title
  const description = meta.description
  const canonical = `${SITE_URL}${pathname}`
  const ogImage = meta.ogImage ?? `${SITE_URL}/og-default.png`
  const ogType = meta.ogType ?? 'website'
  const robots = meta.robots ?? 'index, follow'

  document.title = title

  setMeta('name', 'description', description)
  setMeta('name', 'robots', robots)

  // Open Graph
  setMeta('property', 'og:type', ogType)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', canonical)
  setMeta('property', 'og:image', ogImage)
  setMeta('property', 'og:site_name', 'MoonSofts')

  // Twitter Card
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', ogImage)

  // Canonical
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = canonical

  // JSON-LD: use caller-supplied schema or fall back to a default WebPage node
  if (meta.jsonLd !== null) {
    const schema = meta.jsonLd ?? buildDefaultWebPageSchema(title, description, canonical)
    setJsonLd(schema)
  }
}

/** Build a minimal WebPage JSON-LD node for routes that don't supply their own. */
function buildDefaultWebPageSchema(name: string, description: string, url: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

/** Inject or replace the per-page JSON-LD <script> tag. */
function setJsonLd(data: object): void {
  let el = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"][data-page]')
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-page', 'true')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function setMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

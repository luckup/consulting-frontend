import { homeFaqItems } from '@/lib/homeFaq'
import { FOOTBALL_INITIATIVE_PATH, FOOTBALL_WORLD_CUP_2026_KEYWORDS } from '@/lib/seoFootballKeywords'

/** FAQPage structured data for the homepage (pairs with visible FAQ section). */
export function homeFaqPageJsonLd(pageUrl: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: homeFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/** Free World Cup website program as a Service with a zero-price Offer. */
export function homeFreeWorldCupServiceJsonLd(origin: string, orgId: string) {
  const serviceId = `${origin}/#free-world-cup-website`
  return {
    '@type': 'Service',
    '@id': serviceId,
    name: 'Free 2026 World Cup Website for Football Players',
    description:
      'Selected football players, creators, clubs, and fan communities receive a free custom website to publish highlights and 2026 World Cup updates.',
    provider: { '@id': orgId },
    url: `${origin}${FOOTBALL_INITIATIVE_PATH}`,
    serviceType: 'Website development',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/LimitedAvailability',
      url: `${origin}/contact`,
      description: 'Free website for qualified football player and fan community applicants',
    },
  }
}

export function homeFreeWorldCupServiceId(origin: string) {
  return `${origin}/#free-world-cup-website`
}

/** Helps crawlers discover high-intent landing URLs from the homepage. */
export function homeSiteLinksJsonLd(origin: string) {
  return {
    '@type': 'ItemList',
    '@id': `${origin}/#site-links`,
    name: 'MoonSofts key pages',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Free 2026 World Cup website for football players',
        url: `${origin}${FOOTBALL_INITIATIVE_PATH}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Apply for a free football player website',
        url: `${origin}/contact`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Website development and consulting services',
        url: `${origin}/services`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'MoonSofts news and insights',
        url: `${origin}/news`,
      },
    ],
  }
}

export const HOME_PAGE_KEYWORDS = FOOTBALL_WORLD_CUP_2026_KEYWORDS.join(', ')

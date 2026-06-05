import { CONTACT_INBOX } from '@/lib/contactEmail'
import { CONTACT_PAGE_KEYWORDS } from '@/lib/seoFootballKeywords'

export function contactPageJsonLd(origin: string, pageUrl: string, orgId: string) {
  return {
    '@type': 'ContactPage',
    '@id': `${pageUrl}#contactpage`,
    url: pageUrl,
    name: 'Contact MoonSofts',
    description:
      'Apply for a free 2026 World Cup football player website or discuss software consulting with MoonSofts.',
    keywords: CONTACT_PAGE_KEYWORDS.join(', '),
    inLanguage: 'en-US',
    isPartOf: { '@id': `${origin}/#website` },
    about: { '@id': `${origin}/#organization` },
    mainEntity: {
      '@type': 'Organization',
      '@id': orgId,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: CONTACT_INBOX,
        url: pageUrl,
        availableLanguage: ['English'],
      },
    },
  }
}

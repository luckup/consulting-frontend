import type { PageSeo } from '@/lib/routeMeta'
import { absoluteUrl } from '@/lib/siteOrigin'

function pageTitleWithoutBrandSuffix(title: string): string {
  return title.replace(/\s*\|\s*MoonSofts.*$/i, '').trim()
}

function segmentLabel(segment: string): string {
  return segment
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/**
 * BreadcrumbList JSON-LD for internal pages (omit home — single-item lists are low value).
 */
export function breadcrumbListJsonLd(origin: string, pathname: string, seo: PageSeo): Record<string, unknown> | null {
  if (pathname === '/' || !pathname.startsWith('/')) return null

  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return null

  const itemListElement: Record<string, unknown>[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${origin}/`,
    },
  ]

  let position = 2
  let acc = ''
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    acc += `/${seg}`
    const isLast = i === segments.length - 1
    const url = absoluteUrl(origin, acc)
    let name: string
    if (isLast) {
      name = pageTitleWithoutBrandSuffix(seo.title)
      if (name.length > 90) name = `${name.slice(0, 87)}…`
    } else if (seg === 'news') {
      name = 'News'
    } else if (seg === 'industries') {
      name = 'Industries'
    } else if (seg === 'services') {
      name = 'Services'
    } else if (seg === 'stack') {
      name = 'Technology'
    } else {
      name = segmentLabel(seg)
    }
    itemListElement.push({
      '@type': 'ListItem',
      position,
      name,
      item: url,
    })
    position += 1
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(origin, pathname)}#breadcrumb`,
    itemListElement,
  }
}

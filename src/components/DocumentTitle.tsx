import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { siteImages } from '@/lib/siteImages'
import { resolvePageSeo, type PageSeo } from '@/lib/routeMeta'
import { breadcrumbListJsonLd } from '@/lib/seoBreadcrumbs'
import { MOONSOFTS_SAME_AS } from '@/lib/seoSocial'
import { absoluteUrl, getSiteOrigin } from '@/lib/siteOrigin'

const JSON_LD_ID = 'moonsofts-seo-jsonld'

function upsertMetaName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertMetaProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function removeMetaProperty(property: string) {
  document.querySelector(`meta[property="${property}"]`)?.remove()
}

function removeMetaName(name: string) {
  document.querySelector(`meta[name="${name}"]`)?.remove()
}

function removeLink(rel: string) {
  document.querySelector(`link[rel="${rel}"]`)?.remove()
}

function upsertHreflang(hreflang: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = 'alternate'
    el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

function removeHreflang(hreflang: string) {
  document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`)?.remove()
}

function setJsonLd(data: unknown) {
  let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = JSON_LD_ID
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

function buildJsonLd(origin: string, pathname: string, seo: PageSeo, canonicalUrl: string) {
  const orgId = `${origin}/#organization`
  const websiteId = `${origin}/#website`
  const pageId = `${canonicalUrl}#webpage`
  const logoUrl = `${origin}/brand/logo.png`
  const logoObject = {
    '@type': 'ImageObject',
    url: logoUrl,
    contentUrl: logoUrl,
  }

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: 'MoonSofts',
      url: origin,
      logo: logoObject,
      description:
        'MoonSofts is a software consulting company delivering remote engineering squads, cloud and AI programs for startups and enterprises worldwide.',
      sameAs: [...MOONSOFTS_SAME_AS],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: origin,
      name: 'MoonSofts',
      inLanguage: 'en-US',
      publisher: { '@id': orgId },
    },
    {
      '@type': 'WebPage',
      '@id': pageId,
      url: canonicalUrl,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': websiteId },
      inLanguage: 'en-US',
    },
  ]

  if (seo.ogType === 'article') {
    const headline = seo.title.replace(/\s*\|\s*MoonSofts\s*$/i, '').trim()
    const article: Record<string, unknown> = {
      '@type': 'NewsArticle',
      headline,
      description: seo.description,
      url: canonicalUrl,
      author: { '@type': 'Organization', name: 'MoonSofts' },
      publisher: {
        '@type': 'Organization',
        name: 'MoonSofts',
        logo: logoObject,
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageId },
    }
    if (seo.articleDatePublished) {
      article.datePublished = seo.articleDatePublished
      article.dateModified = seo.articleDatePublished
    }
    if (seo.ogImage) {
      article.image = [seo.ogImage]
    }
    graph.push(article)
  }

  const crumbs = breadcrumbListJsonLd(origin, pathname, seo)
  if (crumbs) graph.push(crumbs)

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function DocumentTitle() {
  const { pathname } = useLocation()
  const seo = useMemo(() => resolvePageSeo(pathname), [pathname])

  useEffect(() => {
    const origin = getSiteOrigin()
    const canonicalUrl = origin ? absoluteUrl(origin, pathname) : ''
    const defaultOg = siteImages.brand.logo?.startsWith('http') ? siteImages.brand.logo : undefined
    const ogImage = seo.ogImage ?? defaultOg

    document.title = seo.title

    removeMetaName('keywords')
    removeMetaName('twitter:site')

    upsertMetaName('description', seo.description)
    upsertMetaName('author', 'MoonSofts')
    upsertMetaName('robots', seo.robots ?? 'index, follow')

    upsertMetaProperty('og:site_name', 'MoonSofts')
    upsertMetaProperty('og:title', seo.title)
    upsertMetaProperty('og:description', seo.description)
    upsertMetaProperty('og:type', seo.ogType)
    upsertMetaProperty('og:locale', 'en_US')

    if (canonicalUrl) {
      upsertMetaProperty('og:url', canonicalUrl)
    } else {
      removeMetaProperty('og:url')
    }

    if (ogImage) {
      upsertMetaProperty('og:image', ogImage)
      upsertMetaProperty('og:image:alt', `${seo.title} — MoonSofts`)
    } else {
      removeMetaProperty('og:image')
      removeMetaProperty('og:image:alt')
    }

    upsertMetaName('twitter:card', ogImage ? 'summary_large_image' : 'summary')
    upsertMetaName('twitter:title', seo.title)
    upsertMetaName('twitter:description', seo.description)
    if (ogImage) {
      upsertMetaName('twitter:image', ogImage)
    } else {
      removeMetaName('twitter:image')
    }

    if (canonicalUrl) {
      upsertLink('canonical', canonicalUrl)
      upsertHreflang('en', canonicalUrl)
      upsertHreflang('x-default', canonicalUrl)
    } else {
      removeLink('canonical')
      removeHreflang('en')
      removeHreflang('x-default')
    }

    if (origin) {
      setJsonLd(buildJsonLd(origin, pathname, seo, canonicalUrl || absoluteUrl(origin, pathname)))
    }
  }, [pathname, seo])

  return null
}

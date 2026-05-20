import { siteFeatures } from '@/lib/siteFeatures'

type RouteLoader = () => Promise<unknown>

const exactRoutes: Record<string, RouteLoader> = {
  '/about': () => import('@/pages/AboutPage'),
  '/services': () => import('@/pages/ServicesPage'),
  '/industries': () => import('@/pages/IndustriesPage'),
  '/engineers': () => import('@/pages/EngineersPage'),
  '/news': () => import('@/pages/NewsPage'),
  '/privacy': () => import('@/pages/PrivacyPage'),
  '/stack': () => import('@/pages/StackPage'),
  '/contact': () => import('@/pages/ContactPage'),
  ...(siteFeatures.clientVoices ? { '/clients': () => import('@/pages/ClientsPage') } : {}),
  ...(siteFeatures.leadershipPage ? { '/team': () => import('@/pages/TeamPage') } : {}),
}

const dynamicRoutes: { test: (path: string) => boolean; load: RouteLoader }[] = [
  {
    test: (path) => path.startsWith('/industries/') && path.length > '/industries/'.length,
    load: () => import('@/pages/IndustryDetailPage'),
  },
  {
    test: (path) => path.startsWith('/news/') && path.length > '/news/'.length,
    load: () => import('@/pages/NewsArticlePage'),
  },
]

const warmed = new Set<string>()

export function prefetchRoute(path: string) {
  const normalized = path.split('?')[0].split('#')[0]
  if (!exactRoutes[normalized] && !dynamicRoutes.some((route) => route.test(normalized))) return
  if (warmed.has(normalized)) return

  const exact = exactRoutes[normalized]
  if (exact) {
    warmed.add(normalized)
    void exact()
    return
  }

  const dynamic = dynamicRoutes.find((route) => route.test(normalized))
  if (dynamic) {
    warmed.add(normalized)
    void dynamic.load()
  }
}

/** Warm common route chunks after the app is idle (first visit UX). */
export function routePrefetchHandlers(path: string) {
  return {
    onMouseEnter: () => prefetchRoute(path),
    onFocus: () => prefetchRoute(path),
  }
}

export function prefetchCommonRoutes() {
  const common = ['/services', '/industries', '/about', '/contact', ...(siteFeatures.clientVoices ? ['/clients'] : [])]
  const run = () => common.forEach(prefetchRoute)

  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(run, { timeout: 2500 })
  } else {
    window.setTimeout(run, 1200)
  }
}

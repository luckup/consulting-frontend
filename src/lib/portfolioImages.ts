import { siteImages } from '@/lib/siteImages'

/** Portfolio shots from siteImages (CDN in production, bundled when VITE_USE_LOCAL_ASSETS=true). */
const portfolioImagesByKey: Record<string, string> = {
  sycu: siteImages.portfolio.sycu.home,
  'sycu-strategy': siteImages.portfolio.sycu.strategy,
  'sycu-marketplace': siteImages.portfolio.sycu.marketplace,
  'sycu-videos': siteImages.portfolio.sycu.videos,
  thesnuslife: siteImages.portfolio.thesnuslife.home,
  'thesnuslife-1': siteImages.portfolio.thesnuslife.catalog,
  'thesnuslife-2': siteImages.portfolio.thesnuslife.product,
  gvrapp: siteImages.portfolio.gvrapp.home,
  'gvrapp-1': siteImages.portfolio.gvrapp.campaigns,
  'gvrapp-2': siteImages.portfolio.gvrapp.caseStudy,
  azeltd: siteImages.portfolio.azeltd.home,
  'azeltd-1': siteImages.portfolio.azeltd.solutions,
  'azeltd-2': siteImages.portfolio.azeltd.projects,
}

export const portfolioImagePlaceholder =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect fill="#f0ebe3" width="640" height="360"/><rect fill="#e2d9cc" x="220" y="110" width="200" height="140" rx="8"/><circle fill="#d4c8b8" cx="270" cy="155" r="18"/><path fill="#d4c8b8" d="M220 250l55-70 45 35 40-50 80 85H220z"/></svg>',
  )

export function getBundledPortfolioImage(key: string): string | undefined {
  return portfolioImagesByKey[key]
}

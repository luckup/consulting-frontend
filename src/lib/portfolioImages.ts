import sycuHome from '@/assets/pages/portfolio/sycu/moonsofts-sycu-home.jpg'
import sycuMarketplace from '@/assets/pages/portfolio/sycu/moonsofts-sycu-marketplace.jpg'
import sycuStrategy from '@/assets/pages/portfolio/sycu/moonsofts-sycu-strategy.jpg'
import sycuVideos from '@/assets/pages/portfolio/sycu/moonsofts-sycu-videos.jpg'
import thesnuslifeHome from '@/assets/pages/portfolio/thesnuslife/0.jpg'
import thesnuslifeCatalog from '@/assets/pages/portfolio/thesnuslife/1.jpg'
import thesnuslifeProduct from '@/assets/pages/portfolio/thesnuslife/2.jpg'
import gvrappHome from '@/assets/pages/portfolio/gvrapp/0.jpg'
import gvrappCampaigns from '@/assets/pages/portfolio/gvrapp/1.jpg'
import gvrappCaseStudy from '@/assets/pages/portfolio/gvrapp/2.jpg'
import azeltdHome from '@/assets/pages/portfolio/azeltd/0.jpg'
import azeltdSolutions from '@/assets/pages/portfolio/azeltd/1.jpg'
import azeltdProjects from '@/assets/pages/portfolio/azeltd/2.jpg'

/** Bundled portfolio shots — work in dev without CDN upload. */
const bundledPortfolioImages: Record<string, string> = {
  sycu: sycuHome,
  'sycu-strategy': sycuStrategy,
  'sycu-marketplace': sycuMarketplace,
  'sycu-videos': sycuVideos,
  thesnuslife: thesnuslifeHome,
  'thesnuslife-1': thesnuslifeCatalog,
  'thesnuslife-2': thesnuslifeProduct,
  gvrapp: gvrappHome,
  'gvrapp-1': gvrappCampaigns,
  'gvrapp-2': gvrappCaseStudy,
  azeltd: azeltdHome,
  'azeltd-1': azeltdSolutions,
  'azeltd-2': azeltdProjects,
}

export const portfolioImagePlaceholder =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect fill="#f0ebe3" width="640" height="360"/><rect fill="#e2d9cc" x="220" y="110" width="200" height="140" rx="8"/><circle fill="#d4c8b8" cx="270" cy="155" r="18"/><path fill="#d4c8b8" d="M220 250l55-70 45 35 40-50 80 85H220z"/></svg>',
  )

export function getBundledPortfolioImage(key: string): string | undefined {
  return bundledPortfolioImages[key]
}

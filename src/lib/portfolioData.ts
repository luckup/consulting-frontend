export const portfolioProjectIds = ['gvrapp', 'sycu', 'thesnuslife', 'azeltd'] as const

export type PortfolioProjectId = (typeof portfolioProjectIds)[number]

export type PortfolioGalleryImageKey =
  | PortfolioProjectId
  | 'sycu-strategy'
  | 'sycu-marketplace'
  | 'sycu-videos'
  | 'thesnuslife-1'
  | 'thesnuslife-2'
  | 'gvrapp-1'
  | 'gvrapp-2'
  | 'azeltd-1'
  | 'azeltd-2'

export type PortfolioProject = {
  id: PortfolioProjectId
  imageKey: PortfolioProjectId
  galleryKeys: readonly PortfolioGalleryImageKey[]
}

export const portfolioProjectGalleries: Record<PortfolioProjectId, readonly PortfolioGalleryImageKey[]> = {
  gvrapp: ['gvrapp', 'gvrapp-1', 'gvrapp-2'],
  sycu: ['sycu', 'sycu-strategy', 'sycu-marketplace', 'sycu-videos'],
  thesnuslife: ['thesnuslife', 'thesnuslife-1', 'thesnuslife-2'],
  azeltd: ['azeltd', 'azeltd-1', 'azeltd-2'],
}

export const portfolioProjects: readonly PortfolioProject[] = portfolioProjectIds.map((id) => ({
  id,
  imageKey: id,
  galleryKeys: portfolioProjectGalleries[id],
}))

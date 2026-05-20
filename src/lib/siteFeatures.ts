/** Toggle site areas without deleting page/section code. */
export const siteFeatures = {
  leadershipPage: false,
  clientVoices: false,
  homeCertifications: false,
} as const

export function isPublicRoute(path: string) {
  const base = path.split('#')[0].split('?')[0]
  if (!siteFeatures.leadershipPage && base === '/team') return false
  if (!siteFeatures.clientVoices && base === '/clients') return false
  return true
}

export function filterNavLinks<T extends { to: string }>(links: readonly T[]): T[] {
  return links.filter((link) => isPublicRoute(link.to))
}

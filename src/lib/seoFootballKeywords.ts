/** Target phrases for the 2026 World Cup free football website initiative (visible copy + JSON-LD). */
export const FOOTBALL_WORLD_CUP_2026_KEYWORDS = [
  'free',
  'free website',
  'free football website',
  'custom website',
  'website',
  'web development',
  '2026',
  '2026 World Cup',
  'World Cup',
  'World Cup 2026',
  'FIFA World Cup 2026',
  'football player',
  'football star',
  'footballstar',
  'soccer player',
  'football highlights',
  'highlight',
  'highlight reel',
  'match clips',
  'football player website',
  'football highlights website',
  'fan community',
  'football creator',
  'free web development',
  'software consulting',
  'software consulting company',
  'MoonSofts',
] as const

export const FOOTBALL_INITIATIVE_SLUG = 'free-football-websites-world-cup-2026'

export const FOOTBALL_INITIATIVE_PATH = `/news/${FOOTBALL_INITIATIVE_SLUG}` as const

export const CONTACT_PAGE_KEYWORDS = [
  'contact MoonSofts',
  'apply free football website',
  '2026 World Cup website application',
  'football player website inquiry',
  'software consulting contact',
  'free website application',
  ...FOOTBALL_WORLD_CUP_2026_KEYWORDS,
] as const

export const SERVICES_PAGE_KEYWORDS = [
  'software consulting services',
  'custom website development',
  'football player website',
  'MVP development',
  'remote engineering squad',
  'MoonSofts services',
  ...FOOTBALL_WORLD_CUP_2026_KEYWORDS.slice(0, 12),
] as const

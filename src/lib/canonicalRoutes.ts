import { industryPath } from '@/lib/industriesData'

const PATH_PREFIX_ALIASES: readonly [string, string][] = [
  ['/産業', '/industries'],
  ['/industrias', '/industries'],
  ['/indústrias', '/industries'],
  ['/servicios', '/services'],
  ['/serviços', '/services'],
  ['/portafolio', '/portfolio'],
  ['/portfólio', '/portfolio'],
  ['/ポートフォリオ', '/portfolio'],
  ['/作品集', '/portfolio'],
  ['/サービス', '/services'],
  ['/pila', '/stack'],
  ['/pilha', '/stack'],
  ['/スタック', '/stack'],
  ['/privacidad', '/privacy'],
  ['/privacidade', '/privacy'],
  ['/プライバシー', '/privacy'],
  ['/contacto', '/contact'],
  ['/contato', '/contact'],
  ['/接触', '/contact'],
  ['/連絡先', '/contact'],
  ['/noticias', '/news'],
  ['/notícias', '/news'],
  ['/ニュース', '/news'],
  ['/ingenieros', '/engineers'],
  ['/engenheiros', '/engineers'],
  ['/エンジニア', '/engineers'],
  ['/equipo', '/team'],
  ['/equipe', '/team'],
  ['/チーム', '/team'],
  ['/sobre', '/about'],
  ['/acerca de', '/about'],
  ['/clientes', '/clients'],
  ['/クライアント', '/clients'],
]

const NEWS_SLUG_ALIASES: Record<string, string> = {
  'sitios-web-de-futbol-gratis-copa-mundial-2026': 'free-football-websites-world-cup-2026',
  'lanzamiento-global-ai-cloud': 'global-launch-ai-cloud',
  'desarrollo impulsado por ia': 'ai-powered-development',
  'soluciones específicas de la industria': 'industry-specific-solutions',
  'sites-de-futebol-gratuitos-copa-do-mundo-2026': 'free-football-websites-world-cup-2026',
  'lançamento global-ai-cloud': 'global-launch-ai-cloud',
  'desenvolvimento alimentado por ia': 'ai-powered-development',
  'soluções específicas do setor': 'industry-specific-solutions',
  '無料-フットボール-ウェブサイト-ワールドカップ-2026': 'free-football-websites-world-cup-2026',
  'グローバル起動-aiクラウド': 'global-launch-ai-cloud',
  'ai を活用した開発': 'ai-powered-development',
  '業界固有のソリューション': 'industry-specific-solutions',
}

const INDUSTRY_SLUG_ALIASES: Record<string, string> = {
  'comercio electronico': 'ecommerce',
  'comercio electrónico': 'ecommerce',
  logistica: 'logistics',
  logística: 'logistics',
  salud: 'healthcare',
  saúde: 'healthcare',
  construccion: 'construction',
  construção: 'construction',
  financiero: 'financial',
  financeiras: 'financial',
  fabricacion: 'manufacturing',
  fabricação: 'manufacturing',
  manufatura: 'manufacturing',
  educacion: 'education',
  educação: 'education',
  agricultura: 'agriculture',
  restaurante: 'restaurant',
  'eコマース': 'ecommerce',
  物流: 'logistics',
  金融: 'financial',
  ヘルスケア: 'healthcare',
  建設: 'construction',
  製造業: 'manufacturing',
  教育: 'education',
  農業: 'agriculture',
  レストラン: 'restaurant',
  'comércio eletrônico': 'ecommerce',
}

const HASH_ALIASES: Record<string, string> = {
  'sobre-nosotros': 'about-us',
  'sobre-nós': 'about-us',
  私たちについて: 'about-us',
  compromisos: 'commitments',
  コミットメント: 'commitments',
  historia: 'history',
  歴史: 'history',
  testimonios: 'testimonials',
  お客様の声: 'testimonials',
  depoimentos: 'testimonials',
  métricas: 'metrics',
  resultados: 'outcomes',
  結果: 'outcomes',
  'industrias-atendidas': 'industries-served',
  'indústrias atendidas': 'industries-served',
  participar: 'engage',
  エンゲージ: 'engage',
  envolver: 'engage',
  'sitios web': 'websites',
  ウェブサイト: 'websites',
  sites: 'websites',
  modelos: 'models',
  モデル: 'models',
  entrega: 'delivery',
  配信: 'delivery',
  'porque-moonsofts': 'why-moonsofts',
  'por que-moonsofts': 'why-moonsofts',
  plataforma: 'platform',
  プラットフォーム: 'platform',
  pila: 'stack',
  pilha: 'stack',
  herramientas: 'tools',
  ferramentas: 'tools',
  negocios: 'businesses',
  empresas: 'businesses',
  estudiantes: 'students',
  学生: 'students',
  alunos: 'students',
  'ganar-aprender': 'earn-learn',
  'ganhar-aprender': 'earn-learn',
  '稼ぐ・学ぶ': 'earn-learn',
  aperturas: 'openings',
  aberturas: 'openings',
  オープニング: 'openings',
  términos: 'terms',
  termos: 'terms',
  用語: 'terms',
  ayuda: 'help',
  ajuda: 'help',
  ヘルプ: 'help',
  prensa: 'press',
  プレス: 'press',
}

const FILTER_VALUE_ALIASES: Record<string, string> = {
  empresa: 'company',
  会社: 'company',
  perspectivas: 'insights',
  洞察: 'insights',
}

function normalizeSlug(value: string): string {
  return decodeURIComponent(value).trim().toLowerCase()
}

function applyPathPrefix(pathname: string): string {
  for (const [from, to] of PATH_PREFIX_ALIASES) {
    if (pathname === from) return to
    if (pathname.startsWith(`${from}/`)) return `${to}${pathname.slice(from.length)}`
  }
  return pathname
}

function canonicalizeNewsSlug(pathname: string): string {
  const match = pathname.match(/^\/news\/([^/]+)$/)
  if (!match) return pathname

  const rawSlug = match[1]
  const decodedSlug = decodeURIComponent(rawSlug)
  const canonical =
    NEWS_SLUG_ALIASES[decodedSlug] ??
    NEWS_SLUG_ALIASES[normalizeSlug(rawSlug)] ??
    NEWS_SLUG_ALIASES[rawSlug]

  return canonical ? `/news/${canonical}` : pathname
}

function canonicalizeIndustrySlug(pathname: string): string {
  const match = pathname.match(/^\/industries\/([^/]+)$/)
  if (!match) return pathname

  const rawSlug = match[1]
  const decodedSlug = decodeURIComponent(rawSlug)
  const canonical =
    INDUSTRY_SLUG_ALIASES[decodedSlug] ??
    INDUSTRY_SLUG_ALIASES[normalizeSlug(rawSlug)] ??
    INDUSTRY_SLUG_ALIASES[rawSlug]

  return canonical ? industryPath(canonical) : pathname
}

function canonicalizeHash(hash: string): string {
  if (!hash || hash === '#') return hash

  const fragment = decodeURIComponent(hash.slice(1))
  const canonical = HASH_ALIASES[fragment] ?? HASH_ALIASES[fragment.toLowerCase()]
  return canonical ? `#${canonical}` : hash
}

function canonicalizeSearch(search: string): string {
  if (!search) return ''

  const params = new URLSearchParams(search)
  const filter = params.get('filter') ?? params.get('filtro') ?? params.get('フィルター')
  if (!filter) return search.startsWith('?') ? search : `?${search}`

  const canonicalFilter = FILTER_VALUE_ALIASES[filter] ?? FILTER_VALUE_ALIASES[decodeURIComponent(filter)]
  if (!canonicalFilter) return search.startsWith('?') ? search : `?${search}`

  params.delete('filtro')
  params.delete('フィルター')
  params.set('filter', canonicalFilter)
  const next = params.toString()
  return next ? `?${next}` : ''
}

/** Map legacy translated paths to canonical English routes used by React Router. */
export function canonicalizePath(path: string): string {
  if (!path || /^https?:\/\//i.test(path)) return path

  const hashIndex = path.indexOf('#')
  const queryIndex = path.indexOf('?')
  const endIndex = Math.min(
    hashIndex >= 0 ? hashIndex : path.length,
    queryIndex >= 0 ? queryIndex : path.length,
  )

  let pathname = path.slice(0, endIndex) || '/'
  const search = queryIndex >= 0 ? path.slice(queryIndex, hashIndex >= 0 ? hashIndex : undefined) : ''
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : ''

  pathname = applyPathPrefix(decodeURIComponent(pathname))
  pathname = canonicalizeNewsSlug(pathname)
  pathname = canonicalizeIndustrySlug(pathname)

  const canonicalSearch = canonicalizeSearch(search.replace(/^\?/, ''))
  const canonicalHash = canonicalizeHash(hash)

  return `${pathname}${canonicalSearch}${canonicalHash}`
}

export function isCanonicalPath(path: string): boolean {
  return canonicalizePath(path) === path
}

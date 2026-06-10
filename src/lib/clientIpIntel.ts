import {
  clientIpFromRequest,
  countryCodeFromRequest,
  normalizeCountryCode,
} from '@/i18n/localeCookie'

export type ClientIpIntel = {
  ip: string | null
  location: string | null
  countryCode: string | null
  usingVpnOrProxy: boolean
  detectionDetail: string | null
}

const IP_INTEL_TIMEOUT_MS = 4000

type IpLogsResponse = {
  is_vpn?: boolean
  is_proxy?: boolean
  verdict?: string
  ip_info?: {
    ip?: string
    country?: string
    country_code?: string
    city?: string
    region?: string
    is_vpn?: boolean
    is_proxy?: boolean
  }
}

function formatLocation(parts: {
  city?: string | null
  region?: string | null
  country?: string | null
  countryCode?: string | null
}): string | null {
  const segments: string[] = []
  if (parts.city?.trim()) segments.push(parts.city.trim())
  if (parts.region?.trim()) segments.push(parts.region.trim())
  const country = parts.country?.trim() || parts.countryCode?.trim()
  if (country) segments.push(country)
  return segments.length ? segments.join(', ') : null
}

function locationFromEdgeHeaders(request: Request): string | null {
  const city = request.headers.get('x-vercel-ip-city')
  const region = request.headers.get('x-vercel-ip-country-region')
  const country = request.headers.get('x-vercel-ip-country')
  return formatLocation({ city, region, country })
}

function isPrivateOrLocalIp(ip: string): boolean {
  if (ip === '127.0.0.1' || ip === '::1' || ip === 'localhost') return true
  if (ip.startsWith('10.') || ip.startsWith('192.168.') || ip.startsWith('169.254.')) return true

  if (ip.startsWith('172.')) {
    const second = Number(ip.split('.')[1])
    if (second >= 16 && second <= 31) return true
  }

  if (ip.startsWith('::ffff:')) {
    return isPrivateOrLocalIp(ip.slice(7))
  }

  return false
}

function isVpnOrProxy(data: IpLogsResponse): boolean {
  if (data.is_vpn || data.is_proxy) return true
  if (data.ip_info?.is_vpn || data.ip_info?.is_proxy) return true

  const verdict = data.verdict ?? ''
  return verdict === 'vpn_detected' || verdict === 'vpn_likely'
}

function detectionDetailFromIpLogs(data: IpLogsResponse): string | null {
  const parts: string[] = []
  if (data.is_vpn || data.ip_info?.is_vpn) parts.push('VPN')
  if (data.is_proxy || data.ip_info?.is_proxy) parts.push('proxy')
  if (!parts.length && data.verdict) {
    return data.verdict.replace(/_/g, ' ')
  }
  return parts.length ? parts.join(' / ') : null
}

function clientIpIntelFromIpLogs(data: IpLogsResponse, ipOverride?: string | null): ClientIpIntel {
  const ip = ipOverride ?? data.ip_info?.ip ?? null
  const location = data.ip_info
    ? formatLocation({
        city: data.ip_info.city,
        region: data.ip_info.region,
        country: data.ip_info.country,
        countryCode: data.ip_info.country_code,
      })
    : null
  const usingVpnOrProxy = isVpnOrProxy(data)

  return {
    ip,
    location,
    countryCode: normalizeCountryCode(data.ip_info?.country_code),
    usingVpnOrProxy,
    detectionDetail: usingVpnOrProxy ? detectionDetailFromIpLogs(data) : null,
  }
}

async function lookupViaIpLogs(ip?: string | null): Promise<ClientIpIntel | null> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), IP_INTEL_TIMEOUT_MS)

    try {
      const response = await fetch('https://iplogs.com/v1/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'moonsofts-contact/1.0',
        },
        body: JSON.stringify(ip ? { ip } : {}),
        signal: controller.signal,
      })
      if (!response.ok) return null

      const data = (await response.json()) as IpLogsResponse
      return clientIpIntelFromIpLogs(data, ip ?? data.ip_info?.ip ?? null)
    } finally {
      clearTimeout(timeout)
    }
  } catch {
    return null
  }
}

async function lookupLocationViaIpWhois(ip?: string | null): Promise<ClientIpIntel | null> {
  if (ip && isPrivateOrLocalIp(ip)) return null

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), IP_INTEL_TIMEOUT_MS)

    try {
      const url = ip ? `https://ipwho.is/${encodeURIComponent(ip)}` : 'https://ipwho.is/'
      const response = await fetch(url, {
        headers: { 'User-Agent': 'moonsofts-contact/1.0' },
        signal: controller.signal,
      })
      if (!response.ok) return null

      const data = (await response.json()) as {
        success?: boolean
        ip?: string
        city?: string
        region?: string
        country?: string
        country_code?: string
      }
      if (data.success === false) return null

      return {
        ip: ip ?? data.ip ?? null,
        location: formatLocation({
          city: data.city,
          region: data.region,
          country: data.country,
          countryCode: data.country_code,
        }),
        countryCode: normalizeCountryCode(data.country_code),
        usingVpnOrProxy: false,
        detectionDetail: null,
      }
    } finally {
      clearTimeout(timeout)
    }
  } catch {
    return null
  }
}

function requestIpFromHeaders(request: Request): string | null {
  const direct = clientIpFromRequest(request)
  if (direct) return direct

  const candidates = [
    request.headers.get('cf-connecting-ip'),
    request.headers.get('true-client-ip'),
    request.headers.get('x-vercel-forwarded-for'),
  ]

  for (const value of candidates) {
    const ip = value?.split(',')[0]?.trim()
    if (ip) return ip
  }

  return null
}

export function parseClientIpIntelInput(value: unknown): ClientIpIntel | null {
  if (!value || typeof value !== 'object') return null

  const data = value as Record<string, unknown>
  const ip = typeof data.ip === 'string' ? data.ip.trim() : null
  const location = typeof data.location === 'string' ? data.location.trim() : null
  const countryCode = normalizeCountryCode(
    typeof data.countryCode === 'string' ? data.countryCode : null,
  )
  const usingVpnOrProxy = data.usingVpnOrProxy === true
  const detectionDetail =
    typeof data.detectionDetail === 'string' && data.detectionDetail.trim()
      ? data.detectionDetail.trim()
      : null

  if (!ip && !location && !countryCode && !usingVpnOrProxy && !detectionDetail) {
    return null
  }

  return {
    ip: ip || null,
    location: location || null,
    countryCode,
    usingVpnOrProxy,
    detectionDetail,
  }
}

export function mergeClientIpIntel(
  server: ClientIpIntel,
  browser?: ClientIpIntel | null,
): ClientIpIntel {
  if (!browser) return server

  const serverIpUsable = server.ip && !isPrivateOrLocalIp(server.ip)
  const browserIpUsable = browser.ip && !isPrivateOrLocalIp(browser.ip)

  const ip = serverIpUsable ? server.ip : browserIpUsable ? browser.ip : server.ip ?? browser.ip
  const location = server.location ?? browser.location
  const countryCode = server.countryCode ?? browser.countryCode
  const usingVpnOrProxy = server.usingVpnOrProxy || browser.usingVpnOrProxy
  const detectionDetail = server.detectionDetail ?? browser.detectionDetail

  return { ip, location, countryCode, usingVpnOrProxy, detectionDetail }
}

/** Browser-side lookup used when the dev server cannot see the visitor's public IP. */
export async function fetchBrowserIpIntel(): Promise<ClientIpIntel | null> {
  if (typeof window === 'undefined') return null

  const fromIpLogs = await lookupViaIpLogs()
  if (fromIpLogs?.ip || fromIpLogs?.location || fromIpLogs?.usingVpnOrProxy) {
    return fromIpLogs
  }

  return lookupLocationViaIpWhois()
}

export async function lookupClientIpIntel(request: Request): Promise<ClientIpIntel> {
  const ip = requestIpFromHeaders(request)
  const countryCode = normalizeCountryCode(countryCodeFromRequest(request))
  const edgeLocation = locationFromEdgeHeaders(request)

  if (!ip || isPrivateOrLocalIp(ip)) {
    const selfLookup = await lookupViaIpLogs()
    const fallbackLocation = selfLookup?.location ?? edgeLocation

    return mergeClientIpIntel(
      {
        ip: selfLookup?.ip ?? ip,
        location: fallbackLocation,
        countryCode: selfLookup?.countryCode ?? countryCode,
        usingVpnOrProxy: selfLookup?.usingVpnOrProxy ?? false,
        detectionDetail: selfLookup?.detectionDetail ?? null,
      },
      null,
    )
  }

  const fromIpLogs = await lookupViaIpLogs(ip)
  let intel =
    fromIpLogs ??
    (await lookupLocationViaIpWhois(ip)) ?? {
      ip,
      location: null,
      countryCode,
      usingVpnOrProxy: false,
      detectionDetail: null,
    }

  if (!intel.location) intel = { ...intel, location: edgeLocation }
  if (!intel.countryCode && countryCode) intel = { ...intel, countryCode }

  return intel
}

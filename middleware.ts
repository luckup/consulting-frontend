import { localeCookieValue, localeFromCountry, readLocaleCookie } from './src/i18n/localeCookie'
import type { Locale } from './src/i18n/types'

export const config = {
  matcher: ['/((?!api/|assets/|brand/|favicon\\.png|favicon\\.svg|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)'],
}

export default function middleware(request: Request) {
  const cookieHeader = request.headers.get('cookie')
  const existing = readLocaleCookie(cookieHeader)
  if (existing) {
    return passthrough()
  }

  const country = request.headers.get('x-vercel-ip-country')
  const locale: Locale = localeFromCountry(country)

  const response = passthrough()
  response.headers.append('Set-Cookie', localeCookieValue(locale))
  return response
}

function passthrough() {
  return new Response(null, {
    status: 200,
    headers: {
      'x-middleware-next': '1',
    },
  })
}

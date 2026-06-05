import { localeCookieValue, localeFromCountry, readLocaleCookie } from '../src/i18n/localeCookie.js'
import type { Locale } from '../src/i18n/types.js'

export const config = {
  runtime: 'edge',
}

export default function handler(request: Request) {
  const cookieHeader = request.headers.get('cookie')
  const existing = readLocaleCookie(cookieHeader)
  if (existing) {
    return Response.json({ locale: existing })
  }

  const country = request.headers.get('x-vercel-ip-country')
  const locale: Locale = localeFromCountry(country)

  return Response.json(
    { locale },
    {
      headers: {
        'Set-Cookie': localeCookieValue(locale),
        'Cache-Control': 'no-store',
      },
    },
  )
}

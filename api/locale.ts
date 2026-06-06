import {
  countryCodeFromRequestAsync,
  localeCookieValue,
  readLocaleCookie,
  resolveAutoLocaleAsync,
} from '../src/i18n/localeCookie'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  const cookieHeader = request.headers.get('cookie')
  const existing = readLocaleCookie(cookieHeader)
  if (existing) {
    return Response.json({ locale: existing, source: 'cookie' })
  }

  const countryCode = await countryCodeFromRequestAsync(request)
  const locale = await resolveAutoLocaleAsync({
    countryCode,
    acceptLanguage: request.headers.get('accept-language'),
  })

  return Response.json(
    { locale, source: countryCode ? 'geo' : 'language' },
    {
      headers: {
        'Set-Cookie': localeCookieValue(locale),
        'Cache-Control': 'no-store',
      },
    },
  )
}

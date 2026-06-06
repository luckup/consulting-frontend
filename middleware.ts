import {
  countryCodeFromRequestAsync,
  localeCookieValue,
  readLocaleCookie,
  resolveAutoLocaleAsync,
} from './src/i18n/localeCookie'

export const config = {
  matcher: ['/((?!api/|assets/|brand/|favicon\\.png|favicon\\.svg|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)'],
}

export default async function middleware(request: Request) {
  const cookieHeader = request.headers.get('cookie')
  const existing = readLocaleCookie(cookieHeader)
  if (existing) {
    return passthrough()
  }

  const countryCode = await countryCodeFromRequestAsync(request)
  const locale = await resolveAutoLocaleAsync({
    countryCode,
    acceptLanguage: request.headers.get('accept-language'),
  })

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

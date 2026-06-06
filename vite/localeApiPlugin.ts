import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import {
  countryCodeFromRequestAsync,
  localeCookieValue,
  readLocaleCookie,
  resolveAutoLocaleAsync,
} from '../src/i18n/localeCookie'

function requestFromNode(req: IncomingMessage): Request {
  const host = req.headers.host ?? 'localhost'
  const protocol = 'http'
  const url = `${protocol}://${host}${req.url ?? '/api/locale'}`

  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers.set(key, value)
    } else if (Array.isArray(value)) {
      headers.set(key, value.join(', '))
    }
  }

  return new Request(url, { method: req.method ?? 'GET', headers })
}

async function handleLocaleApi(req: IncomingMessage, res: ServerResponse) {
  const cookieHeader = req.headers.cookie ?? null
  const existing = readLocaleCookie(cookieHeader)
  if (existing) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 'no-store')
    if (req.method === 'HEAD') {
      res.end()
      return
    }
    res.end(JSON.stringify({ locale: existing, source: 'cookie' }))
    return
  }

  const request = requestFromNode(req)
  const countryCode = await countryCodeFromRequestAsync(request)

  const locale = await resolveAutoLocaleAsync({
    countryCode,
    acceptLanguage: req.headers['accept-language'] ?? null,
  })

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Set-Cookie', localeCookieValue(locale))

  if (req.method === 'HEAD') {
    res.end()
    return
  }

  res.end(JSON.stringify({ locale, source: countryCode ? 'geo' : 'language' }))
}

export function localeApiPlugin(): Plugin {
  return {
    name: 'locale-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url !== '/api/locale') return next()
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.statusCode = 405
          res.end()
          return
        }

        void handleLocaleApi(req, res).catch(() => {
          res.statusCode = 500
          res.end()
        })
      })
    },
  }
}

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin, ViteDevServer } from 'vite'

const contactHandlerPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../api/contact.ts',
)

function requestFromNode(req: IncomingMessage, body: string): Request {
  const host = req.headers.host ?? 'localhost'
  const protocol = 'http'
  const url = `${protocol}://${host}${req.url ?? '/api/contact'}`

  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers.set(key, value)
    } else if (Array.isArray(value)) {
      headers.set(key, value.join(', '))
    }
  }

  if (!headers.has('x-forwarded-for') && req.socket?.remoteAddress) {
    const remote = req.socket.remoteAddress.replace(/^::ffff:/, '')
    headers.set('x-forwarded-for', remote)
  }

  return new Request(url, {
    method: req.method ?? 'POST',
    headers,
    body,
  })
}

function readRequestBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

async function writeResponse(res: ServerResponse, response: Response) {
  res.statusCode = response.status
  response.headers.forEach((value, key) => {
    res.setHeader(key, value)
  })

  const body = await response.text()
  res.end(body)
}

async function handleContactApi(
  server: ViteDevServer,
  req: IncomingMessage,
  res: ServerResponse,
) {
  const body = await readRequestBody(req)
  const request = requestFromNode(req, body)
  const { default: contactHandler } = await server.ssrLoadModule(contactHandlerPath)
  const response = await contactHandler(request)
  await writeResponse(res, response)
}

export function contactApiPlugin(): Plugin {
  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url !== '/api/contact') return next()
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end()
          return
        }

        void handleContactApi(server, req, res).catch(() => {
          res.statusCode = 500
          res.end()
        })
      })
    },
  }
}

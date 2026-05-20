import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import type { ContactEnv } from './sendContact.js'
import { ContactError, handleContactRequest } from './sendContact.js'

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        resolve(raw ? JSON.parse(raw) : {})
      } catch {
        reject(new ContactError('Invalid JSON body', 400))
      }
    })
    req.on('error', reject)
  })
}

function sendJson(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

export function contactApiDevPlugin(env: ContactEnv): Plugin {
  return {
    name: 'moonsofts-contact-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/contact')) return next()
        if (req.method !== 'POST') {
          sendJson(res, 405, { error: 'Method not allowed' })
          return
        }

        try {
          const body = await readJsonBody(req)
          const result = await handleContactRequest(body, env, req.socket.remoteAddress)
          sendJson(res, 201, result)
        } catch (err) {
          if (err instanceof ContactError) {
            sendJson(res, err.status, { error: err.message })
            return
          }
          console.error('[dev/api/contact]', err)
          sendJson(res, 500, {
            error: 'Failed to send message. Please email yuji@moonsofts.net directly.',
          })
        }
      })
    },
  }
}

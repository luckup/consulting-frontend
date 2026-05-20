import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ContactError, handleContactRequest } from '../server/sendContact.js'

function clientIp(req: VercelRequest) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0]?.trim()
  }
  return req.socket?.remoteAddress
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const result = await handleContactRequest(req.body, process.env, clientIp(req))
    return res.status(201).json(result)
  } catch (err) {
    if (err instanceof ContactError) {
      return res.status(err.status).json({ error: err.message })
    }
    console.error('[api/contact]', err)
    return res.status(500).json({ error: 'Failed to send message. Please email yuji@moonsofts.net directly.' })
  }
}

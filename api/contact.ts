import {
  lookupClientIpIntel,
  mergeClientIpIntel,
  parseClientIpIntelInput,
} from '../src/lib/clientIpIntel'
import { ContactFormError, validateContactForm } from '../src/lib/contactFormValidation'
import { sendContactEmails } from '../src/lib/sendContactEmails'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const data = body && typeof body === 'object' ? (body as Record<string, unknown>) : {}
  const honeypot = typeof data.honeypot === 'string' ? data.honeypot : undefined
  const pageUrl = typeof data.pageUrl === 'string' ? data.pageUrl : undefined

  try {
    const payload = validateContactForm({
      name: data.name,
      email: data.email,
      role: data.role,
      message: data.message,
    })

    if (honeypot?.trim()) {
      throw new ContactFormError('Submission rejected', 400)
    }

    const browserIpIntel = parseClientIpIntelInput(data.clientIpIntel)
    const serverIpIntel = await lookupClientIpIntel(request)
    const clientIpIntel = mergeClientIpIntel(serverIpIntel, browserIpIntel)
    await sendContactEmails(payload, { pageUrl, clientIpIntel })

    return Response.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    if (error instanceof ContactFormError) {
      return Response.json({ error: error.message }, { status: error.status })
    }

    return Response.json(
      { error: 'Could not send your message. Please try again or email us directly.' },
      { status: 500 },
    )
  }
}

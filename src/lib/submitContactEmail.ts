import { fetchBrowserIpIntel } from '@/lib/clientIpIntel'
import { ContactFormError, validateContactForm } from '@/lib/contactFormValidation'

function parseContactApiError(data: unknown, status: number): string {
  if (data && typeof data === 'object') {
    const record = data as Record<string, unknown>
    if (typeof record.error === 'string' && record.error) return record.error
    if (typeof record.message === 'string' && record.message) return record.message
  }
  if (status === 401) return 'Email service authentication failed.'
  if (status === 429) return 'Too many submissions. Please wait a moment and try again.'
  return 'Could not send your message. Please try again or email us directly.'
}

export async function submitContactEmail(
  raw: unknown,
  options?: { honeypot?: string; pageUrl?: string },
): Promise<{ ok: true }> {
  validateContactForm(raw)

  const clientIpIntel = await fetchBrowserIpIntel()

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...(raw as Record<string, unknown>),
      honeypot: options?.honeypot,
      pageUrl: options?.pageUrl,
      clientIpIntel,
    }),
  })

  let data: unknown = null
  try {
    data = await response.json()
  } catch {
    /* non-JSON body */
  }

  if (!response.ok) {
    throw new ContactFormError(parseContactApiError(data, response.status), response.status)
  }

  return { ok: true }
}

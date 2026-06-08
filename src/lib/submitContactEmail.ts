import { CONTACT_INBOX } from '@/lib/contactEmail'
import {
  EMAIL_FROM,
  EMAIL_SERVICE_TOKEN,
  EMAIL_SERVICE_URL,
} from '@/lib/contactEmailServiceConfig'
import {
  buildStaffNotificationEmail,
  buildUserConfirmationEmail,
} from '@/lib/contactEmailTemplates'
import {
  ContactFormError,
  validateContactForm,
} from '@/lib/contactFormValidation'

type SendEmailPayload = {
  to: string
  subject: string
  from: string
  text: string
  html: string
}

function parseEmailServiceError(data: unknown, status: number): string {
  if (data && typeof data === 'object') {
    const record = data as Record<string, unknown>
    if (typeof record.error === 'string' && record.error) return record.error
    if (typeof record.message === 'string' && record.message) return record.message
  }
  if (status === 401) return 'Email service authentication failed.'
  if (status === 429) return 'Too many submissions. Please wait a moment and try again.'
  return 'Could not send your message. Please try again or email us directly.'
}

async function sendEmail(payload: SendEmailPayload): Promise<void> {
  const response = await fetch(EMAIL_SERVICE_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${EMAIL_SERVICE_TOKEN}`,
    },
    body: JSON.stringify(payload),
  })

  let data: unknown = null
  try {
    data = await response.json()
  } catch {
    /* non-JSON body */
  }

  if (!response.ok) {
    throw new ContactFormError(parseEmailServiceError(data, response.status), response.status)
  }
}

export async function submitContactEmail(
  raw: unknown,
  options?: { honeypot?: string; pageUrl?: string },
): Promise<{ ok: true }> {
  const payload = validateContactForm(raw)

  if (options?.honeypot?.trim()) {
    throw new ContactFormError('Submission rejected', 400)
  }

  const staffEmail = buildStaffNotificationEmail(payload, options?.pageUrl)
  const userEmail = buildUserConfirmationEmail(payload)

  await Promise.all([
    sendEmail({
      to: CONTACT_INBOX,
      subject: staffEmail.subject,
      from: EMAIL_FROM,
      text: staffEmail.text,
      html: staffEmail.html,
    }),
    sendEmail({
      to: payload.email,
      subject: userEmail.subject,
      from: EMAIL_FROM,
      text: userEmail.text,
      html: userEmail.html,
    }),
  ])

  return { ok: true }
}

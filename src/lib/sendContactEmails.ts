import { CONTACT_INBOX } from '@/lib/contactEmail'
import { EMAIL_FROM } from '@/lib/contactEmailServiceConfig'
import {
  buildStaffNotificationEmail,
  buildUserConfirmationEmail,
} from '@/lib/contactEmailTemplates'
import { type ClientIpIntel } from '@/lib/clientIpIntel'
import { ContactFormError, type ContactFormPayload } from '@/lib/contactFormValidation'

type SendEmailPayload = {
  to: string
  subject: string
  from: string
  text: string
  html: string
}

function emailServiceUrl(): string {
  return (
    process.env.EMAIL_SERVICE_URL?.trim() ||
    process.env.VITE_EMAIL_SERVICE_URL?.trim() ||
    'https://email-service-hazel-three.vercel.app/api/send/moonsofts-prod'
  )
}

function emailServiceToken(): string {
  return (
    process.env.EMAIL_SERVICE_TOKEN?.trim() ||
    process.env.VITE_EMAIL_SERVICE_TOKEN?.trim() ||
    'moonsofts-prod'
  )
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
  const response = await fetch(emailServiceUrl(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${emailServiceToken()}`,
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

export async function sendContactEmails(
  payload: ContactFormPayload,
  options?: { pageUrl?: string; clientIpIntel?: ClientIpIntel },
): Promise<{ ok: true }> {
  const staffEmail = buildStaffNotificationEmail(payload, options)
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

import { contactRoleLabels } from '@/lib/contactRoles'
import { getFormspreeFormId } from '@/lib/formspreeConfig'
import {
  ContactFormError,
  contactFormSubject,
  validateContactForm,
  type ContactFormPayload,
} from '@/lib/contactFormValidation'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f'

function formspreeFormId(): string {
  return getFormspreeFormId()
}

type FormspreeBody = Record<string, string>

function buildFormspreeBody(payload: ContactFormPayload, honeypot?: string): FormspreeBody {
  const role = contactRoleLabels[payload.role] ?? payload.role
  return {
    name: payload.name,
    email: payload.email,
    _replyto: payload.email,
    role,
    message: payload.message,
    _subject: contactFormSubject(payload),
    _gotcha: honeypot ?? '',
  }
}

function parseFormspreeError(data: unknown, status: number): string {
  if (data && typeof data === 'object') {
    const record = data as Record<string, unknown>
    if (typeof record.error === 'string' && record.error) return record.error
    if (Array.isArray(record.errors)) {
      const parts = record.errors
        .map((item) => {
          if (item && typeof item === 'object' && 'message' in item) {
            return String((item as { message: unknown }).message)
          }
          return null
        })
        .filter(Boolean)
      if (parts.length > 0) return parts.join(' ')
    }
  }
  if (status === 429) return 'Too many submissions. Please wait a moment and try again.'
  return 'Could not send your message. Please try again or email us directly.'
}

export async function submitContactToFormspree(
  raw: unknown,
  options?: { honeypot?: string; pageUrl?: string },
): Promise<{ ok: true }> {
  const payload = validateContactForm(raw)

  if (options?.honeypot?.trim()) {
    throw new ContactFormError('Submission rejected', 400)
  }

  const formId = formspreeFormId()
  const body = buildFormspreeBody(payload, options?.honeypot)
  if (options?.pageUrl) {
    body._page_url = options.pageUrl
  }

  const response = await fetch(`${FORMSPREE_ENDPOINT}/${formId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  let data: unknown = null
  try {
    data = await response.json()
  } catch {
    /* non-JSON body */
  }

  if (!response.ok) {
    throw new ContactFormError(parseFormspreeError(data, response.status), response.status)
  }

  return { ok: true }
}

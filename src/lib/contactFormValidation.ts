import { contactRoleLabels, contactRoles, type ContactRole } from '@/lib/contactRoles'

export type ContactFormPayload = {
  name: string
  email: string
  role: ContactRole
  message: string
}

const VALID_ROLES = new Set<string>(contactRoles)

export class ContactFormError extends Error {
  status: number

  constructor(message: string, status = 400) {
    super(message)
    this.name = 'ContactFormError'
    this.status = status
  }
}

export function validateContactForm(body: unknown): ContactFormPayload {
  if (!body || typeof body !== 'object') {
    throw new ContactFormError('Invalid form data', 400)
  }

  const data = body as Record<string, unknown>
  const name = typeof data.name === 'string' ? data.name.trim() : ''
  const email = typeof data.email === 'string' ? data.email.trim() : ''
  const role = typeof data.role === 'string' ? data.role.trim() : ''
  const message = typeof data.message === 'string' ? data.message.trim() : ''

  if (!name || name.length > 120) {
    throw new ContactFormError('Name is required (max 120 characters)', 400)
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    throw new ContactFormError('A valid email is required', 400)
  }
  if (!VALID_ROLES.has(role)) {
    throw new ContactFormError('Invalid role selection', 400)
  }
  if (message.length < 10 || message.length > 8000) {
    throw new ContactFormError('Message must be between 10 and 8000 characters', 400)
  }

  return { name, email, role: role as ContactRole, message }
}

export function contactFormSubject(payload: ContactFormPayload) {
  const role = contactRoleLabels[payload.role] ?? payload.role
  return `[MoonSofts Contact] ${role} — ${payload.name}`
}

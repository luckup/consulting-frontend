export type ContactPayload = {
  name: string
  email: string
  role: string
  message: string
  sourceIp?: string
}

const VALID_ROLES = new Set([
  'sales-engineer',
  'co-founder-founding-engineer',
  'business-representative',
  'founding-full-stack-engineer',
  'delivery-program-manager',
  'solutions-consultant',
  'us-engineer',
  'global-engineer',
  'client',
  'other',
])

const roleLabels: Record<string, string> = {
  'sales-engineer': 'Sales engineer',
  'co-founder-founding-engineer': 'Co-founder & founding engineer',
  'business-representative': 'Business representative',
  'founding-full-stack-engineer': 'Founding full-stack engineer',
  'delivery-program-manager': 'Delivery & program manager',
  'solutions-consultant': 'Solutions consultant',
  'us-engineer': 'U.S.-based engineer (general)',
  'global-engineer': 'Engineer outside the U.S. (general)',
  client: 'Hiring manager / client',
  other: 'Other',
}

export type ContactEnv = {
  RESEND_API_KEY?: string
  CONTACT_TO_EMAIL?: string
  SMTP_FROM?: string
  RESEND_FROM?: string
}

function formatRole(role: string) {
  return roleLabels[role] ?? role
}

function validatePayload(body: unknown): ContactPayload {
  if (!body || typeof body !== 'object') {
    throw new ContactError('Invalid request body', 400)
  }
  const data = body as Record<string, unknown>
  const name = typeof data.name === 'string' ? data.name.trim() : ''
  const email = typeof data.email === 'string' ? data.email.trim() : ''
  const role = typeof data.role === 'string' ? data.role.trim() : ''
  const message = typeof data.message === 'string' ? data.message.trim() : ''

  if (!name || name.length > 120) throw new ContactError('Name is required (max 120 characters)', 400)
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    throw new ContactError('A valid email is required', 400)
  }
  if (!VALID_ROLES.has(role)) throw new ContactError('Invalid role selection', 400)
  if (message.length < 10 || message.length > 8000) {
    throw new ContactError('Message must be between 10 and 8000 characters', 400)
  }

  return { name, email, role, message }
}

export class ContactError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

function buildEmailContent(payload: ContactPayload) {
  const role = formatRole(payload.role)
  const subject = `[MoonSofts Contact] ${role} — ${payload.name}`
  const text = [
    'New message from moonsofts.com',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Role / interest: ${role}`,
    payload.sourceIp ? `IP: ${payload.sourceIp}` : null,
    '',
    'Message:',
    payload.message,
  ]
    .filter(Boolean)
    .join('\n')

  const escapedMessage = payload.message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br />')

  const html = `
    <p><strong>New contact form submission</strong> from moonsofts.com</p>
    <p><strong>Name:</strong> ${payload.name}<br />
    <strong>Email:</strong> ${payload.email}<br />
    <strong>Role:</strong> ${role}</p>
    <p><strong>Message</strong></p>
    <p>${escapedMessage}</p>
  `.trim()

  return { subject, text, html, role }
}

export async function sendContactEmail(payload: ContactPayload, env: ContactEnv) {
  const apiKey = env.RESEND_API_KEY?.trim()
  const to = env.CONTACT_TO_EMAIL?.trim() || 'yuji@moonsofts.net'
  const from = env.RESEND_FROM?.trim() || env.SMTP_FROM?.trim()

  if (!apiKey) {
    throw new ContactError(
      'Email is not configured (set RESEND_API_KEY in .env or Vercel project settings)',
      503,
    )
  }
  if (!from) {
    throw new ContactError(
      'Email sender is not configured (set SMTP_FROM or RESEND_FROM, e.g. MoonSofts <onboarding@resend.dev>)',
      503,
    )
  }

  const { subject, text, html } = buildEmailContent(payload)

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    let detail = await response.text()
    try {
      const parsed = JSON.parse(detail) as { message?: string }
      if (parsed.message) detail = parsed.message
    } catch {
      /* keep raw */
    }
    throw new ContactError(
      detail.includes('domain') || detail.includes('verified')
        ? `Resend rejected the sender address. Verify ${from} in Resend, or use RESEND_FROM=onboarding@resend.dev for testing. (${detail})`
        : `Resend error: ${detail}`,
      502,
    )
  }
}

export async function handleContactRequest(body: unknown, env: ContactEnv, sourceIp?: string) {
  const payload = validatePayload(body)
  if (sourceIp) payload.sourceIp = sourceIp
  await sendContactEmail(payload, env)
  return { ok: true as const }
}

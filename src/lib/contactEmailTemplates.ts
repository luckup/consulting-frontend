import { type ClientIpIntel } from '@/lib/clientIpIntel'
import { contactRoleLabels } from '@/lib/contactRoles'
import { type ContactFormPayload } from '@/lib/contactFormValidation'
import {
  contactEmailCompanyLogoUrl,
  contactEmailYujiLogoUrl,
} from '@/lib/contactEmailAssets'
import { EMAIL_FROM } from '@/lib/contactEmailServiceConfig'

const YUJI_VOICE_QUOTE =
  'When you reach out to MoonSofts, you are not filing a ticket—you are starting a conversation with people who care about your outcome. I read every inquiry that comes through this form, and we will respond within 24 hours with a clear next step.'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br />')
}

function roleLabel(payload: ContactFormPayload): string {
  return contactRoleLabels[payload.role] ?? payload.role
}

function emailHeader(title: string, logoUrl: string): string {
  return `<tr>
            <td style="background-color:#0b1020;padding:28px 32px 24px;border-bottom:3px solid #00dfff;text-align:center;">
              <img src="${escapeHtml(logoUrl)}" alt="MoonSofts" width="168" style="display:block;margin:0 auto 20px;max-width:168px;width:168px;height:auto;border:0;" />
              <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:600;color:#f4f7fb;">${escapeHtml(title)}</h1>
            </td>
          </tr>`
}

function yujiVoiceBlock(): string {
  const yujiLogoUrl = contactEmailYujiLogoUrl()

  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:28px;padding-top:24px;border-top:1px solid #e0e6ef;">
      <tr>
        <td width="80" style="vertical-align:top;padding-right:16px;">
          <img src="${escapeHtml(yujiLogoUrl)}" alt="Yuji, Founder of MoonSofts" width="64" height="64" style="display:block;width:64px;height:64px;border-radius:50%;object-fit:cover;border:2px solid #00dfff;" />
        </td>
        <td style="vertical-align:top;">
          <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#009fbd;">A note from Yuji</p>
          <p style="margin:0 0 12px;font-size:14px;line-height:1.65;color:#2a3548;font-style:italic;">&ldquo;${escapeHtml(YUJI_VOICE_QUOTE)}&rdquo;</p>
          <p style="margin:0;font-size:14px;font-weight:600;color:#0b1020;">Yuji</p>
          <p style="margin:4px 0 0;font-size:12px;line-height:1.5;color:#6e7a8c;">Founder, MoonSofts</p>
        </td>
      </tr>
    </table>`
}

function emailShell(options: {
  title: string
  bodyHtml: string
  includeYujiVoice?: boolean
}): string {
  const { title, bodyHtml, includeYujiVoice = false } = options
  const logoUrl = contactEmailCompanyLogoUrl()
  const yujiBlock = includeYujiVoice ? yujiVoiceBlock() : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f7fb;font-family:'DM Sans',Arial,Helvetica,sans-serif;color:#2a3548;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f7fb;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background-color:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 4px 24px rgba(42,42,42,0.06);">
          ${emailHeader(title, logoUrl)}
          <tr>
            <td style="padding:32px;">
              ${bodyHtml}
              ${yujiBlock}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background-color:#f4f7fb;border-top:1px solid #e0e6ef;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#6e7a8c;">
                MoonSofts · <a href="mailto:${EMAIL_FROM}" style="color:#009fbd;text-decoration:none;">${EMAIL_FROM}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #e0e6ef;vertical-align:top;width:120px;">
      <span style="font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#6e7a8c;">${escapeHtml(label)}</span>
    </td>
    <td style="padding:10px 0 10px 16px;border-bottom:1px solid #e0e6ef;font-size:15px;line-height:1.6;color:#2a3548;">
      ${value}
    </td>
  </tr>`
}

function vpnProxyAlertBlock(clientIpIntel: ClientIpIntel): string {
  const location = clientIpIntel.location ?? 'Unknown location'
  const detail = clientIpIntel.detectionDetail ? ` (${clientIpIntel.detectionDetail})` : ''

  return `<div style="margin:0 0 20px;padding:14px 18px;background-color:#fff3e0;border-left:4px solid #f59e0b;border-radius:4px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#b45309;">User is using VPN or proxy</p>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#78350f;">
        This submission appears to come through a VPN or proxy${escapeHtml(detail)}. Approximate location: <strong>${escapeHtml(location)}</strong>.
      </p>
    </div>`
}

function formatClientLocation(clientIpIntel?: ClientIpIntel): string {
  if (!clientIpIntel) return 'Unknown'
  if (clientIpIntel.location) return clientIpIntel.location
  if (clientIpIntel.countryCode) return clientIpIntel.countryCode
  return 'Unknown'
}

function formatVpnProxyStatus(clientIpIntel?: ClientIpIntel): string {
  if (!clientIpIntel?.usingVpnOrProxy) return 'Not detected'
  return clientIpIntel.detectionDetail
    ? `Detected (${clientIpIntel.detectionDetail})`
    : 'Detected (VPN or proxy)'
}

export function buildStaffNotificationEmail(
  payload: ContactFormPayload,
  options?: { pageUrl?: string; clientIpIntel?: ClientIpIntel },
) {
  const role = roleLabel(payload)
  const clientIpIntel = options?.clientIpIntel
  const location = formatClientLocation(clientIpIntel)
  const vpnPrefix = clientIpIntel?.usingVpnOrProxy ? '[VPN/Proxy] ' : ''
  const subject = `${vpnPrefix}[MoonSofts Contact] ${role} — ${payload.name}`

  const bodyHtml = `
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2a3548;">
      A new inquiry was submitted through the MoonSofts contact form.
    </p>
    ${clientIpIntel?.usingVpnOrProxy ? vpnProxyAlertBlock(clientIpIntel) : ''}
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0;">
      ${detailRow('Name', escapeHtml(payload.name))}
      ${detailRow('Email', `<a href="mailto:${escapeHtml(payload.email)}" style="color:#009fbd;text-decoration:none;">${escapeHtml(payload.email)}</a>`)}
      ${detailRow('Topic', escapeHtml(role))}
      ${detailRow('IP address', escapeHtml(clientIpIntel?.ip ?? 'Unavailable'))}
      ${detailRow('Location', escapeHtml(location))}
      ${detailRow('VPN / Proxy', escapeHtml(formatVpnProxyStatus(clientIpIntel)))}
      ${options?.pageUrl ? detailRow('Page', `<a href="${escapeHtml(options.pageUrl)}" style="color:#009fbd;text-decoration:none;word-break:break-all;">${escapeHtml(options.pageUrl)}</a>`) : ''}
      ${detailRow('Message', `<div style="white-space:pre-wrap;">${formatMultiline(payload.message)}</div>`)}
    </table>`

  const textLines = [
    'New MoonSofts contact form inquiry',
    '',
  ]
  if (clientIpIntel?.usingVpnOrProxy) {
    textLines.push(
      '*** USER IS USING VPN OR PROXY ***',
      `Approximate location: ${location ?? 'Unknown location'}`,
      clientIpIntel.detectionDetail ? `Detection: ${clientIpIntel.detectionDetail}` : '',
      '',
    )
  }
  textLines.push(
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Topic: ${role}`,
    `IP address: ${clientIpIntel?.ip ?? 'Unavailable'}`,
    `Location: ${location}`,
    `VPN / Proxy: ${formatVpnProxyStatus(clientIpIntel)}`,
  )
  if (options?.pageUrl) textLines.push(`Page: ${options.pageUrl}`)
  textLines.push('', 'Message:', payload.message)

  return {
    subject,
    html: emailShell({ title: 'New contact inquiry', bodyHtml }),
    text: textLines.join('\n'),
  }
}

export function buildUserConfirmationEmail(payload: ContactFormPayload) {
  const role = roleLabel(payload)
  const subject = 'We received your inquiry — MoonSofts'

  const bodyHtml = `
    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#2a3548;">
      Hi ${escapeHtml(payload.name)},
    </p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2a3548;">
      Your inquiry has been successfully received. A member of the MoonSofts team will review your message and respond within <strong style="color:#0b1020;">24 hours</strong>.
    </p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px;background-color:#e6fbff;border-radius:4px;">
      <tr>
        <td style="padding:16px 20px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#009fbd;">Your submission</p>
          <p style="margin:0 0 4px;font-size:14px;line-height:1.5;color:#2a3548;"><strong>Topic:</strong> ${escapeHtml(role)}</p>
          <p style="margin:0;font-size:14px;line-height:1.5;color:#2a3548;white-space:pre-wrap;">${formatMultiline(payload.message)}</p>
        </td>
      </tr>
    </table>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#6e7a8c;">
      If you need to add anything, reply to this email or write to
      <a href="mailto:${EMAIL_FROM}" style="color:#009fbd;text-decoration:none;">${EMAIL_FROM}</a>.
    </p>`

  const text = [
    `Hi ${payload.name},`,
    '',
    'Your inquiry has been successfully received. A member of the MoonSofts team will review your message and respond within 24 hours.',
    '',
    `Topic: ${role}`,
    '',
    'Your message:',
    payload.message,
    '',
    'A note from Yuji:',
    `"${YUJI_VOICE_QUOTE}"`,
    '',
    'Yuji',
    'Founder, MoonSofts',
    '',
    `Questions? Email ${EMAIL_FROM}`,
  ].join('\n')

  return {
    subject,
    html: emailShell({ title: 'Inquiry received', bodyHtml, includeYujiVoice: true }),
    text,
  }
}

import { useMutation } from '@tanstack/react-query'
import { type FormEvent, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { PageShell } from '@/components/PageShell'
import { MediaImage } from '@/components/MediaImage'
import { getOpenPosition } from '@/lib/careersData'
import {
  contactRoleLabels,
  isContactRole,
  openPositionContactRoles,
  type ContactRole,
} from '@/lib/contactRoles'
import { ContactFormError } from '@/lib/contactFormValidation'
import { CONTACT_INBOX } from '@/lib/contactEmail'
import { contactNav } from '@/lib/pageNav'
import { submitContactToFormspree } from '@/lib/submitContactToFormspree'
import { siteImages } from '@/lib/siteImages'

type FormState = {
  name: string
  email: string
  role: ContactRole
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  role: 'other',
  message: '',
}

const offices = [
  { region: 'Americas', detail: 'Remote-first operations across U.S. time zones.' },
  { region: 'EMEA', detail: 'Structured collaboration hubs in Türkiye and partner regions.' },
  { region: 'APAC', detail: 'Async delivery with documented handoffs and ceremonies.' },
]

function buildApplicationMessage(positionTitle: string) {
  return `Applying for: ${positionTitle}\n\nTell us about relevant experience, portfolio or shipped work, and your availability:\n\n`
}

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState<FormState>(initial)
  const honeypotRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const roleParam = searchParams.get('role')
    const positionId = searchParams.get('position')
    if (!roleParam || !isContactRole(roleParam)) return

    const position = positionId ? getOpenPosition(positionId) : undefined
    setForm((current) => ({
      ...current,
      role: roleParam,
      message:
        position && !current.message.trim()
          ? buildApplicationMessage(position.title)
          : current.message,
    }))
  }, [searchParams])

  const mutation = useMutation({
    mutationFn: async (payload: FormState) =>
      submitContactToFormspree(payload, {
        honeypot: honeypotRef.current?.value,
        pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
      }),
    onSuccess: () => {
      toast.success(`Message sent. We will reply to you at the email you provided.`)
      setForm(initial)
      if (honeypotRef.current) honeypotRef.current.value = ''
    },
    onError: (error) => {
      const message =
        error instanceof ContactFormError
          ? error.message
          : `Could not send your message. Please email ${CONTACT_INBOX} directly.`
      toast.error(message)
    },
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    mutation.mutate(form)
  }

  const selectedOpening = openPositionContactRoles.includes(form.role)
    ? contactRoleLabels[form.role]
    : null

  return (
    <PageShell
      section="Contact"
      title="Get in touch with MoonSofts"
      description="Tell us what you are building, where you want to contribute, or how we can support your next program."
      breadcrumbs={[{ label: 'Contact' }]}
      heroCta={{ label: 'Send a message', to: '/contact#contact-form' }}
      heroImage={siteImages.hero.contact}
      sidebarTitle="In this section"
      sidebarItems={contactNav}
    >
      <div className="space-y-[48px]">
        <ContentBlock label="Contact us" title="Apply for a free football player website or discuss consulting">
          <p>
            Use the form below to apply for a <strong className="font-semibold text-ink-800">free 2026 World Cup website</strong>{' '}
            for football players and fan communities, or to discuss software consulting. Submissions are delivered securely to
            our team at{' '}
            <a href={`mailto:${CONTACT_INBOX}`} className="font-semibold text-brand hover:text-brand-600">
              {CONTACT_INBOX}
            </a>
            .
          </p>
        </ContentBlock>

        <div className="grid gap-[32px] lg:grid-cols-[1fr,320px]">
          <form id="contact-form" onSubmit={handleSubmit} className="card-static scroll-mt-[120px] space-y-[24px] p-[32px]">
            <input
              ref={honeypotRef}
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="pointer-events-none absolute h-0 w-0 opacity-0"
            />
            {selectedOpening ? (
              <p className="rounded-[4px] border border-brand/20 bg-brand-light/60 px-[16px] py-[12px] text-sm text-ink-700">
                Applying for: <span className="font-semibold text-ink-900">{selectedOpening}</span>
              </p>
            ) : null}
            <div>
              <label htmlFor="name" className="field-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="field-input"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="field-input"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="role" className="field-label">
                I am reaching out as…
              </label>
              <select
                id="role"
                name="role"
                className="field-input"
                value={form.role}
                onChange={(e) => setForm((f) => ({ ...f, role: e.target.value as ContactRole }))}
              >
                <optgroup label="Current openings">
                  {openPositionContactRoles.map((role) => (
                    <option key={role} value={role}>
                      {contactRoleLabels[role]}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="General">
                  <option value="us-engineer">{contactRoleLabels['us-engineer']}</option>
                  <option value="global-engineer">{contactRoleLabels['global-engineer']}</option>
                  <option value="client">{contactRoleLabels.client}</option>
                  <option value="other">{contactRoleLabels.other}</option>
                </optgroup>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="field-input"
                placeholder={
                  selectedOpening
                    ? 'Share links to work, relevant wins, and when you could start.'
                    : undefined
                }
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />
            </div>
            <button type="submit" disabled={mutation.isPending} className="btn btn-primary w-full disabled:opacity-60">
              {mutation.isPending ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <aside className="space-y-[20px]">
            <MediaImage src={siteImages.contact.global} className="h-[180px] rounded-[4px]" overlay="subtle" />
            <div className="card-soft p-[24px]">
              <h3 className="text-sm font-semibold text-ink-900">Global presence</h3>
              <ul className="mt-[16px] space-y-[16px]">
                {offices.map((o) => (
                  <li key={o.region}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{o.region}</p>
                    <p className="mt-[4px] text-sm text-ink-600">{o.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <ContentBlock id="press" label="Press & media" title="Media and speaking inquiries">
          <p>
            For press releases, interviews, or event requests, use the contact form and select &quot;Other&quot; with
            &quot;Press&quot; in your message. Our team typically responds within two business days.
          </p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}

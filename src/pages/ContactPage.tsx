import { useMutation } from '@tanstack/react-query'
import { type FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { ContentBlock } from '@/components/ContentBlock'
import { PageShell } from '@/components/PageShell'
import { api } from '@/lib/api'
import { MediaImage } from '@/components/MediaImage'
import { contactNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

type FormState = {
  name: string
  email: string
  role: 'us-engineer' | 'global-engineer' | 'client' | 'other'
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  role: 'us-engineer',
  message: '',
}

const offices = [
  { region: 'Americas', detail: 'Remote-first operations across U.S. time zones.' },
  { region: 'EMEA', detail: 'Structured collaboration hubs in Türkiye and partner regions.' },
  { region: 'APAC', detail: 'Async delivery with documented handoffs and ceremonies.' },
]

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initial)

  const mutation = useMutation({
    mutationFn: async (payload: FormState) => {
      const { data } = await api.post<{ ok: boolean }>('/api/contact', payload)
      return data
    },
    onSuccess: () => {
      toast.success('Thanks — we will get back to you shortly.')
      setForm(initial)
    },
    onError: () => {
      toast.error('Something went wrong. Please try again or email us directly.')
    },
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    mutation.mutate(form)
  }

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
        <ContentBlock label="Contact us" title="We respond to every serious inquiry">
          <p>
            Use the form below for partnerships, careers, or client engagements. Submissions are stored securely via the
            MoonSofts API for your team to triage.
          </p>
        </ContentBlock>

        <div className="grid gap-[32px] lg:grid-cols-[1fr,320px]">
          <form id="contact-form" onSubmit={handleSubmit} className="card-static scroll-mt-[120px] space-y-[24px] p-[32px]">
            <div>
              <label htmlFor="name" className="field-label">
                Name
              </label>
              <input
                id="name"
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
                className="field-input"
                value={form.role}
                onChange={(e) => setForm((f) => ({ ...f, role: e.target.value as FormState['role'] }))}
              >
                <option value="us-engineer">U.S.-based engineer</option>
                <option value="global-engineer">Engineer outside the U.S.</option>
                <option value="client">Hiring manager / client</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="field-input"
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

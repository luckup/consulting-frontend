import { Link } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { PageShell } from '@/components/PageShell'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { servicesNav } from '@/lib/pageNav'
import { siteFeatures } from '@/lib/siteFeatures'
import { deliveryPhases, engagementModels } from '@/lib/servicesData'
import { siteImages } from '@/lib/siteImages'

export function ServicesPage() {
  useHashSectionScroll()

  return (
    <PageShell
      section="What we do"
      title="Consulting & delivery services"
      description="How MoonSofts engages—from discovery and architecture through dedicated squads, platform work, and scale-up support."
      breadcrumbs={[{ label: 'What we do', to: '/services' }, { label: 'Services' }]}
      heroCta={{ label: 'Discuss your program', to: '/contact' }}
      heroImage={siteImages.hero.services}
      sidebarTitle="In this section"
      sidebarItems={servicesNav}
    >
      <div className="space-y-[48px]">
        <ContentBlock
          id="engage"
          label="How we engage"
          title="Consulting built for serious software programs"
        >
          <p>
            MoonSofts is a software consulting partner for organizations that need predictable delivery, senior
            judgment, and security-aware engineering—not a body shop. We align with your product and technical leadership
            before we write production code.
          </p>
          <p>
            Whether you are modernizing a legacy platform, launching a new product line, or scaling a distributed team,
            we bring a repeatable operating model that compounds trust over quarters, not weeks.
          </p>
        </ContentBlock>

        <ContentBlock id="models" label="Engagement types" title="Ways we partner with you">
          <div className="grid gap-[24px] sm:grid-cols-2">
            {engagementModels.map((model) => (
              <div key={model.title} className="card p-[28px]">
                <h3 className="text-lg font-semibold text-ink-900">{model.title}</h3>
                <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{model.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-[24px] text-sm text-ink-600">
            Need the technology behind our delivery?{' '}
            <Link to="/stack" className="font-semibold text-brand hover:text-brand-600">
              Explore our platform & stack →
            </Link>
          </p>
        </ContentBlock>

        <ContentBlock id="delivery" label="Delivery model" title="From align to operate">
          <p className="mb-[28px]">
            Every engagement follows a transparent lifecycle so stakeholders know what happens next—and what success
            looks like at each gate.
          </p>
          <ol className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
            {deliveryPhases.map((step) => (
              <li key={step.phase} className="card-soft p-[24px]">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Phase {step.phase}</span>
                <h3 className="mt-[8px] text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{step.detail}</p>
              </li>
            ))}
          </ol>
        </ContentBlock>

        <ContentBlock id="why-moonsofts" label="Why MoonSofts" title="What sets our consulting apart">
          <ul className="space-y-[12px] text-ink-700">
            <li className="flex gap-[12px]">
              <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
              Senior practitioners in discovery—not junior staff sold as seniors.
            </li>
            <li className="flex gap-[12px]">
              <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
              Security, access control, and auditability engineered in from the first sprint.
            </li>
            <li className="flex gap-[12px]">
              <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
              Global delivery with U.S.-side accountability and communication rhythms that respect your calendar.
            </li>
            <li className="flex gap-[12px]">
              <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
              Honest scoping and escalation paths when trade-offs matter under pressure.
            </li>
          </ul>
          {siteFeatures.clientVoices ? (
            <p className="mt-[24px]">
              <Link to="/clients" className="font-semibold text-brand hover:text-brand-600">
                Read what clients say about us →
              </Link>
            </p>
          ) : null}
        </ContentBlock>
      </div>
    </PageShell>
  )
}

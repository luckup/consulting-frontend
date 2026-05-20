import { Link, Navigate, useParams } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { TestimonialRow } from '@/components/TestimonialRow'
import { getTestimonialForIndustry } from '@/lib/clientsData'
import { getIndustryBySlug, industries, industryPath } from '@/lib/industriesData'
import { industriesNav } from '@/lib/pageNav'
import { siteFeatures } from '@/lib/siteFeatures'

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const sector = getIndustryBySlug(slug)

  if (!sector) {
    return <Navigate to="/industries" replace />
  }

  const testimonial = getTestimonialForIndustry(sector.id)
  const index = industries.findIndex((item) => item.id === sector.id)
  const prev = index > 0 ? industries[index - 1] : null
  const next = index < industries.length - 1 ? industries[index + 1] : null

  return (
    <PageShell
      section="What we do"
      title={sector.title}
      description={sector.body}
      breadcrumbs={[
        { label: 'What we do', to: '/services' },
        { label: 'Industries', to: '/industries' },
        { label: sector.label },
      ]}
      heroCta={{ label: sector.cta.label, to: sector.cta.to }}
      heroImage={sector.heroImage}
      sidebarTitle="In this section"
      sidebarItems={industriesNav}
    >
      <div className="space-y-[48px]">
        <ContentBlock label={sector.label} title={sector.title}>
          <div className="grid gap-[32px] lg:grid-cols-2 lg:items-start">
            <div>
              <p>{sector.body}</p>
              <p className="mt-[16px] text-sm leading-relaxed text-ink-600">
                MoonSofts pairs {sector.label.toLowerCase()} domain context with accountable engineering—security,
                integrations, and stakeholder alignment treated as first-class requirements from discovery through
                production.
              </p>
              <Link to={sector.cta.to} className="btn btn-primary mt-[24px] inline-flex">
                {sector.cta.label}
              </Link>
            </div>
            <MediaImage src={sector.pageImage} alt="" className="aspect-[16/10] w-full rounded-[4px] object-cover" />
          </div>
        </ContentBlock>

        <ContentBlock label="Customer support" title="How MoonSofts supports your team">
          <p>{sector.support.intro}</p>
          <p className="mt-[16px]">{sector.support.detail}</p>
          <p className="mt-[16px] text-sm text-ink-600">
            Every engagement includes a named delivery lead, transparent reporting, and engineers who stay accessible
            to your stakeholders—not hidden behind layers of account management. We measure success by your outcomes:
            uptime, release predictability, and teams that can operate what we build together.
          </p>
          <h3 className="mt-[28px] text-base font-semibold text-ink-900">What you can expect from us</h3>
          <ul className="mt-[16px] grid gap-[12px]">
            {sector.support.services.map((item) => (
              <li
                key={item}
                className="flex gap-[12px] rounded-[4px] border border-ink-900/10 bg-paper-50 px-[16px] py-[14px] text-sm text-ink-700"
              >
                <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-[24px] text-sm text-ink-600">
            Ready to talk through your program?{' '}
            <Link to="/contact" className="font-semibold text-brand hover:text-brand-600">
              Contact our consultants
            </Link>{' '}
            or review{' '}
            <Link to="/services" className="font-semibold text-brand hover:text-brand-600">
              how we engage
            </Link>
            .
          </p>
        </ContentBlock>

        <ContentBlock label="Capabilities" title="What we deliver">
          <ul className="grid gap-[12px] sm:grid-cols-2">
            {sector.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-[12px] rounded-[4px] border border-ink-900/10 bg-paper-50 px-[16px] py-[14px] text-sm text-ink-700"
              >
                <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </ContentBlock>

        {siteFeatures.clientVoices && testimonial ? (
          <ContentBlock label="Client voice" title="What our clients say">
            <p className="mb-[24px] text-sm text-ink-600">
              Leaders in {sector.label.toLowerCase()} partner with MoonSofts for delivery they can trust. Here is how one
              client describes working with us—more voices are on our{' '}
              <Link to="/clients" className="font-semibold text-brand hover:text-brand-600">
                client stories page
              </Link>
              .
            </p>
            <TestimonialRow item={testimonial} />
          </ContentBlock>
        ) : null}

        <ContentBlock label="Engagement" title="How we partner in this sector">
          <p>
            We start with your operational reality—systems, teams, and constraints—then shape a delivery plan that
            fits. From the first workshop through hypercare after launch, MoonSofts stays accountable to the outcomes
            your leadership cares about: predictable releases, clear communication, and software your teams can own.
          </p>
          <p className="mt-[16px]">
            Explore our{' '}
            <Link to="/services" className="font-semibold text-brand hover:text-brand-600">
              consulting services
            </Link>
            {siteFeatures.clientVoices ? (
              <>
                , read more{' '}
                <Link to="/clients" className="font-semibold text-brand hover:text-brand-600">
                  client outcomes
                </Link>
              </>
            ) : null}
            , or{' '}
            <Link to={sector.cta.to} className="font-semibold text-brand hover:text-brand-600">
              start a conversation
            </Link>{' '}
            about your {sector.label.toLowerCase()} program.
          </p>
        </ContentBlock>

        <nav
          className="flex flex-col gap-[16px] border-t border-ink-900/10 pt-[32px] sm:flex-row sm:items-center sm:justify-between"
          aria-label="Other industries"
        >
          {prev ? (
            <Link to={industryPath(prev.id)} className="text-sm font-semibold text-brand hover:text-brand-600">
              ← {prev.label}
            </Link>
          ) : (
            <span />
          )}
          <Link to="/industries" className="text-sm font-medium text-ink-600 hover:text-ink-900">
            All industries
          </Link>
          {next ? (
            <Link
              to={industryPath(next.id)}
              className="text-sm font-semibold text-brand hover:text-brand-600 sm:text-right"
            >
              {next.label} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </PageShell>
  )
}

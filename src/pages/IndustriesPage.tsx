import { Link } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { industries, industryPath } from '@/lib/industriesData'
import { industriesNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

export function IndustriesPage() {
  return (
    <PageShell
      section="What we do"
      title="Industries we serve"
      description="Software consulting and delivery tailored to commerce, logistics, finance, healthcare, construction, manufacturing, and education."
      breadcrumbs={[{ label: 'What we do', to: '/services' }, { label: 'Industries' }]}
      heroCta={{ label: 'Talk to our consultants', to: '/contact' }}
      heroImage={siteImages.hero.industries}
      sidebarTitle="In this section"
      sidebarItems={industriesNav}
    >
      <div className="space-y-[48px]">
        <ContentBlock label="Overview" title="Solutions across sectors">
          <p>
            MoonSofts combines industry context with strong engineering practice. We have delivered platforms for
            high-growth startups and enterprise programs alike—always with security, integration complexity, and
            stakeholder alignment treated as first-class requirements.
          </p>
          <p>Select an industry below to explore how we partner in that sector.</p>
        </ContentBlock>

        <div className="grid gap-[24px] sm:grid-cols-2">
          {industries.map((sector) => (
            <Link
              key={sector.id}
              to={industryPath(sector.id)}
              className="card group overflow-hidden transition hover:border-brand/30 hover:shadow-card"
            >
              <MediaImage
                src={sector.pageImage}
                alt=""
                className="aspect-[16/9] w-full object-cover transition group-hover:scale-[1.02]"
              />
              <div className="p-[24px]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{sector.label}</p>
                <h3 className="mt-[8px] text-lg font-semibold text-ink-900 group-hover:text-brand">{sector.title}</h3>
                <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{sector.body}</p>
                <span className="mt-[16px] inline-flex text-sm font-semibold text-brand group-hover:text-brand-600">
                  Explore {sector.label} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <ContentBlock label="Cross-industry" title="One delivery standard, many contexts">
          <p>
            Regardless of sector, MoonSofts applies the same delivery platform, access hygiene, and quality bar.{' '}
            <Link to="/clients" className="font-semibold text-brand hover:text-brand-600">
              See client feedback
            </Link>{' '}
            or{' '}
            <Link to="/services" className="font-semibold text-brand hover:text-brand-600">
              review how we engage
            </Link>
            .
          </p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}

import { Link } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { TestimonialRow } from '@/components/TestimonialRow'
import { PageShell } from '@/components/PageShell'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { useI18n } from '@/i18n/useI18n'
import {
  getClientStats,
  getOutcomeCards,
  getPageContent,
  getTestimonials,
  getTrustedIndustries,
} from '@/i18n/localized/data'
import { getClientsNav } from '@/i18n/localized/pageNav'
import { siteImages } from '@/lib/siteImages'

export function ClientsPage() {
  useHashSectionScroll()
  const { locale, t } = useI18n()
  const page = getPageContent(locale, 'clients')
  const blocks = page.blocks
  const testimonials = getTestimonials(locale)
  const clientStats = getClientStats(locale)
  const outcomeHighlights = getOutcomeCards(locale)
  const trustedIndustries = getTrustedIndustries(locale)

  return (
    <PageShell
      section={page.section}
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumbs[0].label, to: '/about' }, { label: page.breadcrumbs[1].label }]}
      heroCta={{ label: page.heroCta, to: '/contact' }}
      heroImage={siteImages.hero.clients}
      sidebarTitle={t('ui.inThisSection')}
      sidebarItems={getClientsNav(locale)}
    >
      <div className="space-y-[48px]">
        <ContentBlock id="testimonials" label={blocks.testimonials.label} title={blocks.testimonials.title}>
          <p>{blocks.testimonials.intro}</p>
          <div className="mt-[40px] overflow-hidden rounded-[4px] border border-ink-900/10 bg-paper-50 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            {testimonials.map((item, index) => (
              <div key={item.id} className={index > 0 ? 'border-t border-ink-900/10' : undefined}>
                <TestimonialRow item={item} reverse={index % 2 === 1} />
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock id="metrics" label={blocks.metrics.label} title={blocks.metrics.title}>
          <p className="mb-[24px]">{blocks.metrics.intro}</p>
          <div className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
            {clientStats.map((stat) => (
              <div key={stat.label} className="card-soft p-[24px]">
                <p className="text-2xl font-semibold text-brand sm:text-3xl">{stat.value}</p>
                <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock id="outcomes" label={blocks.outcomes.label} title={blocks.outcomes.title}>
          <div className="grid gap-[24px] md:grid-cols-3">
            {outcomeHighlights.map((item) => (
              <div key={item.title} className="card p-[24px]">
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock id="industries-served" label={blocks.industriesServed.label} title={blocks.industriesServed.title}>
          <p>{blocks.industriesServed.intro}</p>
          <ul className="mt-[20px] flex flex-wrap gap-[12px]">
            {trustedIndustries.map((name) => (
              <li
                key={name}
                className="rounded-[4px] border border-ink-900/10 bg-paper-50 px-[14px] py-[8px] text-sm font-medium text-ink-700"
              >
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-[24px]">
            <Link to="/industries" className="font-semibold text-brand hover:text-brand-600">
              {blocks.industriesServed.link}
            </Link>
          </p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}

import { Link } from 'react-router-dom'
import { ContentBlock } from '@/components/ContentBlock'
import { TestimonialRow } from '@/components/TestimonialRow'
import { PageShell } from '@/components/PageShell'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { clientStats, outcomeHighlights, testimonials, trustedIndustries } from '@/lib/clientsData'
import { clientsNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

export function ClientsPage() {
  useHashSectionScroll()

  return (
    <PageShell
      section="Who we are"
      title="Client voices"
      description="What leaders say about partnering with MoonSofts—and the outcomes we deliver together across industries."
      breadcrumbs={[{ label: 'Who we are', to: '/about' }, { label: 'Client voices' }]}
      heroCta={{ label: 'Start a conversation', to: '/contact' }}
      heroImage={siteImages.hero.clients}
      sidebarTitle="In this section"
      sidebarItems={clientsNav}
    >
      <div className="space-y-[48px]">
        <ContentBlock
          id="testimonials"
          label="Client testimonials"
          title="Feedback from teams we serve"
        >
          <p>
            MoonSofts is chosen by product, engineering, and operations leaders who need a consulting partner—not just
            capacity. These voices reflect how we show up in discovery, delivery, and long-term collaboration.
          </p>
          <div className="mt-[40px] overflow-hidden rounded-[4px] border border-ink-900/10 bg-paper-50 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            {testimonials.map((item, index) => (
              <div key={item.id} className={index > 0 ? 'border-t border-ink-900/10' : undefined}>
                <TestimonialRow item={item} reverse={index % 2 === 1} />
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock id="metrics" label="Trust metrics" title="Delivery in numbers">
          <p className="mb-[24px]">
            We measure success by renewal, expansion, and the operational confidence our clients report—not vanity
            utilization metrics.
          </p>
          <div className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
            {clientStats.map((stat) => (
              <div key={stat.label} className="card-soft p-[24px]">
                <p className="text-2xl font-semibold text-brand sm:text-3xl">{stat.value}</p>
                <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock id="outcomes" label="Outcomes" title="What clients achieve with MoonSofts">
          <div className="grid gap-[24px] md:grid-cols-3">
            {outcomeHighlights.map((item) => (
              <div key={item.title} className="card p-[24px]">
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock id="industries-served" label="Industries served" title="Sectors we know deeply">
          <p>
            Our consultants and engineers have shipped production systems across regulated and high-velocity
            environments. Explore how we tailor delivery by industry.
          </p>
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
              View industry solutions →
            </Link>
          </p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}

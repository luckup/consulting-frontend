import { ContentBlock } from '@/components/ContentBlock'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { useHashSectionScroll } from '@/hooks/useHashSectionScroll'
import { whoWeAreNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

const credoValues = [
  {
    title: 'Clarity over noise',
    body: 'Every engagement starts with crisp scope, explicit roles, and communication rhythms that respect time zones.',
  },
  {
    title: 'Security by design',
    body: 'Privacy, access control, and auditability are engineered in from day one—not patched in after launch.',
  },
  {
    title: 'Craft with accountability',
    body: 'We hold the bar high for code quality and conduct, whether you ship from the U.S. or collaborate globally.',
  },
  {
    title: 'Trust that compounds',
    body: 'Transparent delivery, fair models, and escalation paths that work when pressure rises.',
  },
]

const commitments = [
  'Least-privilege access and logged administrative actions on every program',
  'Approved channels and data-handling rules tailored to each client environment',
  'Sustainable pacing for engineers—quality delivery without burnout theater',
  'Responsible growth: export controls, counsel, and policy treated as constraints we master',
]

const milestones = [
  { year: 'Founded', detail: 'Senior practitioners united around one frustration: brilliant engineers, brittle operations.' },
  { year: 'Today', detail: 'A global delivery network with U.S.-side leadership, security-first rituals, and enterprise-grade trust.' },
  { year: 'Forward', detail: 'Expanding the operating system for modern software—platform, partnerships, and disciplined scale.' },
]

export function AboutPage() {
  useHashSectionScroll()

  return (
    <PageShell
      section="Who we are"
      title="About MoonSofts"
      description="Our people and teams around the world are aligned in our vision to be the operating system for modern software delivery."
      breadcrumbs={[{ label: 'Who we are', to: '/about' }, { label: 'About us' }]}
      heroCta={{ label: 'See how we work', to: '/contact' }}
      heroImage={siteImages.hero.about}
      sidebarTitle="In this section"
      sidebarItems={whoWeAreNav}
    >
      <div className="space-y-[48px]">
        <ContentBlock
          id="about-us"
          label="About us"
          title="The operating system for software that matters"
        >
          <p>
            MoonSofts connects exceptional engineers with serious clients—without the chaos of typical remote staffing.
            We are built for organizations that refuse to trade velocity for trust.
          </p>
          <p>
            While others optimize for throughput, we optimize for <strong className="text-ink-900">signal</strong>: crisp
            scopes, disciplined access, and collaboration that feels local even when teams are oceans apart.
          </p>
          <p>
            From cloud platforms to logistics and commerce, we deliver enterprise software with the precision of a
            product company and the rigor of a security-conscious partner.
          </p>
        </ContentBlock>

        <ContentBlock
          id="values"
          label="Our credo & values"
          title="Important work—for ourselves and for the world"
        >
          <p className="text-base font-medium text-ink-800">
            Our credo is simple: do consequential work with people you respect, under standards you would defend in
            public.
          </p>
          <div className="grid gap-[16px] sm:grid-cols-2">
            {credoValues.map((item) => (
              <div key={item.title} className="card-soft p-[24px]">
                <h3 className="text-sm font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock
          id="commitments"
          label="Our commitments"
          title="Committed to changing how teams build software"
          variant="highlight"
        >
          <MediaImage
            src={siteImages.split.aboutCommitments}
            className="mb-[8px] h-[200px] w-full rounded-[4px] sm:h-[240px]"
            overlay="subtle"
          />
          <p>
            We enhance the quality of life of our engineers, partners, and the communities we touch—through sustainable
            delivery, fair engagement, and operations that earn long-term confidence.
          </p>
          <ul className="list-disc space-y-[10px] pl-[20px]">
            {commitments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentBlock>

        <ContentBlock id="history" label="Our history" title="Built for engineers who ship with discipline">
          <MediaImage src={siteImages.about.history} className="mb-[8px] h-[240px] rounded-[4px]" overlay="subtle" />
          <p>
            MoonSofts began when senior builders kept seeing the same pattern: world-class talent, undersupported
            operations. We created the scaffolding—rituals, documentation, access hygiene—that lets distributed teams
            deliver like they share one room.
          </p>
          <div className="mt-[24px] grid gap-[16px] border-l-2 border-brand/30 pl-[20px]">
            {milestones.map((item) => (
              <div key={item.year}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{item.year}</p>
                <p className="mt-[6px] text-sm leading-relaxed text-ink-600 sm:text-base">{item.detail}</p>
              </div>
            ))}
          </div>
          <p>
            Today we partner with U.S.-based engineers seeking flexible, well-scoped work and global talent collaborating
            through structured leadership. The bar for craft and conduct stays the same on every path.
          </p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}



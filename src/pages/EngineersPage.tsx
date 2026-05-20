import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { ContentBlock } from '@/components/ContentBlock'
import { SectionReveal } from '@/components/SectionReveal'
import { PageShell } from '@/components/PageShell'
import { SplitFeature } from '@/components/SplitFeature'
import { careersNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

const usPoints = [
  'Curated opportunities that respect your seniority and time.',
  'Optional models for collaborating with other engineers when engagements benefit from a broader bench.',
  'Operational support: scoping workshops, client communication templates, and escalation paths.',
]

const globalPoints = [
  'Interview coaching and dry-runs aligned to client expectations.',
  'Background-check coordination and documentation support when a role requires it.',
  'Stand-ups, sprint rituals, and async updates designed around humane time zones.',
]

export function EngineersPage() {
  return (
    <PageShell
      section="Careers"
      title="Working at MoonSofts"
      description="Our technology advances human potential and frees people to do what they were born to do – change the world."
      breadcrumbs={[{ label: 'Careers', to: '/engineers' }, { label: 'Join us' }]}
      heroCta={{ label: 'Current openings', to: '/contact' }}
      heroImage={siteImages.hero.careers}
      sidebarTitle="In this section"
      sidebarItems={careersNav}
    >
      <div className="space-y-[48px]">
        <ContentBlock label="Join us" title="Two audiences. One standard for craft and conduct.">
          <p>
            Whether you are in the United States or collaborating from abroad, MoonSofts invests in the scaffolding that
            makes remote work actually work—clear rituals, secure operations, and respectful collaboration.
          </p>
        </ContentBlock>

        <div className="grid gap-[24px] lg:grid-cols-2">
          <SectionReveal as="section" accent className="card border-l-4 border-l-brand p-[28px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">United States</p>
            <h2 className="mt-[12px] text-xl font-semibold text-ink-900">Lead from the front—or scale thoughtfully.</h2>
            <p className="mt-[12px] text-sm leading-relaxed text-ink-600">
              U.S.-based engineers pursue flexible engagements with serious clients while keeping expectations explicit.
            </p>
            <ul className="mt-[20px] space-y-[10px]">
              {usPoints.map((item) => (
                <li key={item} className="flex gap-[10px] text-sm text-ink-700">
                  <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal as="section" accent className="card border-l-4 border-l-moon-sky p-[28px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Global collaboration</p>
            <h2 className="mt-[12px] text-xl font-semibold text-ink-900">Remote execution with U.S.-side partnership.</h2>
            <p className="mt-[12px] text-sm leading-relaxed text-ink-600">
              Engineers outside the U.S. plug into vetted leadership, interview readiness, and predictable ceremonies.
            </p>
            <ul className="mt-[20px] space-y-[10px]">
              {globalPoints.map((item) => (
                <li key={item} className="flex gap-[10px] text-sm text-ink-700">
                  <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-moon-sky" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>

        <SplitFeature
          label="Students & graduates"
          title="Start your career with structured mentorship"
          body="MoonSofts partners with universities and bootcamps to offer project-based experience, code review culture, and exposure to production-grade delivery practices."
          cta={{ label: 'Apply via contact', to: '/contact' }}
          image={siteImages.split.careersStudents}
          reverse
        />

        <ContentBlock
          id="students"
          label="Students and graduates"
          title="Earn experience on real programs"
        >
          <p>
            We place emerging talent alongside senior engineers on well-scoped work—never as cheap labor, always with
            mentorship and clear learning outcomes.
          </p>
        </ContentBlock>

        <ContentBlock
          id="earn-learn"
          label="Earn & learn program"
          title="Grow skills while contributing to client delivery"
          variant="highlight"
          cta={{ label: 'Express interest', to: '/contact' }}
        >
          <p>
            A structured pathway for engineers transitioning into new stacks or domains: paired reviews, internal tech talks,
            and gradual ownership of production features under senior oversight.
          </p>
        </ContentBlock>

        <p className="text-center text-xs text-ink-500">
          Nothing on this page constitutes legal or immigration advice. See our{' '}
          <Link to="/privacy" className="text-brand hover:text-brand-600">
            privacy &amp; security
          </Link>{' '}
          principles for how we handle candidate data.
        </p>
      </div>
    </PageShell>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { deliveryPhases } from '@/lib/servicesData'

export function HomeSeoNarrativeSection() {
  return (
    <AnimatedHomeSection id="why-moonsofts" className="scroll-mt-[100px]">
      <RevealItem>
        <p className="section-label">Software consulting company</p>
        <h2 className="home-section-title !mt-[8px]">
          MoonSofts for startups, remote teams, and operators who need accountable engineering
        </h2>
        <div className="mt-[24px] space-y-[20px] text-base leading-relaxed text-ink-600 sm:text-lg">
          <p>
            MoonSofts is a <strong className="font-semibold text-ink-800">software consulting company</strong> built
            for founders and enterprises that cannot afford surprise rework. We combine remote delivery squads, modern
            cloud and AI practice, and executive-ready reporting so you always know what shipped, what is at risk, and
            what decisions need your attention.
          </p>
          <p>
            Whether you need a <strong className="font-semibold text-ink-800">first MVP</strong>, a{' '}
            <strong className="font-semibold text-ink-800">credible website</strong> for early customers, or a{' '}
            <strong className="font-semibold text-ink-800">long-term product program</strong>, we anchor every engagement
            on outcomes: production releases, adoption metrics, and operational readiness — not vanity milestones.
          </p>
          <p>
            Our <strong className="font-semibold text-ink-800">remote-first model</strong> blends global talent density
            with U.S.-side accountability. You work directly with senior practitioners — architects, tech leads, and
            delivery managers — who stay with the program from discovery through hypercare.
          </p>
        </div>
        <Link
          to="/services"
          className="mt-[24px] inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
        >
          Explore services & engagement models
          <ArrowRight className="h-4 w-4" />
        </Link>
      </RevealItem>

      <RevealStagger className="mt-[48px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
        {deliveryPhases.map((step) => (
          <RevealStaggerItem key={step.phase}>
            <div className="card-soft h-full border border-ink-900/10 p-[22px]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{step.phase}</p>
              <h3 className="mt-[10px] text-lg font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-[10px] text-sm leading-relaxed text-ink-600">{step.detail}</p>
            </div>
          </RevealStaggerItem>
        ))}
      </RevealStagger>

      <RevealItem>
        <div className="mt-[48px] rounded-[4px] border border-ink-900/10 bg-paper-100 p-[28px] sm:p-[36px]">
          <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">What &quot;first stage&quot; means in practice</h3>
          <div className="mt-[16px] space-y-[16px] text-sm leading-relaxed text-ink-600 sm:text-base">
            <p>
              Early MoonSofts engagements prioritize clarity: a tight problem statement, a realistic slice of value for
              v1, and instrumentation so you can learn from real users. We document assumptions, define rollback paths,
              and keep security and access control on the critical path — not as a late audit checkbox.
            </p>
            <p>
              When you are ready to scale, the same team patterns extend to multi-squad programs, platform modernization,
              and AI-assisted workflows inside a governed SDLC. The goal is continuity: the codebase, runbooks, and
              metrics from your first launch should compound into faster, safer releases later.
            </p>
          </div>
          <div className="mt-[24px] flex flex-wrap gap-[12px]">
            <Link to="/contact" className="btn btn-primary">
              Start a conversation
            </Link>
            <Link
              to="/industries"
              className="btn border border-ink-900/15 bg-paper-50 text-ink-900 hover:border-brand hover:text-brand"
            >
              Browse industries
            </Link>
          </div>
        </div>
      </RevealItem>
    </AnimatedHomeSection>
  )
}

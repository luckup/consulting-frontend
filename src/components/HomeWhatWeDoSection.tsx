import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function HomeWhatWeDoSection() {
  return (
    <section id="what-we-do" className="border-b border-brand-600/30 bg-brand">
      <div className="container-pad section-spacing">
        <div className="grid gap-[40px] lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-[64px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moon-sky">What we do</p>
            <h2 className="mt-[12px] text-3xl font-bold leading-tight text-[white] sm:text-4xl">
              Powering the last mile of software delivery
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-[white]/90 sm:text-lg">
              At MoonSofts, we bridge the gap between engineering capacity and value realization—enabling adoption of
              platforms, integrations, and product roadmaps that actually ship. Industry-specific consulting and
              delivery for teams that refuse to trade velocity for trust.
            </p>
            <Link
              to="/services"
              className="mt-[24px] inline-flex items-center gap-[8px] text-sm font-semibold text-moon-sky transition hover:text-[white]"
            >
              Explore our consulting services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

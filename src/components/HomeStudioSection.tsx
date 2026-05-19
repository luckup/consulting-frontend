import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { studioFeatures } from '@/lib/homeContent'

export function HomeStudioSection() {
  return (
    <section className="border-b border-ink-900/10 bg-brand-700 text-[white]/90">
      <div className="container-pad section-spacing">
        <div className="grid gap-[40px] lg:grid-cols-2 lg:items-center lg:gap-[64px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moon-sky">MoonSofts delivery studio</p>
            <h2 className="mt-[12px] text-3xl font-bold leading-tight text-[white] sm:text-4xl">
              Engineering accelerator ecosystem for enterprises
            </h2>
            <p className="mt-[20px] text-base leading-relaxed text-[white]/75">
              Envision new possibilities with a delivery operating system—security rituals, integration patterns, and
              accountable squads that move from discovery to production with discipline.
            </p>
            <Link
              to="/stack"
              className="mt-[28px] inline-flex items-center gap-[8px] rounded-[4px] bg-brand px-[24px] py-[12px] text-sm font-semibold text-[white] transition hover:bg-brand-600"
            >
              Explore our platform
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-[12px] sm:grid-cols-2">
            {studioFeatures.map((feature) => (
              <li key={feature} className="flex gap-[12px] text-sm leading-relaxed text-[white]/85">
                <CheckCircle2 className="mt-[2px] h-[18px] w-[18px] shrink-0 text-moon-sky" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

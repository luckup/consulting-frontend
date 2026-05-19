import { Link } from 'react-router-dom'
import { uniquePillars } from '@/lib/homeContent'

export function HomeUniquePillarsSection() {
  return (
    <section className="border-b border-ink-900/10 bg-paper-100">
      <div className="container-pad section-spacing">
        <div className="max-w-2xl">
          <p className="section-label">What makes us unique</p>
          <h2 className="mt-[12px] text-2xl font-semibold text-ink-900 sm:text-3xl">
            Unrivaled speed—from action to value to scale
          </h2>
        </div>

        <div className="mt-[40px] grid gap-[24px] md:grid-cols-3">
          {uniquePillars.map((pillar) => (
            <article key={pillar.title} className="card border-t-[3px] border-t-brand bg-paper-50 p-[28px]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{pillar.subtitle}</p>
              <h3 className="mt-[12px] text-xl font-semibold text-ink-900">{pillar.title}</h3>
              <p className="mt-[16px] text-sm leading-relaxed text-ink-600">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-[32px]">
          <Link to="/clients" className="text-sm font-semibold text-brand hover:text-brand-600">
            Hear what our customers say →
          </Link>
        </div>
      </div>
    </section>
  )
}

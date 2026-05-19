import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { homeIndustries, homeServices } from '@/lib/homeContent'

export function HomeExploreContent() {
  return (
    <div id="industries" className="scroll-mt-[100px]">
      <div className="max-w-3xl">
        <p className="section-label">Industries &amp; services</p>
        <h2 className="mt-[12px] text-2xl font-semibold text-ink-900 sm:text-3xl">
          Where we deliver software consulting
        </h2>
        <p className="mt-[16px] text-base leading-relaxed text-ink-600 sm:text-lg">
          Sector depth and delivery capabilities that work together—from discovery and dedicated squads to cloud,
          integration, and security.
        </p>
      </div>

      <div className="mt-[48px]">
        <div className="flex flex-wrap items-end justify-between gap-[16px] border-b border-ink-900/10 pb-[16px]">
          <h3 className="text-lg font-semibold text-ink-900">Industries we serve</h3>
          <Link
            to="/industries"
            className="inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
          >
            View all industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-[24px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {homeIndustries.map((item) => (
            <Link key={item.label} to={item.to} className="card group overflow-hidden bg-paper-50">
              <div className="relative h-[180px] overflow-hidden bg-paper-100">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-[20px]">
                <p className="text-base font-semibold text-ink-900">{item.label}</p>
                <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{item.body}</p>
                <span className="mt-[16px] inline-flex items-center gap-[6px] text-xs font-semibold text-brand">
                  Explore
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-[56px]">
        <div className="flex flex-wrap items-end justify-between gap-[16px] border-b border-ink-900/10 pb-[16px]">
          <h3 className="text-lg font-semibold text-ink-900">Consulting &amp; delivery services</h3>
          <Link
            to="/services"
            className="inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-[24px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="card-soft group bg-paper-50 p-[24px] transition hover:border-brand/30"
            >
              <h4 className="text-base font-semibold text-ink-900 group-hover:text-brand">{item.title}</h4>
              <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{item.body}</p>
              <span className="mt-[16px] inline-flex items-center gap-[6px] text-xs font-semibold text-brand">
                Learn more
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HomeExploreSection() {
  return (
    <section id="industries-section" className="scroll-mt-[100px] border-b border-ink-900/10 bg-paper-100">
      <div className="container-pad section-spacing !pb-[40px] sm:!pb-[48px]">
        <HomeExploreContent />
      </div>
    </section>
  )
}

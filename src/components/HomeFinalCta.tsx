import { Link } from 'react-router-dom'

export function HomeFinalCta() {
  return (
    <section className="bg-brand-light">
      <div className="container-pad section-spacing text-center">
        <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">Go beyond possible with MoonSofts</h2>
        <p className="mx-auto mt-[16px] max-w-2xl text-base leading-relaxed text-ink-600">
          See what accountable engineering and industry-specific delivery can do for your next program.
        </p>
        <div className="mt-[28px] flex flex-wrap items-center justify-center gap-[12px]">
          <Link to="/contact" className="btn btn-primary px-[28px] py-[12px]">
            Speak with our team
          </Link>
          <Link to="/services" className="btn btn-secondary px-[28px] py-[12px]">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  )
}

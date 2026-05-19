import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteImages } from '@/lib/siteImages'

export function HomeCareersCta() {
  return (
    <section className="border-b border-ink-900/10 bg-brand">
      <div className="container-pad section-spacing">
        <div className="grid gap-[32px] lg:grid-cols-2 lg:items-center lg:gap-[48px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moon-sky">Join our team</p>
            <h2 className="mt-[12px] text-3xl font-bold leading-tight text-[white] sm:text-4xl">
              Build consequential software with people you respect
            </h2>
            <p className="mt-[16px] max-w-xl text-base leading-relaxed text-[white]/90">
              We&apos;re looking for engineers and consultants who care about craft, conduct, and outcomes—working on
              programs that matter across industries worldwide.
            </p>
            <Link
              to="/engineers"
              className="mt-[28px] inline-flex items-center gap-[8px] rounded-[4px] border border-[white] bg-[white] px-[28px] py-[14px] text-sm font-semibold text-brand transition hover:bg-[white]/90 sm:text-base"
            >
              Apply to our jobs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[4px] sm:min-h-[320px] lg:min-h-[360px]">
            <img
              src={siteImages.cta.careers}
              alt="MoonSofts careers"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

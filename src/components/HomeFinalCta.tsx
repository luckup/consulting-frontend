import { Link } from 'react-router-dom'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { RevealItem } from '@/components/SectionReveal'

export function HomeFinalCta() {
  return (
    <AnimatedHomeSection className="text-center">
      <RevealItem>
        <div className="mx-auto max-w-2xl">
          <p className="section-label">Partner with us</p>
          <h2 className="mt-[8px] text-2xl font-semibold text-ink-900 sm:text-3xl">Go beyond possible with MoonSofts</h2>
          <p className="mt-[12px] text-base leading-relaxed text-ink-600 sm:text-lg">
            See what accountable engineering and industry-specific delivery can do for your next program.
          </p>
        </div>
      </RevealItem>
      <RevealItem>
        <div className="mt-[28px] flex flex-wrap items-center justify-center gap-[12px]">
          <Link to="/contact" className="btn btn-primary px-[28px] py-[12px]">
            Speak with our team
          </Link>
          <Link to="/services" className="btn btn-secondary border-transparent px-[28px] py-[12px]">
            Explore services
          </Link>
        </div>
      </RevealItem>
    </AnimatedHomeSection>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { RevealItem } from '@/components/SectionReveal'

export function HomeWhatWeDoSection() {
  return (
    <AnimatedHomeSection id="what-we-do" className="scroll-mt-[100px]">
      <div className="grid gap-[40px] lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-[64px]">
        <RevealItem>
          <HomeSectionHeader label="What we do" title="Powering the last mile of software delivery" />
        </RevealItem>
        <RevealItem>
          <div>
            <p className="text-base leading-relaxed text-ink-600 sm:text-lg">
              At MoonSofts, we bridge the gap between engineering capacity and value realization—enabling adoption of
              platforms, integrations, and product roadmaps that actually ship. Industry-specific consulting and
              delivery for teams that refuse to trade velocity for trust.
            </p>
            <Link to="/services" className="link-text mt-[24px]">
              Explore our consulting services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealItem>
      </div>
    </AnimatedHomeSection>
  )
}

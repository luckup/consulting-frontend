import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { TrustReviewBadges } from '@/components/TrustReviewBadges'
import { RevealItem } from '@/components/SectionReveal'

export function HomeTrustReviewsSection() {
  return (
    <AnimatedHomeSection id="trust-reviews" className="scroll-mt-[100px] border-t border-ink-900/10 bg-paper-50">
      <RevealItem>
        <HomeSectionHeader
          label="Client reviews"
          title="Trusted by teams who measure delivery in outcomes"
          description="Our Clutch rating reflects how we engage—transparent delivery, senior practitioners, and partnerships built to last."
        />
      </RevealItem>

      <RevealItem>
        <TrustReviewBadges className="mt-[32px]" />
      </RevealItem>
    </AnimatedHomeSection>
  )
}

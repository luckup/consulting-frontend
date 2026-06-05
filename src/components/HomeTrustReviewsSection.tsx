import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { TrustReviewBadges } from '@/components/TrustReviewBadges'
import { RevealItem } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getMessages } from '@/i18n/translate'

export function HomeTrustReviewsSection() {
  const { locale } = useI18n()
  const { trustReviews } = getMessages(locale).homeSections

  return (
    <AnimatedHomeSection id="trust-reviews" className="scroll-mt-[100px] border-t border-ink-900/10 bg-paper-50">
      <RevealItem>
        <HomeSectionHeader
          label={trustReviews.label}
          title={trustReviews.title}
          description={trustReviews.description}
        />
      </RevealItem>

      <RevealItem>
        <TrustReviewBadges className="mt-[32px]" />
      </RevealItem>
    </AnimatedHomeSection>
  )
}

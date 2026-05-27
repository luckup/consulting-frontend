import { HomeCeoVisionSection } from '@/components/HomeCeoVisionSection'
import { HomeClientVoicesSection } from '@/components/HomeClientVoicesSection'
import { HomeConsultingSection } from '@/components/HomeConsultingSection'
import { HomeFaqSection } from '@/components/HomeFaqSection'
import { HomeIndustriesSection } from '@/components/HomeIndustriesSection'
import { HomeLatestNewsStrip } from '@/components/HomeLatestNewsStrip'
import { HomeMediumSection } from '@/components/HomeMediumSection'
import { HomeSeoNarrativeSection } from '@/components/HomeSeoNarrativeSection'
import { HomeSpotlightHero } from '@/components/HomeSpotlightHero'
import { HomeStudioSection } from '@/components/HomeStudioSection'
import { HomeTrustReviewsSection } from '@/components/HomeTrustReviewsSection'
import { HomeWhatWeDoSection } from '@/components/HomeWhatWeDoSection'
import { siteFeatures } from '@/lib/siteFeatures'

export function HomePage() {
  return (
    <>
      <HomeSpotlightHero />
      <HomeWhatWeDoSection />
      <HomeCeoVisionSection />
      <HomeTrustReviewsSection />
      <HomeIndustriesSection />
      <HomeSeoNarrativeSection />
      <HomeConsultingSection />
      <HomeLatestNewsStrip />
      <HomeMediumSection />
      {siteFeatures.clientVoices ? <HomeClientVoicesSection /> : null}
      <HomeStudioSection />
      <HomeFaqSection />
    </>
  )
}

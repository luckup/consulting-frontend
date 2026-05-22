import { HomeClientVoicesSection } from '@/components/HomeClientVoicesSection'
import { HomeConsultingSection } from '@/components/HomeConsultingSection'
import { HomeFaqSection } from '@/components/HomeFaqSection'
import { HomeIndustriesSection } from '@/components/HomeIndustriesSection'
import { HomeLatestNewsStrip } from '@/components/HomeLatestNewsStrip'
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
      <HomeTrustReviewsSection />
      <HomeIndustriesSection />
      <HomeConsultingSection />
      <HomeLatestNewsStrip />
      {siteFeatures.clientVoices ? <HomeClientVoicesSection /> : null}
      <HomeStudioSection />
      <HomeFaqSection />
    </>
  )
}

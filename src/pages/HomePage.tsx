import { HomeCareersCta } from '@/components/HomeCareersCta'
import { HomeClientVoicesSection } from '@/components/HomeClientVoicesSection'
import { HomeFinalCta } from '@/components/HomeFinalCta'
import { HomeLatestNewsStrip } from '@/components/HomeLatestNewsStrip'
import { HomeSpotlightHero } from '@/components/HomeSpotlightHero'
import { HomeStudioSection } from '@/components/HomeStudioSection'
import { HomeExploreSection } from '@/components/HomeExploreSection'
import { HomeUniquePillarsSection } from '@/components/HomeUniquePillarsSection'
import { HomeWhatWeDoSection } from '@/components/HomeWhatWeDoSection'

export function HomePage() {
  return (
    <>
      <HomeSpotlightHero />
      <HomeWhatWeDoSection />
      <HomeExploreSection />
      <HomeLatestNewsStrip />
      <HomeClientVoicesSection />
      <HomeStudioSection />
      <HomeUniquePillarsSection />
      <HomeCareersCta />
      <HomeFinalCta />
    </>
  )
}

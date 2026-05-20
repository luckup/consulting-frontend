import { HomeClientVoicesSection } from '@/components/HomeClientVoicesSection'
import { HomeConsultingSection } from '@/components/HomeConsultingSection'
import { HomeFinalCta } from '@/components/HomeFinalCta'
import { HomeIndustriesSection } from '@/components/HomeIndustriesSection'
import { HomeLatestNewsStrip } from '@/components/HomeLatestNewsStrip'
import { HomeSpotlightHero } from '@/components/HomeSpotlightHero'
import { HomeStudioSection } from '@/components/HomeStudioSection'
import { HomeWhatWeDoSection } from '@/components/HomeWhatWeDoSection'

export function HomePage() {
  return (
    <>
      <HomeSpotlightHero />
      <HomeWhatWeDoSection />
      <HomeIndustriesSection />
      <HomeConsultingSection />
      <HomeLatestNewsStrip />
      <HomeClientVoicesSection />
      <HomeStudioSection />
      <HomeFinalCta />
    </>
  )
}

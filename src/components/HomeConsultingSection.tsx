import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeCertificationsGrid } from '@/components/HomeCertificationsGrid'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { homeServices } from '@/lib/homeContent'

export function HomeConsultingSection() {
  return (
    <AnimatedHomeSection id="consulting-services" className="scroll-mt-[100px]">
      <RevealItem>
        <HomeSectionHeader
          label="Consulting & delivery services"
          title="From discovery through production delivery"
          description="Architecture assessments, dedicated squads, cloud platforms, integrations, and security—engagement models mapped to outcomes your stakeholders can measure."
          action={{ to: '/services', label: 'View all services' }}
        />
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((item) => (
            <RevealStaggerItem key={item.title}>
              <Link to={item.to} className="home-card-soft group block h-full p-[24px]">
                <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand">{item.title}</h3>
                <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{item.body}</p>
                <span className="mt-[16px] inline-flex items-center gap-[6px] text-xs font-semibold text-brand">
                  Learn more
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </RevealStaggerItem>
          ))}
      </RevealStagger>

      <HomeCertificationsGrid />
    </AnimatedHomeSection>
  )
}

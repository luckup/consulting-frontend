import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeCertificationsGrid } from '@/components/HomeCertificationsGrid'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getMessages } from '@/i18n/translate'
import { siteFeatures } from '@/lib/siteFeatures'

export function HomeConsultingSection() {
  const { locale, t } = useI18n()
  const { consulting, homeServices } = getMessages(locale).homeSections

  return (
    <AnimatedHomeSection id="consulting-services" className="scroll-mt-[100px]">
      <RevealItem>
        <HomeSectionHeader
          label={consulting.label}
          title={consulting.title}
          description={consulting.description}
          action={{ to: '/services', label: consulting.action }}
        />
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {homeServices.map((item) => (
          <RevealStaggerItem key={item.title}>
            <Link to={item.to} className="home-card-soft group block h-full p-[24px]">
              <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand">{item.title}</h3>
              <p className="mt-[12px] text-sm leading-relaxed text-ink-600">{item.body}</p>
              <span className="mt-[16px] inline-flex items-center gap-[6px] text-xs font-semibold text-brand">
                {t('common.learnMore')}
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </RevealStaggerItem>
        ))}
      </RevealStagger>

      {siteFeatures.homeCertifications ? <HomeCertificationsGrid /> : null}
    </AnimatedHomeSection>
  )
}

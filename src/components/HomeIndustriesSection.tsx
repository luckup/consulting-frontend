import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getMessages } from '@/i18n/translate'
import { getHomeIndustries } from '@/i18n/localized/industries'

export function HomeIndustriesSection() {
  const { locale, t } = useI18n()
  const { industries } = getMessages(locale).homeSections
  const homeIndustries = getHomeIndustries(locale)

  return (
    <AnimatedHomeSection id="industries" className="scroll-mt-[100px]">
      <RevealItem>
        <HomeSectionHeader
          label={industries.label}
          title={industries.title}
          description={industries.description}
          action={{ to: '/industries', label: industries.action }}
        />
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
        {homeIndustries.map((item) => (
          <RevealStaggerItem key={item.label}>
            <Link to={item.to} className="home-card group overflow-hidden">
              <div className="relative h-[180px] overflow-hidden bg-paper-100">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-[20px]">
                <p className="text-base font-semibold text-ink-900">{item.label}</p>
                <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{item.body}</p>
                <span className="mt-[16px] inline-flex items-center gap-[6px] text-xs font-semibold text-brand">
                  {t('ui.explore')}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </RevealStaggerItem>
        ))}
      </RevealStagger>
    </AnimatedHomeSection>
  )
}

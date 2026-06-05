import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { HomeSectionHeader } from '@/components/HomeSectionHeader'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { TestimonialCard } from '@/components/TestimonialCard'
import { useI18n } from '@/i18n/useI18n'
import { getClientStats, getTestimonials } from '@/i18n/localized/data'
import { getMessages } from '@/i18n/translate'

export function HomeClientVoicesSection() {
  const { locale } = useI18n()
  const { clientVoices } = getMessages(locale).homeSections
  const clientStats = getClientStats(locale)
  const featured = getTestimonials(locale).slice(0, 3)

  return (
    <AnimatedHomeSection id="client-voices" className="scroll-mt-[100px]">
      <RevealItem>
        <HomeSectionHeader
          label={clientVoices.label}
          title={clientVoices.title}
          description={clientVoices.description}
          action={{ to: '/clients', label: clientVoices.action }}
        />
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
        {clientStats.map((stat) => (
          <RevealStaggerItem key={stat.label}>
            <div className="client-stat-card relative flex min-h-[148px] flex-col justify-center overflow-hidden rounded-[4px] border-2 border-transparent bg-gradient-to-br from-brand-light via-paper-50 to-paper-50 p-[28px] text-center shadow-[0_12px_40px_rgba(0,223,255,0.16)] transition duration-300 hover:shadow-[0_16px_48px_rgba(0,223,255,0.22)] sm:min-h-[168px] sm:p-[32px] sm:text-left">
              <div
                className="pointer-events-none absolute -right-[20%] -top-[30%] h-[120px] w-[120px] rounded-full bg-brand/10 blur-[40px]"
                aria-hidden
              />
              <p className="relative text-4xl font-bold tracking-tight text-brand sm:text-5xl">{stat.value}</p>
              <p className="relative mt-[12px] text-base font-semibold leading-snug text-ink-800">{stat.label}</p>
            </div>
          </RevealStaggerItem>
        ))}
      </RevealStagger>

      <RevealStagger className="mt-[32px] grid gap-[24px] md:grid-cols-3">
        {featured.map((item) => (
          <RevealStaggerItem key={item.id}>
            <TestimonialCard item={item} />
          </RevealStaggerItem>
        ))}
      </RevealStagger>
    </AnimatedHomeSection>
  )
}

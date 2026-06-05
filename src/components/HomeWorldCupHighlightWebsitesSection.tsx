import { Link } from 'react-router-dom'
import { ArrowRight, Clapperboard, Globe, Layout, Smartphone, Users, Video } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { MediaImage } from '@/components/MediaImage'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { ScheduleConsultationButton } from '@/components/NavMenuLink'
import { useI18n } from '@/i18n/useI18n'
import { getMessages } from '@/i18n/translate'
import { FOOTBALL_INITIATIVE_PATH } from '@/lib/seoFootballKeywords'
import { siteImages } from '@/lib/siteImages'

const featureIcons = [Video, Users, Clapperboard, Smartphone, Layout, Globe] as const

export function HomeWorldCupHighlightWebsitesSection() {
  const { locale, t } = useI18n()
  const { worldCupCustom } = getMessages(locale).home
  const { worldCupFeatures, buildSteps } = getMessages(locale).homeSections

  return (
    <AnimatedHomeSection
      id="world-cup-highlight-websites"
      className="scroll-mt-[100px] border-t border-ink-900/10 bg-paper-100"
    >
      <div className="grid gap-[48px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-[64px]">
        <RevealItem className="h-full min-h-[280px] sm:min-h-[360px]">
          <MediaImage
            src={siteImages.worldCup.highlightsCustomer}
            alt={t('ui.worldCupImageAlt')}
            className="h-full min-h-[280px] sm:min-h-[360px]"
            overlay="none"
            transparentBg
          />
        </RevealItem>

        <RevealItem>
          <p className="section-label">{worldCupCustom.label}</p>
          <h2 className="home-section-title !mt-[8px]">{worldCupCustom.title}</h2>
          <p className="mt-[16px] text-base leading-relaxed text-ink-600 sm:text-lg">{worldCupCustom.body1}</p>
          <p className="mt-[16px] text-base leading-relaxed text-ink-600 sm:text-lg">
            {worldCupCustom.body2Before}{' '}
            <Link to={FOOTBALL_INITIATIVE_PATH} className="font-semibold text-brand hover:text-brand-600">
              {worldCupCustom.body2Link}
            </Link>
            {worldCupCustom.body2After}
          </p>
          <div className="mt-[24px] flex flex-wrap gap-[12px]">
            <Link to="/contact" className="btn btn-primary inline-flex items-center gap-[8px]">
              {worldCupCustom.ctaDiscuss}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <ScheduleConsultationButton
              variant="secondary"
              showIcon
              label={worldCupCustom.ctaMeeting}
              className="border border-ink-900/15 bg-paper-50 text-ink-900 hover:border-brand hover:text-brand"
            />
          </div>
        </RevealItem>
      </div>

      <RevealStagger className="mt-[56px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {worldCupFeatures.map((item, index) => {
          const Icon = featureIcons[index] ?? Globe
          return (
            <RevealStaggerItem key={item.title}>
              <div className="card-soft h-full border border-ink-900/10 p-[24px]">
                <Icon className="h-[28px] w-[28px] text-brand" aria-hidden />
                <h3 className="mt-[14px] text-base font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-[10px] text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            </RevealStaggerItem>
          )
        })}
      </RevealStagger>

      <div className="mt-[56px] rounded-[4px] border border-brand/25 bg-gradient-to-br from-brand/10 via-paper-50 to-paper-50 p-[28px] sm:p-[36px]">
        <RevealItem>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{t('ui.howWeWorkWithYou')}</p>
          <h3 className="mt-[10px] text-lg font-semibold text-ink-900 sm:text-xl">{t('ui.fromHighlightsToLiveSite')}</h3>
        </RevealItem>
        <RevealStagger className="mt-[28px] grid gap-[24px] md:grid-cols-3">
          {buildSteps.map((item) => (
            <RevealStaggerItem key={item.step}>
              <p className="text-2xl font-bold tabular-nums text-brand/80">{item.step}</p>
              <h4 className="mt-[8px] text-base font-semibold text-ink-900">{item.title}</h4>
              <p className="mt-[8px] text-sm leading-relaxed text-ink-600">{item.detail}</p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </AnimatedHomeSection>
  )
}

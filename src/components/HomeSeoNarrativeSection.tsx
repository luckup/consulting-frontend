import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getDeliveryPhases } from '@/i18n/localized/data'
import { getMessages } from '@/i18n/translate'

export function HomeSeoNarrativeSection() {
  const { locale, t } = useI18n()
  const copy = getMessages(locale).homeSections.seoNarrative
  const deliveryPhases = getDeliveryPhases(locale)

  return (
    <AnimatedHomeSection id="why-moonsofts" className="scroll-mt-[100px]">
      <RevealItem>
        <p className="section-label">{copy.label}</p>
        <h2 className="home-section-title !mt-[8px]">{copy.title}</h2>
        <div className="mt-[24px] space-y-[20px] text-base leading-relaxed text-ink-600 sm:text-lg">
          <p>
            {copy.p1Before} <strong className="font-semibold text-ink-800">{copy.p1Highlight}</strong>{' '}
            {copy.p1After}
          </p>
          <p>
            {copy.p2Intro}{' '}
            <strong className="font-semibold text-ink-800">{copy.p2Items[0]}</strong>
            {copy.p2Join}
            <strong className="font-semibold text-ink-800">{copy.p2Items[1]}</strong>
            {copy.p2Join}
            <strong className="font-semibold text-ink-800">{copy.p2Items[2]}</strong>
            {copy.p2BeforeEvent}
            <strong className="font-semibold text-ink-800">{copy.p2Items[3]}</strong>
            {copy.p2BeforeLast}
            <strong className="font-semibold text-ink-800">{copy.p2Items[4]}</strong>,{' '}
            {copy.p2After}
          </p>
          <p>
            {copy.p3Before} <strong className="font-semibold text-ink-800">{copy.p3Highlight}</strong> {copy.p3After}
          </p>
        </div>
        <Link
          to="/services"
          className="mt-[24px] inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
        >
          {copy.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </RevealItem>

      <RevealStagger className="mt-[48px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
        {deliveryPhases.map((step) => (
          <RevealStaggerItem key={step.phase}>
            <div className="card-soft h-full border border-ink-900/10 p-[22px]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{step.phase}</p>
              <h3 className="mt-[10px] text-lg font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-[10px] text-sm leading-relaxed text-ink-600">{step.detail}</p>
            </div>
          </RevealStaggerItem>
        ))}
      </RevealStagger>

      <RevealItem>
        <div className="mt-[48px] rounded-[4px] border border-ink-900/10 bg-paper-100 p-[28px] sm:p-[36px]">
          <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">{copy.firstStageTitle}</h3>
          <div className="mt-[16px] space-y-[16px] text-sm leading-relaxed text-ink-600 sm:text-base">
            <p>{copy.firstStageP1}</p>
            <p>{copy.firstStageP2}</p>
          </div>
          <div className="mt-[24px] flex flex-wrap gap-[12px]">
            <Link to="/contact" className="btn btn-primary">
              {t('ui.startConversation')}
            </Link>
            <Link
              to="/industries"
              className="btn border border-ink-900/15 bg-paper-50 text-ink-900 hover:border-brand hover:text-brand"
            >
              {t('ui.browseIndustries')}
            </Link>
          </div>
        </div>
      </RevealItem>
    </AnimatedHomeSection>
  )
}

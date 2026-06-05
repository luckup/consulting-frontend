import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { MediaImage } from '@/components/MediaImage'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getMessages } from '@/i18n/translate'
import { FOOTBALL_INITIATIVE_PATH } from '@/lib/seoFootballKeywords'
import { siteImages } from '@/lib/siteImages'

export function HomeFootballWorldCupSection() {
  const { locale } = useI18n()
  const copy = getMessages(locale).home.worldCupInitiative

  return (
    <AnimatedHomeSection
      id="world-cup-2026-free-websites"
      className="scroll-mt-[100px] border-t border-ink-900/10 bg-gradient-to-b from-brand/8 via-paper-50 to-paper-50"
    >
      <RevealItem>
        <div className="overflow-hidden rounded-[4px] border border-ink-900/10 shadow-soft">
          <MediaImage
            src={siteImages.news.worldCup2026}
            alt={copy.bannerAlt}
            className="min-h-[200px] sm:min-h-[280px]"
            overlay="subtle"
          />
        </div>
      </RevealItem>

      <RevealItem>
        <p className="section-label mt-[40px]">{copy.label}</p>
        <h2 className="home-section-title !mt-[8px]">{copy.title}</h2>
        <p className="mt-[16px] max-w-3xl text-base leading-relaxed text-ink-600 sm:text-lg">
          {copy.bodyBefore} <strong className="font-semibold text-ink-800">{copy.bodyFree}</strong> {copy.bodyAfter}
        </p>
        <div className="mt-[24px] flex flex-wrap gap-[12px]">
          <Link to={FOOTBALL_INITIATIVE_PATH} className="btn btn-primary inline-flex items-center gap-[8px]">
            {copy.ctaRead}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="btn border border-ink-900/15 bg-paper-50 text-ink-900 hover:border-brand hover:text-brand"
          >
            {copy.ctaApply}
          </Link>
        </div>
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[16px] sm:grid-cols-3">
        {copy.highlights.map((item) => (
          <RevealStaggerItem key={item.title}>
            <div className="card-soft h-full border border-brand/20 p-[24px]">
              <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-[10px] text-sm leading-relaxed text-ink-600">{item.body}</p>
            </div>
          </RevealStaggerItem>
        ))}
      </RevealStagger>
    </AnimatedHomeSection>
  )
}

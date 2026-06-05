import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { RevealItem } from '@/components/SectionReveal'
import { useI18n } from '@/i18n/useI18n'
import { getMessages } from '@/i18n/translate'
import { FOOTBALL_INITIATIVE_PATH } from '@/lib/seoFootballKeywords'

const linkRoutes = [FOOTBALL_INITIATIVE_PATH, '/contact', '/services'] as const

export function HomeDiscoverLinks() {
  const { t, locale } = useI18n()
  const copy = getMessages(locale).home.discover

  return (
    <AnimatedHomeSection
      id="discover-moonsofts"
      className="scroll-mt-[100px] border-t border-ink-900/10 bg-paper-50 py-[40px]"
      aria-label={copy.label}
    >
      <RevealItem>
        <p className="section-label">{copy.label}</p>
        <h2 className="home-section-title !mt-[8px]">{copy.title}</h2>
        <p className="mt-[12px] max-w-3xl text-sm leading-relaxed text-ink-600 sm:text-base">{copy.body}</p>
      </RevealItem>

      <ul className="mt-[28px] grid gap-[16px] sm:grid-cols-3">
        {copy.links.map((item, index) => (
          <li key={linkRoutes[index]}>
            <Link
              to={linkRoutes[index]}
              className="home-card-soft group flex h-full flex-col p-[22px] transition hover:border-brand/30"
            >
              <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand">{item.title}</h3>
              <p className="mt-[10px] flex-1 text-sm leading-relaxed text-ink-600">{item.body}</p>
              <span className="mt-[16px] inline-flex items-center gap-[6px] text-xs font-semibold text-brand">
                {t('common.learnMore')}
                <ArrowRight className="h-3 w-3 transition group-hover:translate-x-[3px]" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </AnimatedHomeSection>
  )
}

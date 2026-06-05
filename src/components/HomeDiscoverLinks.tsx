import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { RevealItem } from '@/components/SectionReveal'
import { FOOTBALL_INITIATIVE_PATH } from '@/lib/seoFootballKeywords'

const links = [
  {
    title: 'Free 2026 World Cup website',
    body: 'Read how selected football players and fan communities can get a free site for highlights and match updates.',
    to: FOOTBALL_INITIATIVE_PATH,
  },
  {
    title: 'Apply for a free website',
    body: 'Tell us about your football story, highlight reels, and what you want fans to see before the 2026 World Cup.',
    to: '/contact',
  },
  {
    title: 'Website & consulting services',
    body: 'MVPs, marketing websites, remote engineering squads, and enterprise delivery from discovery through launch.',
    to: '/services',
  },
] as const

export function HomeDiscoverLinks() {
  return (
    <AnimatedHomeSection
      id="discover-moonsofts"
      className="scroll-mt-[100px] border-t border-ink-900/10 bg-paper-50 py-[40px]"
      aria-label="Explore MoonSofts programs and services"
    >
      <RevealItem>
        <p className="section-label">Explore</p>
        <h2 className="home-section-title !mt-[8px]">
          Free football player websites, footballstar highlights, and software consulting
        </h2>
        <p className="mt-[12px] max-w-3xl text-sm leading-relaxed text-ink-600 sm:text-base">
          MoonSofts helps <strong className="font-semibold text-ink-800">football players</strong> and{' '}
          <strong className="font-semibold text-ink-800">football stars</strong> publish{' '}
          <strong className="font-semibold text-ink-800">highlights</strong> and{' '}
          <strong className="font-semibold text-ink-800">match clips</strong> on a professional{' '}
          <strong className="font-semibold text-ink-800">custom website</strong> ahead of the{' '}
          <strong className="font-semibold text-ink-800">2026 World Cup</strong>—including a{' '}
          <strong className="font-semibold text-ink-800">free</strong> program for selected applicants.
        </p>
      </RevealItem>

      <ul className="mt-[28px] grid gap-[16px] sm:grid-cols-3">
        {links.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="home-card-soft group flex h-full flex-col p-[22px] transition hover:border-brand/30"
            >
              <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand">{item.title}</h3>
              <p className="mt-[10px] flex-1 text-sm leading-relaxed text-ink-600">{item.body}</p>
              <span className="mt-[16px] inline-flex items-center gap-[6px] text-xs font-semibold text-brand">
                Learn more
                <ArrowRight className="h-3 w-3 transition group-hover:translate-x-[3px]" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </AnimatedHomeSection>
  )
}

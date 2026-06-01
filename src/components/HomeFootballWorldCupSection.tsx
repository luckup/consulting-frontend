import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { MediaImage } from '@/components/MediaImage'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { FOOTBALL_INITIATIVE_PATH } from '@/lib/seoFootballKeywords'
import { siteImages } from '@/lib/siteImages'

const highlights = [
  {
    title: 'Free for selected projects',
    body: 'Professional football websites built at no cost for chosen football stars, players, creators, clubs, and fan communities ahead of World Cup 2026.',
  },
  {
    title: 'Showcase your highlights',
    body: 'Publish highlight reels, match clips, training updates, and photo galleries so scouts, sponsors, and fans can follow your season.',
  },
  {
    title: 'Built for football stars & fans',
    body: 'Player profiles, fan community pages, blogs, events, and contact forms—mobile-friendly with basic SEO for discoverability.',
  },
] as const

export function HomeFootballWorldCupSection() {
  return (
    <AnimatedHomeSection
      id="world-cup-2026-free-websites"
      className="scroll-mt-[100px] border-t border-ink-900/10 bg-gradient-to-b from-brand/8 via-paper-50 to-paper-50"
    >
      <RevealItem>
        <div className="overflow-hidden rounded-[4px] border border-ink-900/10 shadow-soft">
          <MediaImage
            src={siteImages.news.worldCup2026}
            alt="2026 World Cup initiative — free website development for football stars, highlights, and fan communities"
            className="min-h-[200px] sm:min-h-[280px]"
            overlay="subtle"
          />
        </div>
      </RevealItem>

      <RevealItem>
        <p className="section-label mt-[40px]">2026 World Cup initiative</p>
        <h2 className="home-section-title !mt-[8px]">
          Free website for football players, highlights, and 2026 World Cup fan communities
        </h2>
        <p className="mt-[16px] max-w-3xl text-base leading-relaxed text-ink-600 sm:text-lg">
          MoonSofts is offering a <strong className="font-semibold text-ink-800">free website</strong> for selected{' '}
          <strong className="font-semibold text-ink-800">football players</strong>, rising stars, creators, local clubs,
          and fan communities preparing for the <strong className="font-semibold text-ink-800">2026 World Cup</strong>.
          Share your story, publish <strong className="font-semibold text-ink-800">highlights</strong>, and grow your
          audience on a professional site built by our engineering team.
        </p>
        <div className="mt-[24px] flex flex-wrap gap-[12px]">
          <Link to={FOOTBALL_INITIATIVE_PATH} className="btn btn-primary inline-flex items-center gap-[8px]">
            Read the full announcement
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="btn border border-ink-900/15 bg-paper-50 text-ink-900 hover:border-brand hover:text-brand"
          >
            Apply for a free website
          </Link>
        </div>
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[16px] sm:grid-cols-3">
        {highlights.map((item) => (
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

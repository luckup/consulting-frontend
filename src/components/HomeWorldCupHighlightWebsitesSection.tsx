import { Link } from 'react-router-dom'
import { ArrowRight, Clapperboard, Globe, Layout, Smartphone, Users, Video } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { MediaImage } from '@/components/MediaImage'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { ScheduleConsultationButton } from '@/components/NavMenuLink'
import { FOOTBALL_INITIATIVE_PATH } from '@/lib/seoFootballKeywords'
import { siteImages } from '@/lib/siteImages'

const customerSiteFeatures = [
  {
    icon: Video,
    title: 'Highlight reels & match clips',
    body: 'Dedicated pages and galleries for your best goals, saves, and moments—organized by match, season, or tournament so fans and scouts find them fast.',
  },
  {
    icon: Users,
    title: 'Built around your story',
    body: 'Every site is tailored to you: player biography, club history, fan community hub, or creator channel—not a generic template with your logo pasted on top.',
  },
  {
    icon: Clapperboard,
    title: 'World Cup 2026 ready',
    body: 'Publish pre-tournament updates, live match notes, post-game highlights, and event schedules as the 2026 FIFA World Cup approaches and unfolds.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first for global fans',
    body: 'Responsive layouts so supporters worldwide can watch highlights, read news, and follow your journey on any device.',
  },
  {
    icon: Layout,
    title: 'News, stats & schedules',
    body: 'Football blog posts, upcoming fixtures, training notes, and sponsor or contact pages—structured so your content stays easy to update.',
  },
  {
    icon: Globe,
    title: 'SEO for discoverability',
    body: 'Basic search setup so searches for your name, club, highlights, and World Cup content can surface your official site—not outdated social links alone.',
  },
] as const

const buildSteps = [
  {
    step: '01',
    title: 'Understand your goals',
    detail: 'We learn who you are reaching—fans, sponsors, scouts, or a local community—and what highlights and updates matter most before kickoff.',
  },
  {
    step: '02',
    title: 'Design your experience',
    detail: 'Wireframes and visual direction aligned to your brand, colors, and media—so the site feels like you, not a stock sports theme.',
  },
  {
    step: '03',
    title: 'Build & launch',
    detail: 'Our engineers deliver a fast, secure site with galleries, video embeds, and forms you can manage—then we support you through launch and early updates.',
  },
] as const

export function HomeWorldCupHighlightWebsitesSection() {
  return (
    <AnimatedHomeSection
      id="world-cup-highlight-websites"
      className="scroll-mt-[100px] border-t border-ink-900/10 bg-paper-100"
    >
      <div className="grid gap-[48px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-[64px]">
        <RevealItem className="h-full min-h-[280px] sm:min-h-[360px]">
          <MediaImage
            src={siteImages.worldCup.highlightsCustomer}
            alt="2026 World Cup — custom football website for highlights, built for each customer by MoonSofts"
            className="h-full min-h-[280px] sm:min-h-[360px]"
            overlay="none"
            transparentBg
          />
        </RevealItem>

        <RevealItem>
          <p className="section-label">Custom websites</p>
          <h2 className="home-section-title !mt-[8px]">
            Football player websites built for your 2026 World Cup highlights
          </h2>
          <p className="mt-[16px] text-base leading-relaxed text-ink-600 sm:text-lg">
            MoonSofts designs and develops <strong className="font-semibold text-ink-800">custom websites</strong> for{' '}
            <strong className="font-semibold text-ink-800">football players</strong>, creators, clubs, and fan
            communities who need a professional home for <strong className="font-semibold text-ink-800">highlight</strong>{' '}
            reels, match clips, and <strong className="font-semibold text-ink-800">World Cup 2026</strong> updates. Tell
            us your story; we shape layout, galleries, and media sections to match how you play, publish, and connect
            with fans.
          </p>
          <p className="mt-[16px] text-base leading-relaxed text-ink-600 sm:text-lg">
            Selected early partners may qualify for our{' '}
            <Link to={FOOTBALL_INITIATIVE_PATH} className="font-semibold text-brand hover:text-brand-600">
              free World Cup website program
            </Link>
            . Everyone else receives the same engineering quality through a scoped engagement—clear timeline, honest
            deliverables, and a site you own after launch.
          </p>
          <div className="mt-[24px] flex flex-wrap gap-[12px]">
            <Link to="/contact" className="btn btn-primary inline-flex items-center gap-[8px]">
              Discuss your highlight website
              <ArrowRight className="h-4 w-4" />
            </Link>
            <ScheduleConsultationButton
              variant="secondary"
              showIcon
              label="Schedule a meeting"
              className="border border-ink-900/15 bg-paper-50 text-ink-900 hover:border-brand hover:text-brand"
            />
          </div>
        </RevealItem>
      </div>

      <RevealStagger className="mt-[56px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {customerSiteFeatures.map((item) => {
          const Icon = item.icon
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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">How we work with you</p>
          <h3 className="mt-[10px] text-lg font-semibold text-ink-900 sm:text-xl">
            From your highlight library to a live site fans can trust
          </h3>
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

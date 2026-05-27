import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { AnimatedHomeSection } from '@/components/AnimatedHomeSection'
import { MediaImage } from '@/components/MediaImage'
import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { contactInfo } from '@/lib/contactInfo'
import { externalLinkProps } from '@/lib/navLinks'
import { siteImages } from '@/lib/siteImages'

export function HomeCeoVisionSection() {
  return (
    <AnimatedHomeSection id="ceo-vision" className="scroll-mt-[100px]">
      <RevealItem>
        <div className="flex flex-wrap items-end justify-between gap-[16px]">
          <div className="max-w-2xl">
            <p className="section-label">Leadership</p>
            <h2 className="home-section-title !mt-[8px]">A word from our CEO on MoonSofts&apos; first chapter</h2>
            <p className="mt-[12px] text-base leading-relaxed text-ink-600 sm:text-lg">
              Thomas Jennings (Tomas) shares how we are earning trust with first customers — MVPs, websites, and serious
              delivery for founders and operators with real ideas.
            </p>
          </div>
          <a
            href={contactInfo.calendlyUrl}
            {...externalLinkProps}
            className="inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
          >
            {contactInfo.calendlyLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </RevealItem>

      <RevealStagger className="mt-[40px] grid gap-[32px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
        <RevealStaggerItem>
          <div className="card-soft flex h-full flex-col overflow-hidden border border-brand/25 bg-gradient-to-br from-brand/12 via-paper-100 to-paper-100 p-[28px] shadow-soft sm:p-[36px]">
            <Quote className="h-[36px] w-[36px] shrink-0 text-brand" aria-hidden />
            <blockquote className="mt-[20px] flex-1">
              <p className="text-lg font-medium leading-relaxed text-ink-900 sm:text-xl">
                MoonSofts is in its first stage for a reason: we want to prove what we can ship before we ask the market
                to bet on us. For selected early partners, that means helping you turn a credible idea into a real MVP
                or customer-facing website — something you can demo, sell against, and learn from — with senior
                engineers in the loop from day one.
              </p>
              <p className="mt-[20px] text-base leading-relaxed text-ink-600 sm:text-lg">
                If you are a business leader or founder with a strong concept but limited runway, we want to hear it. We
                pair crisp scope with honest timelines, then build with the same rigor we will bring to enterprise
                programs: security-minded defaults, observable systems, and documentation your team can own after
                launch.
              </p>
              <p className="mt-[20px] text-base leading-relaxed text-ink-600 sm:text-lg">
                This chapter is not about volume — it is about trust. Ship something excellent. Earn the next engagement.
                Grow with the customers who saw the quality of the first release.
              </p>
            </blockquote>
            <footer className="mt-[28px] border-t border-ink-900/10 pt-[24px]">
              <p className="text-sm font-semibold text-ink-900">Thomas Jennings</p>
              <p className="mt-[4px] text-xs font-semibold uppercase tracking-[0.14em] text-brand">Chief Executive Officer</p>
              <Link
                to="/about"
                className="mt-[16px] inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
              >
                Read our story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </footer>
          </div>
        </RevealStaggerItem>
        <RevealStaggerItem>
          <div className="flex h-full flex-col overflow-hidden rounded-[4px] border border-ink-900/10 bg-paper-100 shadow-soft">
            <div className="flex min-h-[300px] flex-1 items-center justify-center bg-paper-100 p-[16px] sm:min-h-[360px] sm:p-[20px]">
              <MediaImage
                src={siteImages.team.thomasJennings}
                alt="Thomas Jennings, Chief Executive Officer of MoonSofts"
                className="h-full max-h-[440px] w-full"
                imageClassName="object-contain object-center"
                overlay="none"
              />
            </div>
            <div className="shrink-0 border-t border-ink-900/10 bg-paper-50 p-[24px] sm:p-[28px]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">First-stage focus</p>
              <ul className="mt-[12px] space-y-[10px] text-sm leading-relaxed text-ink-700">
                <li>MVPs and marketing websites for early customers with a clear problem and serious intent</li>
                <li>Remote squads aligned to your rituals — async updates, demo cadence, and transparent risk flags</li>
                <li>Path from first release to retained delivery when you are ready to scale the product</li>
              </ul>
            </div>
          </div>
        </RevealStaggerItem>
      </RevealStagger>
    </AnimatedHomeSection>
  )
}

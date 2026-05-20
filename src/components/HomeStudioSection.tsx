import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { RevealItem, RevealStagger, RevealStaggerItem, SectionReveal } from '@/components/SectionReveal'
import { studioFeatures } from '@/lib/homeContent'
import { siteImages } from '@/lib/siteImages'

const studioBackground = (
  <div className="pointer-events-none absolute inset-0" aria-hidden>
    <img
      src={siteImages.home.careersBackground}
      alt=""
      className="careers-section-bg h-full w-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-paper-50/35 via-paper-50/15 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-paper-50/25 via-transparent to-transparent" />
    <div className="careers-section-shimmer absolute inset-0 opacity-25" />
  </div>
)

export function HomeStudioSection() {
  return (
    <SectionReveal
      className="home-section relative overflow-hidden"
      innerClassName="home-section-inner relative z-10 grid gap-[40px] lg:grid-cols-2 lg:items-center lg:gap-[64px]"
      stagger
      accent
      prepend={studioBackground}
    >
        <RevealItem>
          <div className="max-w-xl rounded-[4px] border border-transparent bg-paper-50/40 p-[28px] shadow-sm backdrop-blur-[2px] sm:p-[32px]">
            <p className="section-label">MoonSofts delivery studio</p>
            <h2 className="home-section-title">Engineering accelerator ecosystem for enterprises</h2>
            <p className="mt-[20px] text-base leading-relaxed text-ink-600">
              Envision new possibilities with a delivery operating system—security rituals, integration patterns, and
              accountable squads that move from discovery to production with discipline.
            </p>
            <Link to="/stack" className="btn btn-primary mt-[28px]">
              Explore our platform
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealItem>
        <RevealStagger className="grid gap-[12px] rounded-[4px] border border-transparent bg-paper-50/40 p-[24px] shadow-sm backdrop-blur-[2px] sm:grid-cols-2 sm:p-[28px]">
          {studioFeatures.map((feature) => (
            <RevealStaggerItem key={feature}>
              <div className="flex gap-[12px] text-sm leading-relaxed text-ink-600">
                <CheckCircle2 className="mt-[2px] h-[18px] w-[18px] shrink-0 text-brand" aria-hidden />
                {feature}
              </div>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
    </SectionReveal>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { websiteOfferings } from '@/lib/servicesData'
import type { WebsiteOffering } from '@/lib/servicesData'
import { siteImages } from '@/lib/siteImages'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import {
  EASE_OUT,
  SERVICE_CARD_VIEWPORT,
  serviceOfferingCardReveal,
  serviceOfferingContentReveal,
  serviceOfferingImageReveal,
} from '@/lib/motionPresets'

const offeringImages = siteImages.services.websiteOfferings

function offeringImage(id: keyof typeof offeringImages) {
  return offeringImages[id] ?? siteImages.home.whatWeDo
}

type ServiceOfferingCardProps = {
  offering: WebsiteOffering
  index: number
  animated: boolean
}

function ServiceOfferingCard({ offering, index, animated }: ServiceOfferingCardProps) {
  const imageRight = index % 2 === 1
  const phase = String(index + 1).padStart(2, '0')
  const priorityImage = index === 0

  const imageBlock = (
    <motion.div
      className="relative min-h-[240px] overflow-hidden bg-paper-100 md:min-h-[300px] lg:min-h-[320px]"
      variants={animated ? serviceOfferingImageReveal : undefined}
    >
      <motion.img
        src={offeringImage(offering.id as keyof typeof offeringImages)}
        alt={offering.title}
        loading={priorityImage ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priorityImage ? 'high' : 'auto'}
        className="absolute inset-0 h-full w-full object-cover"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper-50/50 via-paper-50/10 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper-50/25 via-transparent to-transparent md:from-paper-50/15"
        aria-hidden
      />
      <span className="absolute left-[16px] top-[16px] z-[1] rounded-[4px] border border-[white]/20 bg-[white]/10 px-[10px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[white] backdrop-blur-md">
        Website
      </span>
    </motion.div>
  )

  const contentBlock = (
    <motion.div
      className={`relative flex flex-col justify-center border-t border-ink-900/[0.06] bg-gradient-to-br from-paper-50 via-paper-50 to-paper-100/80 p-[28px] sm:p-[36px] md:border-t-0 md:border-ink-900/[0.06] ${
        imageRight ? 'md:border-r' : 'md:border-l'
      }`}
      variants={animated ? serviceOfferingContentReveal : undefined}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 z-[1] h-[3px] w-0 bg-brand transition-[width] duration-[450ms] ease-out group-hover:w-full md:left-[36px] md:right-[36px]"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-[16px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">Solution {phase}</p>
        <span
          className="shrink-0 font-mono text-[11px] font-medium tabular-nums text-ink-900/25"
          aria-hidden
        >
          {phase}
        </span>
      </div>

      <h3 className="mt-[14px] text-xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-2xl">
        {offering.title}
      </h3>

      <p className="mt-[12px] inline-flex max-w-fit rounded-[4px] border border-brand/15 bg-brand/[0.06] px-[12px] py-[6px] text-xs font-medium leading-relaxed text-brand sm:text-sm">
        {offering.audience}
      </p>

      <p className="mt-[18px] text-sm leading-relaxed text-ink-600 sm:text-base">{offering.body}</p>

      <ul className="mt-[22px] space-y-[10px]">
        {offering.highlights.map((item) => (
          <li key={item} className="flex gap-[12px] text-sm text-ink-700">
            <span
              className="mt-[2px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[4px] border border-brand/20 bg-brand/[0.08] text-brand"
              aria-hidden
            >
              <Check className="h-3 w-3 stroke-[2.5]" />
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )

  const grid = (
    <div
      className={`grid md:grid-cols-2 ${imageRight ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
    >
      {imageBlock}
      {contentBlock}
    </div>
  )

  const className =
    'service-offering-card group scroll-mt-[120px] overflow-hidden rounded-[6px] border border-ink-900/[0.08] bg-paper-50 shadow-[0_4px_28px_rgba(0,0,0,0.35)]'

  if (!animated) {
    return (
      <article id={offering.id} className={className}>
        <div
          className={`grid md:grid-cols-2 ${imageRight ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
        >
          <div className="relative min-h-[240px] overflow-hidden bg-paper-100 md:min-h-[300px] lg:min-h-[320px]">
            <img
              src={offeringImage(offering.id as keyof typeof offeringImages)}
              alt={offering.title}
              loading={priorityImage ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priorityImage ? 'high' : 'auto'}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper-50/50 via-paper-50/10 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper-50/25 via-transparent to-transparent md:from-paper-50/15"
              aria-hidden
            />
            <span className="absolute left-[16px] top-[16px] rounded-[4px] border border-[white]/20 bg-[white]/10 px-[10px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[white] backdrop-blur-md">
              Website
            </span>
          </div>
          <div
            className={`relative flex flex-col justify-center border-t border-ink-900/[0.06] bg-gradient-to-br from-paper-50 via-paper-50 to-paper-100/80 p-[28px] sm:p-[36px] md:border-t-0 md:border-ink-900/[0.06] ${
              imageRight ? 'md:border-r' : 'md:border-l'
            }`}
          >
            <div className="flex items-start justify-between gap-[16px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">Solution {phase}</p>
              <span className="shrink-0 font-mono text-[11px] font-medium tabular-nums text-ink-900/25" aria-hidden>
                {phase}
              </span>
            </div>
            <h3 className="mt-[14px] text-xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-2xl">
              {offering.title}
            </h3>
            <p className="mt-[12px] inline-flex max-w-fit rounded-[4px] border border-brand/15 bg-brand/[0.06] px-[12px] py-[6px] text-xs font-medium leading-relaxed text-brand sm:text-sm">
              {offering.audience}
            </p>
            <p className="mt-[18px] text-sm leading-relaxed text-ink-600 sm:text-base">{offering.body}</p>
            <ul className="mt-[22px] space-y-[10px]">
              {offering.highlights.map((item) => (
                <li key={item} className="flex gap-[12px] text-sm text-ink-700">
                  <span
                    className="mt-[2px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[4px] border border-brand/20 bg-brand/[0.08] text-brand"
                    aria-hidden
                  >
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    )
  }

  return (
    <motion.article
      id={offering.id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={SERVICE_CARD_VIEWPORT}
      variants={serviceOfferingCardReveal(index)}
    >
      {grid}
    </motion.article>
  )
}

function ServiceOfferingCta({ animated }: { animated: boolean }) {
  const inner = (
    <>
      <div
        className="pointer-events-none absolute -right-[80px] -top-[80px] h-[200px] w-[200px] rounded-full bg-brand/[0.06] blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">Custom scope</p>
        <h3 className="mt-[10px] text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
          Not sure which fit?
        </h3>
        <p className="mt-[14px] max-w-2xl text-sm leading-relaxed text-ink-600 sm:text-base">
          Share your audience, timeline, and must-have features—we will recommend the right website type and delivery
          plan.
        </p>
        <Link
          to="/contact#contact-form"
          className="btn btn-primary mt-[28px] w-full justify-center sm:w-auto"
        >
          Discuss your website
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[4px]" />
        </Link>
      </div>
    </>
  )

  const className =
    'service-offering-cta group relative overflow-hidden rounded-[6px] border border-ink-900/[0.08] bg-gradient-to-br from-paper-50 via-paper-50 to-brand/[0.04] p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:p-[40px]'

  if (!animated) {
    return <article className={className}>{inner}</article>
  }

  return (
    <motion.article
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={SERVICE_CARD_VIEWPORT}
      variants={serviceOfferingCardReveal(0)}
    >
      {inner}
    </motion.article>
  )
}

export function ServiceWebsiteOfferings() {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="flex flex-col gap-[28px]">
      {websiteOfferings.map((offering, index) => (
        <ServiceOfferingCard key={offering.id} offering={offering} index={index} animated={!reduced} />
      ))}
      <ServiceOfferingCta animated={!reduced} />
    </div>
  )
}

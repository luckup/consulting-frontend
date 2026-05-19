import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type Props = {
  title: string
  description: string
  label: string
  image: string
  cta: { to: string; label: string }
  reverse?: boolean
}

const EASE = [0.22, 1, 0.36, 1] as const

export function HomeServiceCard({ title, description, label, image, cta, reverse = false }: Props) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -8% 0px' })
  const reducedMotion = useReducedMotion()

  const imageOffset = reverse ? 48 : -48

  return (
    <motion.article
      ref={ref}
      className="card group grid overflow-hidden lg:grid-cols-2"
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      animate={reducedMotion ? undefined : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileHover={
        reducedMotion ? undefined : { y: -8, transition: { duration: 0.38, ease: EASE } }
      }
      transition={{ duration: 0.65, ease: EASE }}
    >
      <motion.div
        className={`relative h-[260px] w-full shrink-0 overflow-hidden bg-paper-100 sm:h-[300px] lg:h-[320px] ${reverse ? 'lg:order-2' : ''}`}
        initial={reducedMotion ? false : { opacity: 0, x: imageOffset }}
        animate={reducedMotion ? undefined : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageOffset }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center photo-bright"
          initial={reducedMotion ? false : { scale: 1.14 }}
          animate={reducedMotion ? undefined : isInView ? { scale: 1 } : { scale: 1.14 }}
          whileHover={reducedMotion ? undefined : { scale: 1.07 }}
          transition={{ duration: 1.1, ease: EASE, delay: reducedMotion ? 0 : 0.1 }}
        />

        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/25 via-transparent to-paper-50/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <div className="card-image-shine pointer-events-none absolute inset-0" aria-hidden />

        <motion.p
          className="absolute bottom-[16px] left-[16px] z-10 rounded-[4px] bg-paper-50/95 px-[12px] py-[6px] text-xs font-semibold uppercase tracking-[0.16em] text-brand shadow-sm backdrop-blur-[2px]"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={reducedMotion ? undefined : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
        >
          {label}
        </motion.p>
      </motion.div>

      <motion.div
        className={`flex flex-col justify-center border-t border-ink-900/10 p-[32px] sm:p-[40px] lg:border-t-0 ${reverse ? 'lg:order-1 lg:border-r lg:border-ink-900/10' : ''}`}
        initial={reducedMotion ? false : { opacity: 0, x: reverse ? -24 : 24 }}
        animate={reducedMotion ? undefined : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -24 : 24 }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
      >
        <h3 className="text-xl font-semibold leading-snug text-ink-900 sm:text-2xl">{title}</h3>
        <p className="mt-[16px] text-base leading-relaxed text-ink-600">{description}</p>
        <Link
          to={cta.to}
          className="mt-[24px] inline-flex items-center gap-[8px] text-sm font-semibold text-brand transition-colors duration-300 hover:text-brand-600"
        >
          {cta.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[4px]" aria-hidden />
        </Link>
      </motion.div>
    </motion.article>
  )
}

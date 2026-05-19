import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

type Props = {
  date: string
  category: string
  image: string
  title: string
  excerpt: string
  to: string
  index: number
}

export function HomeNewsCard({ date, category, image, title, excerpt, to, index }: Props) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      className="card group flex flex-col overflow-hidden"
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={reducedMotion ? undefined : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileHover={
        reducedMotion ? undefined : { y: -8, transition: { duration: 0.38, ease: EASE } }
      }
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.1 }}
    >
      <div className="relative h-[180px] overflow-hidden bg-paper-100">
        <motion.img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center"
          initial={reducedMotion ? false : { scale: 1.22 }}
          animate={
            reducedMotion
              ? undefined
              : isInView
                ? { scale: 1 }
                : { scale: 1.22 }
          }
          whileHover={reducedMotion ? undefined : { scale: 0.96 }}
          transition={{ duration: 1.05, ease: EASE, delay: index * 0.1 + 0.05 }}
        />
      </div>
      <div className="flex flex-1 flex-col p-[24px]">
        <p className="text-xs text-ink-500">
          {date} · {category}
        </p>
        <h3 className="mt-[12px] text-base font-semibold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand">
          {title}
        </h3>
        <p className="mt-[8px] flex-1 text-sm leading-relaxed text-ink-600">{excerpt}</p>
        <Link
          to={to}
          className="mt-[16px] text-sm font-semibold text-brand transition-colors duration-300 hover:text-brand-600"
        >
          Read article
        </Link>
      </div>
    </motion.article>
  )
}

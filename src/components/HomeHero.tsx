import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { BarChart3, Cloud, Code2, Globe2, Truck } from 'lucide-react'
import { siteImages } from '@/lib/siteImages'
import { HeroPillarAvatar } from '@/components/HeroPillarAvatar'

const pillars = [
  { icon: Globe2, title: 'Global teams', description: 'International delivery' },
  { icon: Code2, title: 'Engineering', description: 'Full-stack & AI' },
  { icon: Cloud, title: 'Cloud & data', description: 'Infrastructure & DB' },
  { icon: BarChart3, title: 'E-commerce', description: 'Digital commerce' },
  { icon: Truck, title: 'Logistics', description: 'Supply chain software' },
]

const CENTER_INDEX = 2
const SPREAD_X = 60

const panelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.2 },
  },
}

function createPillarVariants(reducedMotion: boolean): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1, scale: 1, x: 0 },
      visible: { opacity: 1, scale: 1, x: 0 },
    }
  }

  return {
    hidden: (index: number) => ({
      opacity: 0,
      scale: 0,
      x: (CENTER_INDEX - index) * SPREAD_X,
    }),
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 280,
        damping: 20,
        delay: Math.abs(index - CENTER_INDEX) * 0.05,
      },
    }),
  }
}

export function HomeHero() {
  const reducedMotion = useReducedMotion()
  const pillarVariants = createPillarVariants(!!reducedMotion)

  return (
    <section className="border-b border-ink-900/10 bg-paper-50">
      <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[540px]">
        <img
          src={siteImages.hero.homeBanner}
          alt="MoonSofts global software engineering team"
          className="h-full w-full object-cover object-[center_25%] photo-bright"
        />
        <motion.div className="hero-image-fade absolute inset-0" aria-hidden />
      </div>

      <motion.div className="container-pad relative z-10 mt-[24px] pb-[48px] pt-[8px] sm:mt-[32px] sm:pb-[56px] lg:mt-[40px] lg:pb-[64px]">
        <motion.div className="flex flex-col gap-[40px] lg:flex-row lg:items-center lg:justify-between lg:gap-[32px] xl:gap-[48px]">
          <motion.div className="max-w-3xl shrink-0 lg:min-w-0">
            <p className="section-label">MoonSofts · Global software delivery</p>
            <h1 className="mt-[12px] text-4xl font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Enterprise software,
              <br />
              delivered with precision.
            </h1>
            <p className="mt-[16px] max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              International engineering teams, full-stack development, and industry platforms—for organizations that
              require reliability, security, and measurable outcomes.
            </p>
            <motion.div className="mt-[28px] flex flex-wrap items-center gap-[12px]">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-[28px] py-[14px] text-base font-semibold text-[white] shadow-sm transition hover:bg-brand-600"
              >
                Speak with our team
              </Link>
              <Link
                to="/stack"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand bg-transparent px-[28px] py-[14px] text-base font-semibold text-brand transition hover:bg-brand-light"
              >
                View capabilities
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative grid w-full min-w-0 grid-cols-5 gap-[8px] sm:gap-[12px] lg:flex-1 lg:gap-[16px]"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            aria-label="Core service pillars"
          >
            {pillars.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                custom={index}
                variants={pillarVariants}
                className="flex min-w-0 flex-col items-center text-center"
                style={{ transformOrigin: 'center center' }}
              >
                <HeroPillarAvatar index={index} reducedMotion={!!reducedMotion}>
                  <Icon className="h-7 w-7 text-brand transition-colors duration-300 group-hover:text-brand-600 sm:h-8 sm:w-8" strokeWidth={1.75} />
                </HeroPillarAvatar>
                <motion.p
                  initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.35 + index * 0.08, ease: 'easeOut' }}
                  className="mt-[12px] text-sm font-bold text-brand sm:text-base"
                >
                  {title}
                </motion.p>
                <motion.p
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.42 + index * 0.08, ease: 'easeOut' }}
                  className="mt-[6px] text-xs leading-snug text-ink-500 sm:text-sm"
                >
                  {description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  index: number
  reducedMotion: boolean
  children: ReactNode
}

export function HeroPillarAvatar({ index, reducedMotion, children }: Props) {
  const pulseDelay = `${1.2 + index * 0.4}s`
  const burstDelay = 0.25 + index * 0.08

  return (
    <motion.div
      className="group relative flex h-[56px] w-[56px] shrink-0 items-center justify-center sm:h-[64px] sm:w-[64px]"
      whileHover={reducedMotion ? undefined : { scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
    >
      {!reducedMotion ? (
        <>
          <div
            className="pointer-events-none absolute inset-[-6px] rounded-full bg-brand/15 blur-[8px] avatar-glow"
            style={{ animationDelay: pulseDelay }}
            aria-hidden
          />

          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-brand/40"
            style={{ transformOrigin: 'center center' }}
            initial={{ scale: 0.4, opacity: 0.6 }}
            animate={{ scale: 1.55, opacity: 0 }}
            transition={{
              duration: 0.85,
              delay: burstDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden
          />

          <span
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-brand/35 avatar-pulse-ring"
            style={{ animationDelay: pulseDelay }}
            aria-hidden
          />
        </>
      ) : null}

      <motion.div
        className="relative z-10 flex h-full w-full items-center justify-center rounded-full border-2 border-brand bg-paper-50 shadow-[0_0_0_0_rgba(0,122,138,0)] transition-[box-shadow,border-color] duration-300 group-hover:border-brand-600 group-hover:shadow-[0_0_16px_rgba(0,122,138,0.22)]"
        aria-hidden
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

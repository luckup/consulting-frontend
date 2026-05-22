export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const REVEAL_VIEWPORT = {
  once: true,
  amount: 0.12,
  margin: '-6% 0px -4% 0px',
} as const

export const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.99,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.38,
      ease: EASE_OUT,
      when: 'beforeChildren',
    },
  },
} as const

export const accentLineReveal = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.28, ease: EASE_OUT, delay: 0.04 },
  },
} as const

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.03,
    },
  },
} as const

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.995,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
} as const

export const heroContentReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
      staggerChildren: 0.045,
      delayChildren: 0.06,
    },
  },
} as const

export const heroItemReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: EASE_OUT },
  },
} as const

/** Each service card triggers its own reveal when it enters the viewport. */
export const SERVICE_CARD_VIEWPORT = {
  once: true,
  amount: 0.12,
  margin: '120px 0px -12% 0px',
} as const

export function serviceOfferingCardReveal(index: number) {
  const fromLeft = index % 2 === 0
  return {
    hidden: {
      opacity: 0,
      y: 18,
      x: fromLeft ? -24 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.48,
        ease: EASE_OUT,
        staggerChildren: 0.08,
        delayChildren: 0.06,
      },
    },
  } as const
}

export const serviceOfferingImageReveal = {
  hidden: {
    scale: 0.94,
    opacity: 0.9,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.62,
      ease: EASE_OUT,
    },
  },
} as const

export const serviceOfferingContentReveal = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: EASE_OUT,
    },
  },
} as const

export const faqItemReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: EASE_OUT },
  },
} as const

export const faqPanelTransition = {
  duration: 0.38,
  ease: EASE_OUT,
} as const


import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import { SectionReveal } from '@/components/SectionReveal'

type Props = {
  id?: string
  className?: string
  innerClassName?: string
  children: ReactNode
}

export function AnimatedHomeSection({ id, className, innerClassName, children }: Props) {
  return (
    <SectionReveal
      id={id}
      className={clsx('home-section', className)}
      innerClassName={clsx('home-section-inner', innerClassName)}
      stagger
      accent
    >
      {children}
    </SectionReveal>
  )
}

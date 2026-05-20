import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import {
  REVEAL_VIEWPORT,
  accentLineReveal,
  sectionReveal,
  staggerContainer,
  staggerItem,
} from '@/lib/motionPresets'

type SectionRevealProps = {
  id?: string
  className?: string
  innerClassName?: string
  children: ReactNode
  as?: 'section' | 'div'
  accent?: boolean
  /** Children should be RevealItem and/or RevealStagger as direct descendants. */
  stagger?: boolean
  prepend?: ReactNode
}

export function SectionReveal({
  id,
  className,
  innerClassName,
  children,
  as = 'section',
  accent = false,
  stagger = false,
  prepend,
}: SectionRevealProps) {
  const reduced = usePrefersReducedMotion()
  const Tag = as

  if (reduced) {
    return (
      <Tag id={id} className={className}>
        {prepend}
        {innerClassName ? <div className={innerClassName}>{children}</div> : children}
      </Tag>
    )
  }

  const MotionTag = as === 'section' ? motion.section : motion.div
  const accentLine = accent ? (
    <motion.div variants={accentLineReveal} className="section-reveal-accent" aria-hidden />
  ) : null

  const body = stagger ? (
    <motion.div variants={staggerContainer}>
      {accentLine}
      {children}
    </motion.div>
  ) : (
    <>
      {accentLine}
      {children}
    </>
  )

  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={sectionReveal}
    >
      {prepend}
      {innerClassName ? <motion.div className={innerClassName}>{body}</motion.div> : body}
    </MotionTag>
  )
}

type RevealItemProps = {
  children: ReactNode
  className?: string
}

/** Single block inside a staggered section (header, copy column, etc.). */
export function RevealItem({ children, className }: RevealItemProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

type RevealStaggerProps = {
  className?: string
  children: ReactNode
}

/**
 * Stagger container for grids/lists. Must be a direct child of SectionReveal stagger content.
 * Children should be RevealStaggerItem elements.
 */
export function RevealStagger({ className, children }: RevealStaggerProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerContainer}>
      {children}
    </motion.div>
  )
}

type RevealStaggerItemProps = {
  children: ReactNode
  className?: string
}

export function RevealStaggerItem({ children, className }: RevealStaggerItemProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

/** @deprecated Use RevealStagger + RevealStaggerItem */
export const RevealGrid = RevealStagger

/** @deprecated Use RevealStaggerItem */
export const RevealGridItem = RevealStaggerItem

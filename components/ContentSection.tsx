'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

/**
 * Shared content wrapper:
 * - Applies Tailwind Typography (prose) with dark inversion
 * - Handles spacing and max width
 * - Adds a gentle fade+rise on mount (respects prefers-reduced-motion)
 */
export default function ContentSection({ children, className = '' }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={reduceMotion ? {} : { duration: 0.35, ease: 'easeOut' }}
      className={`mt-12 prose prose-invert max-w-none ${className}`}
    >
      {children}
    </motion.section>
  )
}

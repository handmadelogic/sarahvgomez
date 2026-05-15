'use client'

import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

export function FadeIn({ children, className, delay = 0, duration = 0.6, y = 24 }: FadeInProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

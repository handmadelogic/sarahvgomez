'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function RevealText({ text, className, delay = 0, as: Tag = 'span' }: RevealTextProps) {
  const reduced = useReducedMotion()

  const words = text.split(' ')

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.06, delayChildren: delay },
    },
  }

  const word: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

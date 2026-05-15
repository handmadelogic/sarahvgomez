'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  splitBy?: 'word' | 'char'
}

export function RevealText({
  text,
  className,
  delay = 0,
  splitBy = 'word',
}: RevealTextProps) {
  const reduced = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : splitBy === 'char' ? 0.03 : 0.06,
        delayChildren: delay,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : splitBy === 'char' ? 40 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : splitBy === 'char' ? 0.4 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  if (splitBy === 'char') {
    const chars = text.split('')
    return (
      <motion.span
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-label={text}
      >
        {chars.map((char, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span variants={item} className="inline-block">
              {char === ' ' ? ' ' : char}
            </motion.span>
          </span>
        ))}
      </motion.span>
    )
  }

  const words = text.split(' ')
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
          <motion.span variants={item} className="inline-block">
            {w}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

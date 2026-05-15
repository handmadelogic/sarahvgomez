'use client'

import { motion, useReducedMotion } from 'motion/react'

export function ScrollIndicator() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      aria-hidden
    >
      <span className="font-sans text-xs uppercase tracking-widest text-ink-faint">Scroll</span>
      <div className="relative h-10 w-px bg-ink-faint/30 overflow-hidden rounded-full">
        <motion.div
          className="absolute top-0 left-0 w-full bg-accent rounded-full"
          style={{ height: '40%' }}
          animate={reduced ? {} : { y: ['-100%', '250%'] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 0.4,
          }}
        />
      </div>
    </motion.div>
  )
}

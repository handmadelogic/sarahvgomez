'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

interface ProjectCardProps {
  num: string
  title: string
  role: string
  year: string
  description: string
  tags: string[]
  accent: string
  href: string
}

export function ProjectCard({
  num, title, role, year, description, tags, accent, href,
}: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 200, damping: 20 })
  const y = useSpring(rawY, { stiffness: 200, damping: 20 })

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rawX.set((e.clientX - cx) * 0.06)
    rawY.set((e.clientY - cy) * 0.06)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-base transition-shadow duration-500 ease-[var(--ease-out-expo)] hover:shadow-xl md:flex-row"
    >
      {/* Left: text */}
      <div className="relative flex flex-col justify-between gap-6 p-8 md:w-1/2 md:p-12">
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display font-black leading-none"
          style={{ fontSize: 'clamp(6rem, 12vw, 14rem)', color: accent, opacity: 0.08 }}
        >
          {num}
        </span>

        <div className="relative flex items-start justify-between">
          <span className="font-sans text-sm font-semibold uppercase tracking-widest" style={{ color: accent }}>{num}</span>
          <span className="font-sans text-sm text-ink-muted">{year}</span>
        </div>

        <div className="relative flex flex-col gap-3">
          <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h3>
          <p className="max-w-xs font-sans text-sm leading-relaxed text-ink-muted">{description}</p>
          <div className="mt-1 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-ink/8 px-2.5 py-1 font-sans text-xs font-medium text-ink-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <span
          className="relative inline-flex items-center gap-2 font-sans text-sm font-semibold transition-all duration-300 group-hover:gap-3"
          style={{ color: accent }}
        >
          {role} →
        </span>
      </div>

      {/* Accent divider */}
      <div className="hidden w-[3px] flex-shrink-0 self-stretch md:block" style={{ backgroundColor: accent }} />

      {/* Right: image preview */}
      <div className="relative flex items-end justify-center overflow-hidden bg-surface px-8 pt-8 md:w-1/2 md:pt-12">
        <div className="relative w-full max-w-sm overflow-hidden rounded-t-xl bg-base shadow-xl">
          <div className="flex items-center gap-1.5 bg-ink/8 px-3 py-2.5">
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="ml-2 h-2 flex-1 rounded-full bg-ink/8" />
          </div>
          <div
            className="relative flex aspect-[4/3] flex-col items-center justify-center gap-2"
            style={{ backgroundColor: `${accent}18` }}
          >
            <span className="font-display text-5xl text-ink opacity-20">{num}</span>
            <span className="font-sans text-xs text-ink-muted opacity-60">project-{num}.png</span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

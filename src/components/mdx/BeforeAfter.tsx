'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

interface BeforeAfterProps {
  before: string
  after: string
  beforeAlt?: string
  afterAlt?: string
  caption?: string
}

export function BeforeAfter({ before, after, beforeAlt = 'Before', afterAlt = 'After', caption }: BeforeAfterProps) {
  const [position, setPosition] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const move = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  return (
    <figure className="my-12">
      <div
        ref={ref}
        className="relative select-none overflow-hidden rounded-2xl border border-ink/8 shadow-sm"
        style={{ cursor: 'col-resize' }}
        onMouseDown={() => { dragging.current = true }}
        onMouseMove={(e) => { if (dragging.current) move(e.clientX) }}
        onMouseUp={() => { dragging.current = false }}
        onMouseLeave={() => { dragging.current = false }}
        onTouchMove={(e) => move(e.touches[0].clientX)}
      >
        {/* After (base layer) */}
        <Image src={after} alt={afterAlt} width={1600} height={900} className="w-full object-cover" />

        {/* Before (clipped top layer) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <Image src={before} alt={beforeAlt} width={1600} height={900} className="w-full object-cover" style={{ width: `${10000 / position}%`, maxWidth: 'none' }} />
        </div>

        {/* Divider */}
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-base" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-base shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ink">
              <path d="M5 3L1 8L5 13M11 3L15 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 font-sans text-xs font-medium text-base backdrop-blur-sm">Before</span>
        <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 font-sans text-xs font-medium text-base backdrop-blur-sm">After</span>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-sans text-sm text-ink-muted">{caption}</figcaption>
      )}
    </figure>
  )
}

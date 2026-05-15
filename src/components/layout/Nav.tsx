'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-base/90 backdrop-blur-md border-b border-ink/5 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 md:px-10 lg:px-16">

        {/* Wordmark */}
        <a
          href="#"
          className="font-display text-xl text-ink transition-opacity hover:opacity-60"
          aria-label="Sarah Gomez — home"
        >
          sg.
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={cn(
                'font-sans text-sm font-medium text-ink-muted',
                'relative transition-colors duration-200 hover:text-ink',
                'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0',
                'after:bg-accent after:transition-all after:duration-300',
                'hover:after:w-full'
              )}
            >
              {label}
            </a>
          ))}
          <a
            href="/Sarah-Gomez-Resume.pdf"
            className={cn(
              'font-sans text-sm font-semibold text-ink',
              'border border-ink/20 rounded-full px-4 py-1.5',
              'transition-all duration-200 hover:border-accent hover:text-accent'
            )}
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex flex-col gap-1.5 p-1 md:hidden"
        >
          <span className={cn('block h-px w-6 bg-ink transition-all duration-200', menuOpen && 'translate-y-2 rotate-45')} />
          <span className={cn('block h-px w-6 bg-ink transition-all duration-200', menuOpen && 'opacity-0')} />
          <span className={cn('block h-px w-6 bg-ink transition-all duration-200', menuOpen && '-translate-y-2 -rotate-45')} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-[var(--ease-out-expo)] md:hidden',
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav
          className="flex flex-col gap-1 px-6 pb-6 pt-2 bg-base border-t border-ink/5"
          aria-label="Mobile primary"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-lg font-medium text-ink py-2 hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="/Sarah-Gomez-Resume.pdf"
            className="font-sans text-lg font-medium text-ink-muted py-2 hover:text-accent transition-colors"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  )
}

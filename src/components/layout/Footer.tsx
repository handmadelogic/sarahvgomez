import { Container } from '@/components/ui/Container'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sarahvgomez' },
  { label: 'Dribbble', href: 'https://dribbble.com/sarahvgomez' },
  { label: 'GitHub', href: 'https://github.com/handmadelogic' },
]

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-base py-12">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

        <div className="flex flex-col gap-1">
          <span className="font-display text-lg text-ink">Sarah Gomez</span>
          <span className="font-sans text-sm text-ink-muted">
            UX/UI Product Designer
          </span>
        </div>

        <nav className="flex items-center gap-6" aria-label="Social links">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="font-sans text-xs text-ink-faint">
          © {new Date().getFullYear()} — Made with curiosity
        </p>

      </Container>
    </footer>
  )
}

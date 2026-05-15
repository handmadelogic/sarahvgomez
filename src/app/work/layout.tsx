import { Container } from '@/components/ui/Container'

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-50 border-b border-ink/8 bg-base/80 backdrop-blur-md">
        <Container className="flex h-14 items-center">
          <a
            href="/#work"
            className="inline-flex items-center gap-2 font-sans text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to work
          </a>
        </Container>
      </div>
      {children}
    </>
  )
}

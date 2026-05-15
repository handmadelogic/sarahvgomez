import { FadeIn } from '@/components/motion/FadeIn'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function ContactSection() {
  return (
    <section id="contact" className="bg-graph py-32">
      <Container>
        <FadeIn className="flex justify-center">
          <div className="relative w-full max-w-lg rotate-[0.8deg] transition-all duration-500 ease-[var(--ease-out-expo)] hover:rotate-0 hover:scale-[1.01]">

            {/* Pushpin */}
            <div aria-hidden className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                <circle cx="12" cy="10" r="9" fill="#FF4F3B" />
                <circle cx="12" cy="10" r="5" fill="rgba(255,255,255,0.3)" />
                <line x1="12" y1="19" x2="12" y2="32" stroke="#CC3A28" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Torn note */}
            <div className="overflow-hidden rounded-t-sm bg-base shadow-xl">
              <div className="flex flex-col items-center gap-6 px-10 pb-10 pt-12 text-center">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  Contact
                </span>

                <h2 className="font-display text-4xl leading-tight text-ink">
                  Let&apos;s talk.
                </h2>

                <svg aria-hidden width="120" height="12" viewBox="0 0 120 12" fill="none" className="text-case-mint">
                  <path d="M2 6 C16 1, 28 11, 42 6 S70 1, 84 6 S110 11, 118 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>

                <p className="max-w-xs font-sans text-base leading-relaxed text-ink-muted">
                  Got a project in mind or just want to say hi? My inbox is always open.
                </p>

                <Button variant="primary" size="lg">
                  <a href="mailto:hello@sarahgomez.com">Say hello →</a>
                </Button>

                <p className="font-sans text-xs italic text-ink-faint">
                  — or find me on LinkedIn, Dribbble, GitHub
                </p>
              </div>

              {/* Torn bottom edge */}
              <svg
                aria-hidden
                className="block w-full text-base"
                viewBox="0 0 800 24"
                preserveAspectRatio="none"
                style={{ marginTop: '-1px', display: 'block' }}
              >
                <path
                  d="M0 0 L0 12 C40 20, 70 4, 110 14 S180 24, 220 10 S290 0, 340 16 S410 24, 460 8 S530 2, 580 18 S650 24, 700 10 S760 4, 800 14 L800 0 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

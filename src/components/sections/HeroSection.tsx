import { FadeIn } from '@/components/motion/FadeIn'
import { RevealText } from '@/components/motion/RevealText'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section id="hero" className="bg-dot-grid relative flex min-h-screen items-center overflow-hidden pt-24">

      {/* Big decorative background initial */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-0.05em] top-1/2 -translate-y-[52%] select-none font-display font-black leading-none text-ink/[0.06]"
        style={{ fontSize: 'clamp(20rem, 48vw, 64rem)' }}
      >
        S
      </span>

      <Container className="relative z-10">
        <div className="flex max-w-[56rem] flex-col gap-7">

          <FadeIn delay={0.1} className="flex items-center gap-3">
            <span className="select-none text-xl leading-none text-accent" aria-hidden>✦</span>
            <span className="font-sans text-sm font-semibold uppercase tracking-widest text-ink-muted">
              UX/UI Product Designer
            </span>
          </FadeIn>

          <h1 className="font-display text-display leading-[0.95] tracking-tight text-ink">
            <RevealText text="I make" delay={0.2} />
            <br />
            <span className="relative inline-block pb-5">
              <RevealText text="things." delay={0.45} />
              <svg
                aria-hidden
                className="absolute -bottom-1 left-0 w-full text-accent"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C40 2, 80 12, 120 6 S200 2, 240 8 S280 12, 298 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <FadeIn delay={0.65}>
            <p className="max-w-lg font-sans text-xl leading-relaxed text-ink-muted">
              Designer, maker, hobbyist. I bring the same curiosity to pixels
              as I do to woodworking and watercolour.
            </p>
          </FadeIn>

          <FadeIn delay={0.8} className="flex flex-wrap items-center gap-6">
            <Button variant="primary" size="lg">
              <a href="#work">View work</a>
            </Button>
            <Button variant="ghost" size="lg">
              <a href="#about">About me ↓</a>
            </Button>
          </FadeIn>

        </div>

        {/* Floating margin annotation */}
        <FadeIn
          delay={1.1}
          className="absolute bottom-12 right-0 hidden flex-col items-end gap-1 lg:flex"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-ink-faint">Currently available</span>
          <span className="font-display text-sm italic text-ink-muted">for new opportunities</span>
        </FadeIn>

      </Container>
    </section>
  )
}

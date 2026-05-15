import { FadeIn } from '@/components/motion/FadeIn'
import { Container } from '@/components/ui/Container'

const hobbies = [
  { emoji: '🪵', label: 'Woodworking' },
  { emoji: '🧶', label: 'Knitting' },
  { emoji: '🎨', label: 'Watercoloring' },
  { emoji: '📚', label: 'Reading' },
  { emoji: '✦',  label: 'Trying new things' },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-dot-grid py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto] md:gap-16">

          {/* ── Left: text ──────────────────────────────────── */}
          <FadeIn className="flex flex-col gap-8">

            {/* Heading with squiggle underline */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-ink-muted">
                About
              </span>
              <div className="relative inline-block pb-4">
                <h2 className="font-display text-4xl text-ink leading-tight">
                  Nice to meet you.
                </h2>
                <svg
                  aria-hidden
                  className="absolute -bottom-1 left-0 text-case-mint"
                  width="260" height="14"
                  viewBox="0 0 260 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10 C18 3, 35 13, 52 7 S86 1, 104 8 S138 14, 156 7 S190 2, 208 9 S240 13, 258 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Bio — architecture woven in naturally */}
            <div className="flex flex-col gap-4">
              <p className="font-sans text-lg text-ink leading-relaxed">
                I&apos;m Sarah — I&apos;ve been drawn to design my whole life. Growing up
                studying architecture gave me a language for it: how structure and
                space shape the people moving through them. I just swapped blueprints
                for wireframes.
              </p>
              <p className="font-sans text-base text-ink-muted leading-relaxed">
                Architecture studio taught me to defend a decision at 2am, prototype
                before you&apos;re ready, and never mistake aesthetics for solving the
                actual problem. Those instincts follow me into every product I work on.
              </p>
              <p className="font-sans text-base text-ink-muted leading-relaxed">
                Outside the screen I&apos;m usually making something with my hands —
                a dovetail joint, a half-finished scarf, a watercolour that almost
                worked. I collect hobbies the way other people collect houseplants:
                enthusiastically and without regret.
              </p>
            </div>

            {/* Hobbies list with squiggle left-bracket */}
            <div className="relative pl-8">
              <svg
                aria-hidden
                className="absolute left-0 top-0 h-full text-accent"
                width="18" viewBox="0 0 18 120"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M14 2 C8 12, 16 22, 8 32 S2 44, 10 54 S16 66, 6 76 S2 90, 10 102 S14 112, 8 118"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink-muted">
                When I&apos;m not designing
              </p>
              <ul className="flex flex-col gap-2">
                {hobbies.map(({ emoji, label }) => (
                  <li key={label} className="flex items-center gap-3 font-sans text-base text-ink">
                    <span className="text-lg leading-none" aria-hidden>{emoji}</span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability note */}
            <div className="flex items-center gap-3 pt-2">
              <svg
                aria-hidden
                className="shrink-0 text-case-mint"
                width="32" height="16"
                viewBox="0 0 32 16"
                fill="none"
              >
                <path
                  d="M2 8 C6 3, 10 13, 16 8 S26 3, 30 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="font-sans text-sm italic text-ink-muted">
                Currently open to new opportunities
              </span>
            </div>

          </FadeIn>

          {/* ── Right: taped photo ──────────────────────────── */}
          <FadeIn delay={0.35} className="flex justify-center md:justify-end md:pt-10">
            <div className="relative">

              <div className="relative rotate-2 transition-all duration-500 ease-[var(--ease-out-expo)] hover:rotate-0 hover:scale-[1.02]">

                {/* Washi tape — top left */}
                <div
                  className="absolute -top-4 left-6 z-10 h-7 w-20 -rotate-12 rounded-sm"
                  style={{ background: 'rgba(255,209,102,0.70)' }}
                  aria-hidden
                />

                {/* Washi tape — top right */}
                <div
                  className="absolute -top-3 right-8 z-10 h-7 w-16 rotate-6 rounded-sm"
                  style={{ background: 'rgba(6,214,160,0.50)' }}
                  aria-hidden
                />

                {/* Polaroid frame */}
                <div
                  className="flex flex-col bg-base shadow-2xl"
                  style={{ padding: '12px 12px 44px 12px' }}
                >
                  <div className="relative h-80 w-56 overflow-hidden bg-surface">
                    {/* ↓ swap with: <Image src="/images/about/sarah.jpg" alt="Sarah Gomez" fill className="object-cover" /> */}
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-ink-faint/15">
                      <span className="font-display text-4xl text-ink opacity-20">sg.</span>
                      <span className="font-sans text-xs text-ink-muted opacity-50">Your photo here</span>
                      <span className="font-sans text-xs text-ink-faint opacity-40">public/images/about/</span>
                    </div>
                  </div>
                  <p className="mt-2 text-center font-sans text-xs italic text-ink-muted">
                    That&apos;s me! ↑
                  </p>
                </div>

              </div>

              {/* Squiggle below photo */}
              <svg
                aria-hidden
                className="absolute -bottom-6 -right-4 text-accent opacity-60"
                width="80" height="30"
                viewBox="0 0 80 30"
                fill="none"
              >
                <path
                  d="M4 15 C12 5, 20 25, 30 15 S48 5, 58 15 S70 25, 76 15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              {/* ✦ violet accent */}
              <span
                aria-hidden
                className="absolute -left-5 -top-2 text-2xl text-case-violet opacity-70"
              >
                ✦
              </span>

            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  )
}

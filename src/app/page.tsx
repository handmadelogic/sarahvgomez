import { FadeIn } from '@/components/motion/FadeIn'
import { RevealText } from '@/components/motion/RevealText'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AboutSection } from '@/components/sections/AboutSection'

const projects = [
  {
    num: '01',
    title: 'Project one',
    role: 'Product Design',
    year: '2024',
    description: 'Placeholder — your case study description goes here. What problem did you solve and for whom?',
    tags: ['UX Research', 'Mobile', '0→1'],
    color: 'bg-case-yellow',
    textColor: 'text-ink',
    // image: '/images/projects/project-one.png',
  },
  {
    num: '02',
    title: 'Project two',
    role: 'UX/UI Design',
    year: '2024',
    description: 'Placeholder — your case study description goes here. What problem did you solve and for whom?',
    tags: ['Systems', 'Web', 'Redesign'],
    color: 'bg-case-mint',
    textColor: 'text-ink',
    // image: '/images/projects/project-two.png',
  },
  {
    num: '03',
    title: 'Project three',
    role: 'Product Design',
    year: '2023',
    description: 'Placeholder — your case study description goes here. What problem did you solve and for whom?',
    tags: ['UX Research', 'iOS', 'Launch'],
    color: 'bg-case-violet',
    textColor: 'text-base',
    // image: '/images/projects/project-three.png',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
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
          <div className="flex flex-col gap-7 max-w-[56rem]">

            {/* Label row with decorative mark */}
            <FadeIn delay={0.1} className="flex items-center gap-3">
              <span className="text-accent text-xl leading-none select-none" aria-hidden>✦</span>
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-ink-muted">
                UX/UI Product Designer
              </span>
            </FadeIn>

            {/* Headline */}
            <h1 className="font-display text-display text-ink leading-[0.95] tracking-tight">
              <RevealText text="I make" delay={0.2} />
              <br />
              <span className="relative inline-block pb-5">
                <RevealText text="things." delay={0.45} />
                {/* Hand-drawn underline squiggle */}
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

            {/* Subtext */}
            <FadeIn delay={0.65}>
              <p className="font-sans text-xl text-ink-muted max-w-lg leading-relaxed">
                Designer, maker, hobbyist. I bring the same curiosity to pixels
                as I do to woodworking and watercolour.
              </p>
            </FadeIn>

            {/* CTAs + annotation */}
            <FadeIn delay={0.8} className="flex items-center gap-6 flex-wrap">
              <Button variant="primary" size="lg">
                <a href="#work">View work</a>
              </Button>
              <Button variant="ghost" size="lg">
                <a href="#about">About me ↓</a>
              </Button>
            </FadeIn>

          </div>

          {/* Floating annotation — journal margin note */}
          <FadeIn
            delay={1.1}
            className="absolute bottom-12 right-0 hidden lg:flex flex-col items-end gap-1"
          >
            <span className="font-sans text-xs text-ink-faint uppercase tracking-widest">Currently available</span>
            <span className="font-display text-sm text-ink-muted italic">for new opportunities</span>
          </FadeIn>

        </Container>
      </section>

      {/* ── Work ──────────────────────────────────────────────── */}
      <section id="work" className="bg-ruled py-32">
        <Container>
          <FadeIn className="flex items-end justify-between gap-4 flex-wrap mb-16">
            <SectionHeading
              label="Selected work"
              heading="Things I've made"
            />
            <span className="font-sans text-sm text-ink-muted">3 case studies</span>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {projects.map(({ num, title, role, year, description, tags, color, textColor }, i) => (
              <FadeIn key={num} delay={i * 0.12}>
                <a
                  href={`/work/${title.toLowerCase().replace(/\s/g, '-')}`}
                  className={`group relative flex flex-col md:flex-row overflow-hidden rounded-2xl ${color} transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-2xl`}
                >
                  {/* Left: text content */}
                  <div className="relative flex flex-col justify-between gap-6 p-8 md:p-12 md:w-1/2">
                    {/* Ghost number */}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display font-black leading-none opacity-[0.1] ${textColor}`}
                      style={{ fontSize: 'clamp(6rem, 12vw, 14rem)' }}
                    >
                      {num}
                    </span>

                    <div className="relative flex items-start justify-between">
                      <span className={`font-sans text-sm font-semibold uppercase tracking-widest opacity-60 ${textColor}`}>{num}</span>
                      <span className={`font-sans text-sm opacity-50 ${textColor}`}>{year}</span>
                    </div>

                    <div className="relative flex flex-col gap-3">
                      <h3 className={`font-display text-3xl leading-tight md:text-4xl ${textColor}`}>{title}</h3>
                      <p className={`font-sans text-sm leading-relaxed opacity-70 max-w-xs ${textColor}`}>{description}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {tags.map((tag) => (
                          <span key={tag} className={`font-sans text-xs font-medium px-2.5 py-1 rounded-full bg-ink/10 ${textColor}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className={`relative inline-flex items-center gap-2 font-sans text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${textColor}`}>
                      {role} →
                    </span>
                  </div>

                  {/* Right: image preview */}
                  <div className="relative flex items-end justify-center md:w-1/2 px-8 pt-8 md:pt-12 overflow-hidden">
                    {/* Screen frame */}
                    <div className="relative w-full max-w-sm rounded-t-xl bg-ink/10 shadow-xl overflow-hidden">
                      {/* Browser / app chrome bar */}
                      <div className="flex items-center gap-1.5 bg-ink/15 px-3 py-2.5">
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                        <span className="ml-2 h-2 flex-1 rounded-full bg-ink/10" />
                      </div>
                      {/* Image area — swap div for <Image> when ready */}
                      <div className="relative aspect-[4/3] bg-ink/5 flex flex-col items-center justify-center gap-2">
                        <span className={`font-display text-5xl opacity-20 ${textColor}`}>{num}</span>
                        <span className={`font-sans text-xs opacity-30 ${textColor}`}>project-{num}.png</span>
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Contact ───────────────────────────────────────────── */}
      <section id="contact" className="bg-graph py-32">
        <Container>
          <FadeIn className="flex justify-center">
            <div className="relative w-full max-w-lg rotate-[0.8deg] transition-all duration-500 ease-[var(--ease-out-expo)] hover:rotate-0 hover:scale-[1.01]">

              {/* Pushpin */}
              <div aria-hidden className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                  <circle cx="12" cy="10" r="9" fill="#FF4F3B" />
                  <circle cx="12" cy="10" r="5" fill="rgba(255,255,255,0.3)" />
                  <line x1="12" y1="19" x2="12" y2="32" stroke="#CC3A28" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Torn note */}
              <div className="overflow-hidden rounded-t-sm bg-base shadow-xl">

                {/* Note body */}
                <div className="flex flex-col items-center gap-6 px-10 pb-10 pt-12 text-center">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Contact
                  </span>

                  <h2 className="font-display text-4xl text-ink leading-tight">
                    Let&apos;s talk.
                  </h2>

                  {/* Squiggle divider */}
                  <svg aria-hidden width="120" height="12" viewBox="0 0 120 12" fill="none" className="text-case-mint">
                    <path d="M2 6 C16 1, 28 11, 42 6 S70 1, 84 6 S110 11, 118 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  </svg>

                  <p className="font-sans text-base text-ink-muted leading-relaxed max-w-xs">
                    Got a project in mind or just want to say hi? My inbox is always open.
                  </p>

                  <Button variant="primary" size="lg">
                    <a href="mailto:hello@sarahgomez.com">Say hello →</a>
                  </Button>

                  <p className="font-sans text-xs text-ink-faint italic">
                    — or find me on LinkedIn, Dribbble, GitHub
                  </p>
                </div>

                {/* Torn bottom edge — SVG mask */}
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
    </>
  )
}

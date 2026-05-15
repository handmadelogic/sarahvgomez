import { FadeIn } from '@/components/motion/FadeIn'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

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

export function WorkSection() {
  return (
    <section id="work" className="bg-ruled py-32">
      <Container>
        <FadeIn className="mb-16 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading label="Selected work" heading="Things I've made" />
          <span className="font-sans text-sm text-ink-muted">3 case studies</span>
        </FadeIn>

        <div className="flex flex-col gap-5">
          {projects.map(({ num, title, role, year, description, tags, color, textColor }, i) => (
            <FadeIn key={num} delay={i * 0.12}>
              <a
                href={`/work/${title.toLowerCase().replace(/\s/g, '-')}`}
                className={`group relative flex flex-col overflow-hidden rounded-2xl md:flex-row ${color} transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Left: text content */}
                <div className="relative flex flex-col justify-between gap-6 p-8 md:w-1/2 md:p-12">
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
                    <p className={`max-w-xs font-sans text-sm leading-relaxed opacity-70 ${textColor}`}>{description}</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className={`rounded-full bg-ink/10 px-2.5 py-1 font-sans text-xs font-medium ${textColor}`}>
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
                <div className="relative flex items-end justify-center overflow-hidden px-8 pt-8 md:w-1/2 md:pt-12">
                  <div className="relative w-full max-w-sm overflow-hidden rounded-t-xl bg-ink/10 shadow-xl">
                    <div className="flex items-center gap-1.5 bg-ink/15 px-3 py-2.5">
                      <span className="h-2 w-2 rounded-full bg-ink/20" />
                      <span className="h-2 w-2 rounded-full bg-ink/20" />
                      <span className="h-2 w-2 rounded-full bg-ink/20" />
                      <span className="ml-2 h-2 flex-1 rounded-full bg-ink/10" />
                    </div>
                    {/* Swap for <Image src={image} alt={title} fill className="object-cover" /> when ready */}
                    <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-ink/5">
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
  )
}

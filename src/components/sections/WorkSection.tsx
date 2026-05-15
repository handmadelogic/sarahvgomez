import { FadeIn } from '@/components/motion/FadeIn'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'

const projects = [
  {
    num: '01',
    title: 'Project one',
    role: 'Product Design',
    year: '2024',
    description: 'Placeholder — your case study description goes here. What problem did you solve and for whom?',
    tags: ['UX Research', 'Mobile', '0→1'],
    accent: '#ffd166',
    // image: '/images/projects/project-one.png',
  },
  {
    num: '02',
    title: 'Project two',
    role: 'UX/UI Design',
    year: '2024',
    description: 'Placeholder — your case study description goes here. What problem did you solve and for whom?',
    tags: ['Systems', 'Web', 'Redesign'],
    accent: '#06d6a0',
    // image: '/images/projects/project-two.png',
  },
  {
    num: '03',
    title: 'Project three',
    role: 'Product Design',
    year: '2023',
    description: 'Placeholder — your case study description goes here. What problem did you solve and for whom?',
    tags: ['UX Research', 'iOS', 'Launch'],
    accent: '#8338ec',
    // image: '/images/projects/project-three.png',
  },
]

export function WorkSection() {
  return (
    <section id="work" className="bg-ruled py-32">
      <Container>
        <FadeIn className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading label="Selected work" heading="Things I've made" />
          <span className="font-sans text-sm text-ink-muted">3 case studies</span>
        </FadeIn>

        <FadeIn delay={0.1} className="mb-10">
          <svg
            aria-hidden
            className="text-ink-faint"
            width="180"
            height="16"
            viewBox="0 0 180 16"
            fill="none"
          >
            <path
              d="M2 8 C16 2, 30 14, 45 8 S75 2, 90 8 S120 14, 135 8 S160 2, 178 8"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </FadeIn>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.num} delay={i * 0.12}>
              <ProjectCard
                num={project.num}
                title={project.title}
                role={project.role}
                year={project.year}
                description={project.description}
                tags={project.tags}
                accent={project.accent}
                href={`/work/${project.title.toLowerCase().replace(/\s/g, '-')}`}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

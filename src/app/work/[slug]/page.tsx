import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { projectSlugs } from '@/lib/projects'
import type { ProjectMeta } from '@/types/project'

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!projectSlugs.includes(slug as (typeof projectSlugs)[number])) {
    notFound()
  }

  const { default: CaseStudy, meta } = (await import(
    `@/content/projects/${slug}.mdx`
  )) as { default: React.ComponentType; meta: ProjectMeta }

  const currentIndex = projectSlugs.indexOf(slug as (typeof projectSlugs)[number])
  const nextSlug = projectSlugs[(currentIndex + 1) % projectSlugs.length]
  const { meta: nextMeta } = (await import(
    `@/content/projects/${nextSlug}.mdx`
  )) as { default: React.ComponentType; meta: ProjectMeta }

  return (
    <main>
      {/* Cover image */}
      <div className="relative w-full overflow-hidden bg-surface" style={{ aspectRatio: '21/9' }}>
        {meta.cover ? (
          <Image
            src={meta.cover}
            alt={`${meta.title} — cover image`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-end justify-between p-10 md:p-16"
            style={{ backgroundColor: `${meta.accent}14` }}
          >
            {/* Dot grid overlay */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(28,23,20,0.1) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Ghost title */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-display font-black leading-none text-ink/[0.06]"
              style={{ fontSize: 'clamp(6rem, 18vw, 18rem)' }}
            >
              {meta.title}
            </span>
            {/* Cover placeholder label */}
            <span className="relative z-10 rounded-full border border-ink/12 bg-base/60 px-4 py-2 font-sans text-xs text-ink-muted backdrop-blur-sm">
              Cover image coming soon
            </span>
            {/* Accent tag */}
            <span
              className="relative z-10 rounded-full px-4 py-2 font-sans text-xs font-semibold"
              style={{ backgroundColor: `${meta.accent}30`, color: meta.accent }}
            >
              {meta.role} · {meta.year}
            </span>
          </div>
        )}
        {/* Accent stripe at the base of the cover */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: meta.accent }} />
      </div>

      {/* Hero text */}
      <section className="border-b border-ink/8 py-16">
        <Container className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-ink/8 px-3 py-1 font-sans text-xs font-medium text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            {meta.title}
          </h1>
          <p className="mt-6 font-sans text-xl leading-relaxed text-ink-muted">
            {meta.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-8 border-t border-ink/8 pt-8">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-ink-faint">Role</p>
              <p className="mt-1 font-sans text-sm text-ink">{meta.role}</p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-ink-faint">Year</p>
              <p className="mt-1 font-sans text-sm text-ink">{meta.year}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-24">
        <Container className="max-w-3xl">
          <div className="prose-case">
            <CaseStudy />
          </div>
        </Container>
      </section>

      {/* Next project CTA */}
      <a
        href={`/work/${nextSlug}`}
        className="group relative block overflow-hidden border-t border-ink/8"
        style={{ backgroundColor: `${nextMeta.accent}14` }}
      >
        <Container className="relative flex items-center justify-between gap-6 py-16 md:py-20">
          {/* Left: text */}
          <div className="relative z-10 flex-1">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Next project
            </p>
            <p className="font-display text-3xl leading-tight text-ink md:text-5xl">
              {nextMeta.title}
            </p>
            <p className="mt-2 font-sans text-sm text-ink-muted">
              {nextMeta.role} · {nextMeta.year}
            </p>
            <div className="mt-8 inline-flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
                style={{ backgroundColor: nextMeta.accent }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-sans text-sm font-semibold text-ink">
                View project
              </span>
            </div>
          </div>

          {/* Right: teaser image — fades in from the right, dissolves on the left */}
          <div
            className="absolute right-0 top-0 hidden h-full w-[45%] overflow-hidden md:block"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
            }}
          >
            {nextMeta.cover ? (
              <Image
                src={nextMeta.cover}
                alt={`${nextMeta.title} preview`}
                fill
                sizes="40vw"
                className="object-cover transition-all duration-700 ease-[var(--ease-out-expo)] grayscale-[30%] group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-end pr-16 transition-all duration-700 group-hover:scale-[1.03]"
                style={{ backgroundColor: `${nextMeta.accent}18` }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(28,23,20,0.12) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <span
                  aria-hidden
                  className="select-none font-display font-black leading-none text-ink/[0.08]"
                  style={{ fontSize: 'clamp(5rem, 10vw, 10rem)' }}
                >
                  {nextMeta.title}
                </span>
              </div>
            )}
          </div>
        </Container>
        {/* Accent stripe */}
        <div className="h-1 w-full" style={{ backgroundColor: nextMeta.accent }} />
      </a>
    </main>
  )
}

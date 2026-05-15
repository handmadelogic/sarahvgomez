import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function StyleguidePage() {
  return (
    <main className="bg-base min-h-screen py-24">
      <Container className="flex flex-col gap-24">

        {/* Colors */}
        <section>
          <SectionHeading label="Design system" heading="Color palette" />
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { name: 'base', bg: 'bg-base', border: true },
              { name: 'surface', bg: 'bg-surface', border: true },
              { name: 'ink', bg: 'bg-ink' },
              { name: 'ink-muted', bg: 'bg-ink-muted' },
              { name: 'ink-faint', bg: 'bg-ink-faint' },
              { name: 'accent', bg: 'bg-accent' },
              { name: 'accent-dark', bg: 'bg-accent-dark' },
              { name: 'case-yellow', bg: 'bg-case-yellow' },
              { name: 'case-mint', bg: 'bg-case-mint' },
              { name: 'case-violet', bg: 'bg-case-violet' },
            ].map(({ name, bg, border }) => (
              <div key={name} className="flex flex-col items-start gap-2">
                <div className={`h-16 w-32 rounded-lg ${bg} ${border ? 'border border-ink-faint' : ''}`} />
                <span className="font-sans text-sm text-ink-muted">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <SectionHeading label="Design system" heading="Typography" />
          <div className="mt-10 flex flex-col gap-6">
            <div>
              <span className="font-sans text-sm text-ink-muted">Display — Fraunces</span>
              <p className="font-display text-display text-ink leading-none mt-1">Aa</p>
            </div>
            <div className="flex flex-col gap-1">
              {(['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs'] as const).map((size) => (
                <p key={size} className={`font-display text-ink ${size}`}>
                  The Maker&apos;s Archive — {size}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-1 mt-4">
              {(['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs'] as const).map((size) => (
                <p key={size} className={`font-sans text-ink ${size}`}>
                  Plus Jakarta Sans — {size}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <SectionHeading label="Design system" heading="Buttons" />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        {/* Section headings */}
        <section>
          <SectionHeading label="Design system" heading="Section headings" />
          <div className="mt-10 flex flex-col gap-12">
            <SectionHeading
              label="Selected work"
              heading="Things I've made"
              subheading="A collection of product design work across consumer apps, internal tools, and side projects."
            />
            <SectionHeading
              label="About"
              heading="I make things."
              subheading="Designer, maker, hobbyist. I bring the same curiosity to pixels as I do to woodworking and watercolour."
              align="center"
            />
          </div>
        </section>

      </Container>
    </main>
  )
}

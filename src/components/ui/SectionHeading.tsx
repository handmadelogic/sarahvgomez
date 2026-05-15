import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  label,
  heading,
  subheading,
  align = 'left',
  className,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', align === 'center' && 'items-center text-center', className)}>
      {label && (
        <span className="font-sans text-sm font-semibold uppercase tracking-widest text-ink-muted">
          {label}
        </span>
      )}
      <Tag className="font-display text-3xl text-ink">
        {heading}
      </Tag>
      {subheading && (
        <p className="max-w-xl font-sans text-lg text-ink-muted">
          {subheading}
        </p>
      )}
    </div>
  )
}

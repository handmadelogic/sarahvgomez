import Image from 'next/image'

interface FigureProps {
  src: string
  alt: string
  caption?: string
  full?: boolean
}

export function Figure({ src, alt, caption, full = false }: FigureProps) {
  return (
    <figure className={`my-12 ${full ? '-mx-6 md:-mx-16 lg:-mx-32' : ''}`}>
      <div className="overflow-hidden rounded-2xl border border-ink/8 bg-surface shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-sans text-sm text-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

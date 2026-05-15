import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import { Figure } from '@/components/mdx/Figure'
import { Callout } from '@/components/mdx/Callout'
import { BeforeAfter } from '@/components/mdx/BeforeAfter'

const components: MDXComponents = {
  img: (props) => (
    <Image
      sizes="(max-width: 768px) 100vw, 800px"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
  Figure,
  Callout,
  BeforeAfter,
}

export function useMDXComponents(): MDXComponents {
  return components
}

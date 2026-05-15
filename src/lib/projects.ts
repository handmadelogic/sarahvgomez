export const projectSlugs = [
  'project-one',
  'project-two',
  'project-three',
] as const

export type ProjectSlug = (typeof projectSlugs)[number]

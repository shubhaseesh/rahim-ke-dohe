// Aggregated app data — individual writers live in ./writers/
import type { Doha, Biography, Writer } from './types'
import { allWriters, getWriterBySlug, rahimWriter } from './writers'

export { allWriters, getWriterBySlug, rahimWriter } from './writers'

/** Flattened dohe from every writer, sorted by id. */
export const dohe: Doha[] = allWriters.flatMap((w) => w.dohe).sort((a, b) => a.id - b.id)

export const rahimBiography: Biography = rahimWriter.biography

/** @deprecated Use getWriterBySlug(slug)?.biography */
export const biography = rahimBiography

export const allThemes = [
  'All',
  'Love & Relationships',
  'Friendship',
  'Character',
  'Wisdom',
  'Acceptance',
  'Service',
  'Wealth & Materialism',
] as const

export const featuredDohe = dohe.filter((d) => d.featured)

export const authorOptions = [
  { slug: 'all', label: 'All Writers' },
  ...allWriters.map((w) => ({
    slug: w.slug,
    label: w.name_english,
    labelHindi: w.name_hindi,
  })),
]

export function getDoheByAuthor(slug: string): Doha[] {
  if (slug === 'all') return dohe
  const writer = getWriterBySlug(slug)
  return writer?.dohe ?? []
}

export function getDohaById(id: number): Doha | undefined {
  return dohe.find((d) => d.id === id)
}

export function getAdjacentDohe(id: number): { prev?: Doha; next?: Doha } {
  const index = dohe.findIndex((d) => d.id === id)
  if (index < 0) return {}
  return {
    prev: dohe[index - 1],
    next: dohe[index + 1],
  }
}

export function getWriterForDoha(doha: Doha): Writer | undefined {
  return getWriterBySlug(doha.authorSlug)
}

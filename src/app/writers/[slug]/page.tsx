import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { DohaCard } from '@/components/DohaCard'
import { allWriters, getWriterBySlug } from '@/lib/data'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return allWriters.map((w) => ({ slug: w.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const writer = getWriterBySlug(params.slug)
  if (!writer) return {}
  return {
    title: `${writer.name_english} — Dohe & Biography`,
    description: writer.short_bio_english,
  }
}

export default function WriterPage({ params }: { params: { slug: string } }) {
  const writer = getWriterBySlug(params.slug)
  if (!writer) notFound()

  const featured = writer.dohe.filter((d) => d.featured)
  const displayDohe = featured.length > 0 ? featured.slice(0, 4) : writer.dohe.slice(0, 4)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <AnimatedSection direction="fade">
        <Link
          href="/writers"
          className="inline-flex items-center gap-2 text-parchment/50 hover:text-gold text-sm font-ui mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Writers
        </Link>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mb-12">
          <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-3">
            {writer.era}
          </p>
          <h1 className="text-3xl sm:text-5xl font-english text-parchment/90 mb-2">
            {writer.name_english}
          </h1>
          <p className="font-devanagari text-gold/60 text-xl sm:text-2xl mb-4">{writer.name_hindi}</p>
          <p className="text-parchment/40 text-sm font-ui">
            {writer.language} · {writer.genre} · {writer.dohe.length} dohe
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-parchment/60 english-serif text-center text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {writer.short_bio_english}
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href={`/dohe?author=${writer.slug}`} className="btn-gold">
            <BookOpen className="w-4 h-4" />
            Browse All Dohe
          </Link>
          <Link href={`/biography/${writer.slug}`} className="btn-outline-gold">
            Read Biography <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="text-center mb-8">
          <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-2">
            {featured.length > 0 ? 'Featured' : 'Selected'} Dohe
          </p>
          <h2 className="text-2xl font-english text-parchment/85">Beloved Verses</h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {displayDohe.map((doha, i) => (
          <AnimatedSection key={doha.id} delay={i * 0.08} direction="up">
            <DohaCard doha={doha} variant="featured" />
          </AnimatedSection>
        ))}
      </div>

      {writer.dohe.length > displayDohe.length && (
        <div className="text-center">
          <Link href={`/dohe?author=${writer.slug}`} className="btn-outline-gold">
            View all {writer.dohe.length} dohe <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  )
}

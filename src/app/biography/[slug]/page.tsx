import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BiographySection } from '@/components/BiographySection'
import { AnimatedSection } from '@/components/AnimatedSection'
import { allWriters, getWriterBySlug } from '@/lib/data'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return allWriters.map((w) => ({ slug: w.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const writer = getWriterBySlug(params.slug)
  if (!writer) return {}
  return {
    title: `Biography — ${writer.name_english}`,
    description: writer.biography.introduction_english.slice(0, 160),
  }
}

export default function WriterBiographyPage({ params }: { params: { slug: string } }) {
  const writer = getWriterBySlug(params.slug)
  if (!writer) notFound()

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <AnimatedSection direction="fade">
        <Link
          href={`/writers/${writer.slug}`}
          className="inline-flex items-center gap-2 text-parchment/50 hover:text-gold text-sm font-ui mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {writer.name_english}
        </Link>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-3">
            Life &amp; Legacy
          </p>
          <h1 className="text-4xl sm:text-5xl font-english text-parchment/90 mb-3">
            {writer.name_english}
          </h1>
          <p className="font-devanagari text-gold/60 text-xl mb-4">{writer.name_hindi}</p>
          <p className="text-parchment/40 text-sm font-ui">
            {writer.era} · {writer.language} · {writer.genre}
          </p>

          <div className="ornate-divider max-w-sm mx-auto mt-8">
            <span className="text-gold/40 text-xs px-3 font-ui">✦</span>
          </div>
        </div>
      </AnimatedSection>

      <BiographySection biography={writer.biography} />
    </div>
  )
}

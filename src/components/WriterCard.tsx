import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import type { Writer } from '@/lib/types'

export function WriterCard({ writer }: { writer: Writer }) {
  const featuredCount = writer.dohe.filter((d) => d.featured).length

  return (
    <Link
      href={`/writers/${writer.slug}`}
      className="group flex flex-col h-full rounded-2xl border border-gold/15 bg-white/3 p-6 hover:border-gold/40 hover:bg-gold/5 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-4 h-4 text-gold" />
        </div>
        <span className="text-parchment/35 text-xs font-ui">{writer.dohe.length} dohe</span>
      </div>

      <h3 className="font-english text-parchment/90 text-lg leading-snug group-hover:text-gold transition-colors">
        {writer.name_english}
      </h3>
      <p className="font-devanagari text-gold/55 text-sm mt-1">{writer.name_hindi}</p>

      <p className="text-parchment/45 text-xs font-ui mt-2">
        {writer.era} · {writer.language}
      </p>

      <p className="text-parchment/55 text-sm font-ui leading-relaxed mt-4 flex-1 line-clamp-3">
        {writer.short_bio_english}
      </p>

      <div className="mt-5 flex items-center justify-between text-xs font-ui">
        <span className="text-parchment/30">{writer.genre}</span>
        {featuredCount > 0 && (
          <span className="text-gold/50">{featuredCount} featured</span>
        )}
      </div>

      <span className="mt-4 inline-flex items-center gap-1 text-gold/60 group-hover:text-gold text-sm font-ui transition-colors">
        Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  )
}

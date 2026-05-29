import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { dohe, getAdjacentDohe, getDohaById } from '@/lib/data'
import { AnimatedSection } from '@/components/AnimatedSection'
import { DohaCard } from '@/components/DohaCard'
import { cn, themeColors } from '@/lib/utils'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return dohe.map((d) => ({ id: d.id.toString() }))
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const doha = getDohaById(parseInt(params.id))
  if (!doha) return {}
  return {
    title: `Doha #${doha.id} · ${doha.author} — ${doha.theme}`,
    description: doha.explanation,
  }
}

export default function DohaDetailPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const doha = getDohaById(id)

  if (!doha) notFound()

  const { prev, next } = getAdjacentDohe(id)
  const colors = themeColors[doha.theme]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <AnimatedSection direction="fade">
        <Link
          href={doha.authorSlug ? `/dohe?author=${doha.authorSlug}` : '/dohe'}
          className="inline-flex items-center gap-2 text-parchment/50 hover:text-gold text-sm font-ui mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {doha.author}
        </Link>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mb-10">
          <span className={cn('inline-block px-4 py-1.5 rounded-full text-sm font-ui mb-4', colors.badge)}>
            {doha.theme}
          </span>
          <p className="text-parchment/30 text-xs font-ui uppercase tracking-widest">
            Doha #{doha.id}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-2xl mx-auto mb-12">
          <DohaCard doha={doha} variant="full" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="bg-white/3 border border-gold/15 rounded-2xl p-8 mb-6">
          <p className="text-gold/50 text-xs font-ui uppercase tracking-widest text-center mb-6">
            Hindi · हिंदी
          </p>
          <p className="hindi-doha text-parchment/90 text-center text-xl sm:text-2xl whitespace-pre-line leading-loose">
            {doha.hindi}
          </p>
          <div className="ornate-divider my-6">
            <span className="text-gold/40 text-xs px-3 font-ui">✦</span>
          </div>
          <p className="hindi-text text-parchment/60 text-center text-sm sm:text-base leading-relaxed">
            {doha.meaning_hindi}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="bg-burgundy/30 border border-gold/20 rounded-2xl p-8 mb-6">
          <p className="text-gold/50 text-xs font-ui uppercase tracking-widest text-center mb-6">
            English Translation
          </p>
          <p className="english-serif text-parchment/90 text-center text-lg sm:text-xl italic leading-relaxed mb-6">
            &ldquo;{doha.english}&rdquo;
          </p>
          <div className="ornate-divider my-6">
            <span className="text-gold/40 text-xs px-3 font-ui">✦</span>
          </div>
          <p className="english-serif text-parchment/65 text-center text-sm sm:text-base leading-relaxed">
            {doha.explanation}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <div className="flex items-center justify-between gap-4 pt-4">
          {prev ? (
            <Link
              href={`/dohe/${prev.id}`}
              className="flex items-center gap-2 text-parchment/50 hover:text-gold text-sm font-ui transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Doha #{prev.id}</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/dohe"
            className="text-parchment/30 hover:text-parchment/60 text-xs font-ui uppercase tracking-wider transition-colors"
          >
            All Dohe
          </Link>

          {next ? (
            <Link
              href={`/dohe/${next.id}`}
              className="flex items-center gap-2 text-parchment/50 hover:text-gold text-sm font-ui transition-colors group"
            >
              <span>Doha #{next.id}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </AnimatedSection>
    </div>
  )
}

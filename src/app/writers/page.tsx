import { AnimatedSection } from '@/components/AnimatedSection'
import { WriterCard } from '@/components/WriterCard'
import { allWriters, dohe } from '@/lib/data'

export const metadata = {
  title: 'Writers — Hindi Literature & Wisdom',
  description:
    'Explore dohe, verses, and biography from Kabir, Tulsidas, Rahim, Tagore, Gandhi, and 30+ classical Indian writers.',
}

export default function WritersPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-12">
          <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-3">
            Library
          </p>
          <h1 className="text-4xl sm:text-5xl font-devanagari gold-text mb-3">
            साहित्यकार
          </h1>
          <p className="text-parchment/50 font-english text-lg italic">
            {allWriters.length} Writers · {dohe.length} Dohe &amp; Verses
          </p>
          <p className="text-parchment/35 text-sm font-ui mt-3 max-w-lg mx-auto">
            Saints, poets, philosophers, and epics — browse by author
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {allWriters.map((writer, i) => (
          <AnimatedSection key={writer.slug} delay={Math.min(i * 0.04, 0.6)} direction="up">
            <WriterCard writer={writer} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

import { DoheGrid } from '@/components/DoheGrid'
import { AnimatedSection } from '@/components/AnimatedSection'
import { dohe } from '@/lib/data'

export const metadata = {
  title: 'All Dohe — Hindi Literature Collection',
  description: `Browse ${dohe.length} dohe and verses from classical Indian writers with Hindi text, English translations, and theme filters.`,
}

export default function DohePage({
  searchParams,
}: {
  searchParams: { theme?: string; author?: string }
}) {
  const initialTheme = searchParams.theme ?? 'All'
  const initialAuthor = searchParams.author ?? 'all'

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-12">
          <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-3">
            Collection
          </p>
          <h1 className="text-4xl sm:text-5xl font-devanagari gold-text mb-3">
            दोहे और श्लोक
          </h1>
          <p className="text-parchment/50 font-english text-lg italic">
            {dohe.length} Dohe &amp; Verses
          </p>
          <p className="text-parchment/35 text-sm font-ui mt-3 max-w-lg mx-auto">
            Tap any card to flip and reveal the English meaning and explanation
          </p>
        </div>
      </AnimatedSection>

      <DoheGrid
        dohe={dohe}
        showSearch
        showAuthorFilter
        initialTheme={initialTheme}
        initialAuthor={initialAuthor}
      />
    </div>
  )
}

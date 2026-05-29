import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'
import { DohaCard } from '@/components/DohaCard'
import { WriterCard } from '@/components/WriterCard'
import { AnimatedSection } from '@/components/AnimatedSection'
import { featuredDohe, allThemes, allWriters, dohe } from '@/lib/data'

const themeEmojis: Record<string, string> = {
  'Love & Relationships': '❤',
  'Friendship': '🤝',
  'Character': '⭐',
  'Wisdom': '🌙',
  'Acceptance': '🌿',
  'Service': '🙏',
  'Wealth & Materialism': '⚖',
}

const spotlightWriters = allWriters.filter((w) =>
  ['rahim', 'kabir-das', 'tulsidas', 'gandhi', 'tagore', 'kalam'].includes(w.slug)
)

export default function Home() {
  const homeFeatured = featuredDohe.slice(0, 8)

  return (
    <>
      <HeroSection />

      {/* Featured Dohe */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-3">
              Featured
            </p>
            <h2 className="text-3xl sm:text-4xl font-english text-parchment/90">
              Most Beloved Dohe
            </h2>
            <p className="text-parchment/40 text-sm font-ui mt-3 max-w-md mx-auto">
              Click any card to flip and reveal the English meaning
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeFeatured.map((doha, i) => (
            <AnimatedSection key={doha.id} delay={i * 0.08} direction="up">
              <DohaCard doha={doha} variant="featured" />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-10">
            <Link href="/dohe" className="btn-outline-gold">
              View All {dohe.length} Dohe <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Writers */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-3">
                Authors
              </p>
              <h2 className="text-3xl sm:text-4xl font-english text-parchment/90">
                Explore by Writer
              </h2>
              <p className="text-parchment/40 text-sm font-ui mt-3">
                {allWriters.length} saints, poets, and philosophers
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {spotlightWriters.map((writer, i) => (
              <AnimatedSection key={writer.slug} delay={i * 0.06}>
                <WriterCard writer={writer} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <Link href="/writers" className="btn-gold">
              All Writers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Themes section */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-3">
              By Theme
            </p>
            <h2 className="text-3xl sm:text-4xl font-english text-parchment/90">
              Explore by Topic
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {allThemes.slice(1).map((theme, i) => (
            <AnimatedSection key={theme} delay={i * 0.07}>
              <Link
                href={`/dohe?theme=${encodeURIComponent(theme)}`}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-gold/15 bg-white/3 hover:bg-gold/8 hover:border-gold/40 transition-all duration-200 text-center"
              >
                <span className="text-2xl">{themeEmojis[theme] ?? '✦'}</span>
                <span className="text-parchment/70 group-hover:text-parchment text-xs font-ui leading-tight transition-colors">
                  {theme}
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Rahim teaser */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <AnimatedSection direction="fade">
          <div className="relative border border-gold/20 rounded-3xl p-8 sm:p-12 bg-white/3 overflow-hidden">
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              aria-hidden
            >
              <span className="font-devanagari text-gold/3 text-[12rem] font-bold leading-none">
                रहीम
              </span>
            </div>

            <div className="relative z-10 text-center">
              <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-4">
                Featured Poet
              </p>
              <h2 className="text-3xl sm:text-4xl font-english text-parchment/90 mb-6">
                Abdul Rahim Khan-i-Khanan
              </h2>
              <p className="text-parchment/55 english-serif text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                A Mughal general, polyglot scholar, and one of Akbar&apos;s Nine Gems — Rahim chose
                to write not in Persian, the language of nobility, but in Hindi, the language of the
                people. His wisdom has endured for over 400 years.
              </p>
              <Link href="/biography/rahim" className="btn-gold">
                Read His Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}

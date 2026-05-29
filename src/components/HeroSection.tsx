'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, BookOpen } from 'lucide-react'
import { featuredDohe } from '@/lib/data'

const heroDoha = featuredDohe[0]
const words = heroDoha.hindi.split(/(\s+|\n)/).filter(Boolean)

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
}

export function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 500], [0, 120])
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 mughal-bg"
        style={{ y: bgY }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(44,24,16,0.7) 100%)',
        }}
      />

      {/* Gold glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-12"
        style={{ opacity: textOpacity }}
      >
        {/* Tag line */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-8"
        >
          <BookOpen className="w-3.5 h-3.5 text-gold" />
          <span className="text-gold/80 text-xs font-ui tracking-wider uppercase">
            Hindi Literature · Saints &amp; Poets
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl font-devanagari gold-text mb-6 leading-tight"
        >
          रहीम के दोहे
        </motion.h1>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-parchment/50 text-sm font-ui tracking-[0.2em] uppercase mb-12"
        >
          Rahim ke Dohe · Timeless Wisdom in Verse
        </motion.p>

        {/* Featured doha — animated word by word */}
        <div className="bg-white/3 border border-gold/15 rounded-2xl p-6 sm:p-10 mb-10 backdrop-blur-sm">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hindi-doha text-parchment/90 text-xl sm:text-2xl md:text-3xl leading-loose mb-6 inline"
          >
            {words.map((word, i) =>
              word === '\n' ? (
                <br key={i} />
              ) : (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-1">
                  {word}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Gold divider */}
          <div className="ornate-divider my-5">
            <span className="text-gold/40 text-xs px-3 font-ui">✦</span>
          </div>

          <motion.p
            custom={1.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="english-serif text-parchment/60 text-base sm:text-lg italic leading-relaxed"
          >
            &ldquo;{heroDoha.english}&rdquo;
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          custom={1.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/dohe" className="btn-gold">
            <BookOpen className="w-4 h-4" />
            Explore All Dohe
          </Link>
          <Link href="/writers" className="btn-outline-gold">
            Browse Writers
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={2.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-gold/30 flex flex-col items-center gap-2"
          >
            <span className="text-xs font-ui tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

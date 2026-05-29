'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import type { Biography } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Calendar, BookOpen, Sword, Star, Crown } from 'lucide-react'

const timelineIcons = [Calendar, Star, Sword, Crown, BookOpen]

export function BiographySection({ biography }: { biography: Biography }) {
  const factItems = [
    { label: 'Born', value: biography.facts.born },
    { label: 'Died', value: biography.facts.died },
    { label: 'Full Name', value: biography.facts.full_name_english },
    { label: 'Court', value: biography.facts.court },
  ]
  const [lang, setLang] = useState<'english' | 'hindi'>('english')

  return (
    <div className="space-y-16">
      {/* Language toggle */}
      <div className="flex justify-center">
        <div className="flex items-center gap-1 p-1 rounded-full border border-gold/20 bg-white/3">
          {(['english', 'hindi'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-ui transition-all duration-200 capitalize',
                lang === l
                  ? 'bg-gold text-deep-brown font-medium'
                  : 'text-parchment/60 hover:text-parchment'
              )}
            >
              {l === 'hindi' ? 'हिंदी' : 'English'}
            </button>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={cn(
              'text-parchment/75 leading-relaxed text-base sm:text-lg',
              lang === 'hindi' ? 'hindi-text' : 'english-serif'
            )}
          >
            {lang === 'english'
              ? biography.introduction_english
              : biography.introduction_hindi}
          </p>
        </div>
      </AnimatedSection>

      {/* Quick facts */}
      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {factItems.map((item) => (
            <div
              key={item.label}
              className="bg-white/3 border border-gold/15 rounded-xl p-4 text-center"
            >
              <p className="text-gold/60 text-xs font-ui uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-parchment/80 text-sm font-ui">{item.value}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Works */}
      <AnimatedSection delay={0.15}>
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gold/60 text-xs font-ui uppercase tracking-widest text-center mb-4">
            Major Works
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {biography.facts.works.map((work) => (
              <span
                key={work}
                className="px-3 py-1.5 rounded-full border border-gold/20 text-parchment/60 text-xs font-ui bg-gold/5"
              >
                {work}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-english text-parchment/90 text-center mb-12">
            Life &amp; Legacy
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {biography.timeline.map((entry, i) => {
              const Icon = timelineIcons[i] || Calendar
              return (
                <AnimatedSection key={entry.year} delay={i * 0.1} direction="left">
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 hidden sm:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-burgundy border border-gold/40 flex items-center justify-center z-10">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white/3 border border-gold/15 rounded-2xl p-6 hover:border-gold/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-gold font-english text-2xl font-semibold">{entry.year}</span>
                        <div className="ornate-divider flex-1">
                          <span className="text-parchment/80 font-english text-sm px-2">
                            {lang === 'english' ? entry.title_english : entry.title_hindi}
                          </span>
                        </div>
                      </div>
                      <motion.p
                        key={lang}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className={cn(
                          'text-parchment/65 text-sm leading-relaxed',
                          lang === 'hindi' ? 'hindi-text' : 'english-serif'
                        )}
                      >
                        {lang === 'english' ? entry.content_english : entry.content_hindi}
                      </motion.p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

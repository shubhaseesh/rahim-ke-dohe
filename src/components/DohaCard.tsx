'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, RotateCcw } from 'lucide-react'
import { cn, themeColors } from '@/lib/utils'
import { SpeakButton } from './SpeakButton'
import { CopyButton } from './CopyButton'
import type { DohaCardProps } from '@/lib/types'

export function DohaCard({ doha, variant = 'grid' }: DohaCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const colors = themeColors[doha.theme]

  const heightClass =
    variant === 'featured' ? 'h-80' : variant === 'full' ? 'h-[460px]' : 'h-72 sm:h-80'

  const copyText = `${doha.hindi}\n\n"${doha.english}"\n\n— ${doha.author}`

  return (
    <div
      className={cn('relative w-full cursor-pointer group', heightClass)}
      style={{ perspective: 1200 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT — Hindi */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl flex flex-col',
            'bg-gradient-to-br from-[#1a0a06] to-[#2C1810]',
            'border border-gold/25 card-glow card-glow-hover',
            'p-6 overflow-hidden'
          )}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="ornate-divider w-full">
              <span className="text-gold/50 text-xs px-2 font-ui tracking-widest uppercase">
                दोहा #{doha.id}
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <p className="hindi-doha text-parchment text-center whitespace-pre-line leading-loose">
              {doha.hindi}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex flex-wrap gap-1.5">
              <span className={cn('text-xs px-3 py-1 rounded-full font-ui', colors.badge)}>
                {doha.theme}
              </span>
              {variant !== 'featured' && (
                <span className="text-xs px-2 py-1 rounded-full font-ui text-parchment/40 border border-gold/10 line-clamp-1 max-w-[140px]">
                  {doha.author.split('(')[0].trim()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <SpeakButton text={doha.hindi} lang="hi-IN" label="हिंदी" />
              <span className="text-parchment/30 text-xs font-ui flex items-center gap-1">
                <RotateCcw className="w-3 h-3" />
                Tap to flip
              </span>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
            <svg viewBox="0 0 64 64" className="w-full h-full text-gold fill-current">
              <path d="M64 0 Q32 0 0 32 L0 0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10">
            <svg viewBox="0 0 64 64" className="w-full h-full text-gold fill-current">
              <path d="M0 64 Q32 64 64 32 L64 64 Z" />
            </svg>
          </div>
        </div>

        {/* BACK — English */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl flex flex-col',
            'bg-gradient-to-br from-burgundy-dark to-burgundy',
            'border border-gold/30 card-glow',
            'p-6 overflow-hidden'
          )}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center justify-center mb-3">
            <div className="ornate-divider w-full">
              <span className="text-gold/60 text-xs px-2 font-ui tracking-widest uppercase">
                English
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <p className="english-serif text-parchment text-center text-base sm:text-lg leading-relaxed italic">
              &ldquo;{doha.english}&rdquo;
            </p>
          </div>

          <p className="text-parchment/50 text-xs font-ui text-center mt-3 line-clamp-2 leading-relaxed">
            {doha.explanation}
          </p>

          {/* Action row */}
          <div className="mt-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <SpeakButton text={doha.english} lang="en-US" label="English" />
              <CopyButton text={copyText} />
            </div>
            <Link
              href={`/dohe/${doha.id}`}
              onClick={(e) => e.stopPropagation()}
              className="text-gold/70 hover:text-gold text-xs font-ui flex items-center gap-1 transition-colors flex-shrink-0"
            >
              Full view <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="absolute top-0 left-0 w-16 h-16 opacity-10">
            <svg viewBox="0 0 64 64" className="w-full h-full text-gold fill-current">
              <path d="M0 0 Q32 0 64 32 L64 0 Z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

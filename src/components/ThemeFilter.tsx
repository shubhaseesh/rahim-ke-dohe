'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ThemeFilterProps } from '@/lib/types'

export function ThemeFilter({ themes, activeTheme, onThemeChange }: ThemeFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {themes.map((theme) => {
        const isActive = activeTheme === theme
        return (
          <button
            key={theme}
            onClick={() => onThemeChange(theme)}
            className={cn(
              'relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-ui transition-all duration-200',
              isActive
                ? 'text-deep-brown'
                : 'text-parchment/60 hover:text-parchment border border-gold/20 hover:border-gold/40'
            )}
          >
            {isActive && (
              <motion.span
                layoutId="theme-pill"
                className="absolute inset-0 rounded-full bg-gold"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{theme}</span>
          </button>
        )
      })}
    </div>
  )
}

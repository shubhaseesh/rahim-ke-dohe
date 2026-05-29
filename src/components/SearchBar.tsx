'use client'

import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SearchBarProps } from '@/lib/types'

export function SearchBar({ value, onChange, placeholder = 'Search dohe...' }: SearchBarProps) {
  return (
    <div className="relative group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 group-focus-within:text-gold transition-colors" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full pl-11 pr-10 py-3 rounded-full',
          'bg-white/5 border border-gold/20',
          'text-parchment placeholder:text-parchment/30',
          'font-ui text-sm',
          'focus:outline-none focus:border-gold/50 focus:bg-white/8',
          'transition-all duration-200'
        )}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-parchment/40 hover:text-parchment transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

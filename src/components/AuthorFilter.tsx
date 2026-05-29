'use client'

import { cn } from '@/lib/utils'

export interface AuthorFilterProps {
  authors: { slug: string; label: string }[]
  activeAuthor: string
  onAuthorChange: (slug: string) => void
}

export function AuthorFilter({ authors, activeAuthor, onAuthorChange }: AuthorFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {authors.map((author) => (
        <button
          key={author.slug}
          type="button"
          onClick={() => onAuthorChange(author.slug)}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs font-ui transition-all duration-150 border',
            activeAuthor === author.slug
              ? 'bg-gold/20 border-gold/50 text-gold'
              : 'border-gold/15 text-parchment/50 hover:border-gold/35 hover:text-parchment/80'
          )}
        >
          {author.label}
        </button>
      ))}
    </div>
  )
}

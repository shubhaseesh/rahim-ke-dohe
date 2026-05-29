'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { DohaCard } from './DohaCard'
import { SearchBar } from './SearchBar'
import { ThemeFilter } from './ThemeFilter'
import { AuthorFilter } from './AuthorFilter'
import { allThemes, authorOptions } from '@/lib/data'
import type { Doha, DoheGridProps } from '@/lib/types'

function loadUserDohe(): Doha[] {
  try {
    const raw = localStorage.getItem('rahim_user_dohe')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function DoheGrid({
  dohe,
  showSearch = true,
  showAuthorFilter = true,
  initialTheme = 'All',
  initialAuthor = 'all',
}: DoheGridProps) {
  const [activeTheme, setActiveTheme] = useState(initialTheme)
  const [activeAuthor, setActiveAuthor] = useState(initialAuthor)
  const [searchQuery, setSearchQuery] = useState('')
  const [userDohe, setUserDohe] = useState<Doha[]>([])

  useEffect(() => {
    setUserDohe(loadUserDohe())
  }, [])

  useEffect(() => {
    setActiveTheme(initialTheme)
  }, [initialTheme])

  useEffect(() => {
    setActiveAuthor(initialAuthor)
  }, [initialAuthor])

  const allDohe = useMemo(() => [...userDohe, ...dohe], [dohe, userDohe])

  const filtered = useMemo(() => {
    return allDohe
      .filter((d) => activeAuthor === 'all' || d.authorSlug === activeAuthor)
      .filter((d) => activeTheme === 'All' || d.theme === activeTheme)
      .filter((d) => {
        if (!searchQuery.trim()) return true
        const q = searchQuery.toLowerCase()
        return (
          d.hindi.includes(searchQuery) ||
          d.english.toLowerCase().includes(q) ||
          d.explanation.toLowerCase().includes(q) ||
          d.meaning_hindi.includes(searchQuery) ||
          d.author.toLowerCase().includes(q)
        )
      })
  }, [allDohe, activeTheme, activeAuthor, searchQuery])

  const authorFilterOptions = authorOptions.map((a) => ({
    slug: a.slug,
    label: a.slug === 'all' ? a.label : a.label.split('(')[0].trim(),
  }))

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {showAuthorFilter && (
          <AuthorFilter
            authors={authorFilterOptions}
            activeAuthor={activeAuthor}
            onAuthorChange={setActiveAuthor}
          />
        )}
        <ThemeFilter
          themes={[...allThemes]}
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
        />
        {showSearch && (
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search in Hindi, English, or by author..."
          />
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="ornate-divider flex-1">
          <span className="text-parchment/40 text-xs font-ui px-2 tracking-wide">
            {filtered.length} {filtered.length === 1 ? 'doha' : 'dohe'}
            {activeTheme !== 'All' && ` · ${activeTheme}`}
            {activeAuthor !== 'all' &&
              ` · ${authorFilterOptions.find((a) => a.slug === activeAuthor)?.label}`}
          </span>
        </div>
      </div>

      {filtered.length > 0 ? (
        <LayoutGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((doha) => (
              <motion.div key={doha.id} layout transition={{ duration: 0.25, ease: 'easeOut' }}>
                <DohaCard doha={doha} variant="grid" />
              </motion.div>
            ))}
          </div>
        </LayoutGroup>
      ) : (
        <div className="text-center py-20">
          <p className="text-parchment/40 text-lg font-english">No dohe found</p>
          <p className="text-parchment/25 text-sm font-ui mt-2">Try a different search, theme, or writer</p>
        </div>
      )}
    </div>
  )
}

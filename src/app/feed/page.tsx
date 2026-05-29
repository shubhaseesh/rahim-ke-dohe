'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { PlusCircle, Trash2, ArrowLeft, CheckCircle } from 'lucide-react'
import { allThemes } from '@/lib/data'
import { cn, themeColors } from '@/lib/utils'
import { SpeakButton } from '@/components/SpeakButton'
import { CopyButton } from '@/components/CopyButton'
import type { Doha, ThemeCategory } from '@/lib/types'

const STORAGE_KEY = 'rahim_user_dohe'
const BASE_ID = 1000

function loadUserDohe(): Doha[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveUserDohe(dohe: Doha[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dohe))
}

const emptyForm = {
  hindi: '',
  english: '',
  meaning_hindi: '',
  explanation: '',
  theme: 'Wisdom' as ThemeCategory,
}

export default function FeedPage() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState<Partial<typeof emptyForm>>({})
  const [userDohe, setUserDohe] = useState<Doha[]>([])
  const [success, setSuccess] = useState(false)
  const [previewId, setPreviewId] = useState<number | null>(null)

  useEffect(() => {
    setUserDohe(loadUserDohe())
  }, [])

  const validate = (): boolean => {
    const e: Partial<typeof emptyForm> = {}
    if (!form.hindi.trim()) e.hindi = 'Hindi text is required'
    if (!form.english.trim()) e.english = 'English meaning is required'
    if (!form.explanation.trim()) e.explanation = 'Explanation is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const existing = loadUserDohe()
    const newDoha: Doha = {
      id: BASE_ID + existing.length + 1,
      hindi: form.hindi.trim(),
      english: form.english.trim(),
      meaning_hindi: form.meaning_hindi.trim(),
      explanation: form.explanation.trim(),
      theme: form.theme,
      author: 'You',
      authorSlug: 'user',
    }
    const updated = [newDoha, ...existing]
    saveUserDohe(updated)
    setUserDohe(updated)
    setPreviewId(newDoha.id)
    setForm(emptyForm)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  const handleDelete = (id: number) => {
    const updated = userDohe.filter((d) => d.id !== id)
    saveUserDohe(updated)
    setUserDohe(updated)
    if (previewId === id) setPreviewId(null)
  }

  const fieldClass = (hasError: boolean) =>
    cn(
      'w-full px-4 py-3 rounded-xl bg-white/5 border text-parchment placeholder:text-parchment/25 font-ui text-sm focus:outline-none transition-colors resize-none',
      hasError ? 'border-red-500/50 focus:border-red-400' : 'border-gold/20 focus:border-gold/50'
    )

  const themes = allThemes.slice(1) as ThemeCategory[]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/dohe"
          className="inline-flex items-center gap-2 text-parchment/50 hover:text-gold text-sm font-ui mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dohe
        </Link>
        <p className="text-gold/50 text-xs font-ui uppercase tracking-[0.25em] mb-2">Admin Feed</p>
        <h1 className="text-3xl sm:text-4xl font-english text-parchment/90 mb-2">Add New Doha</h1>
        <p className="text-parchment/40 text-sm font-ui">
          Submit a new doha — it will appear in the Dohe collection instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Hindi */}
            <div>
              <label className="block text-parchment/60 text-xs font-ui uppercase tracking-wider mb-2">
                Hindi Text <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={3}
                value={form.hindi}
                onChange={(e) => setForm({ ...form, hindi: e.target.value })}
                placeholder="दोहा यहाँ लिखें..."
                className={cn(fieldClass(!!errors.hindi), 'hindi-text text-base')}
                dir="auto"
              />
              {errors.hindi && <p className="text-red-400 text-xs mt-1">{errors.hindi}</p>}
            </div>

            {/* English */}
            <div>
              <label className="block text-parchment/60 text-xs font-ui uppercase tracking-wider mb-2">
                English Meaning <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={3}
                value={form.english}
                onChange={(e) => setForm({ ...form, english: e.target.value })}
                placeholder="English translation or meaning..."
                className={fieldClass(!!errors.english)}
              />
              {errors.english && <p className="text-red-400 text-xs mt-1">{errors.english}</p>}
            </div>

            {/* Hindi meaning */}
            <div>
              <label className="block text-parchment/60 text-xs font-ui uppercase tracking-wider mb-2">
                Hindi Explanation
              </label>
              <textarea
                rows={2}
                value={form.meaning_hindi}
                onChange={(e) => setForm({ ...form, meaning_hindi: e.target.value })}
                placeholder="हिंदी में अर्थ..."
                className={cn(fieldClass(false), 'hindi-text')}
                dir="auto"
              />
            </div>

            {/* English explanation */}
            <div>
              <label className="block text-parchment/60 text-xs font-ui uppercase tracking-wider mb-2">
                English Explanation <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={3}
                value={form.explanation}
                onChange={(e) => setForm({ ...form, explanation: e.target.value })}
                placeholder="Explain the meaning and significance..."
                className={fieldClass(!!errors.explanation)}
              />
              {errors.explanation && (
                <p className="text-red-400 text-xs mt-1">{errors.explanation}</p>
              )}
            </div>

            {/* Theme */}
            <div>
              <label className="block text-parchment/60 text-xs font-ui uppercase tracking-wider mb-2">
                Theme
              </label>
              <div className="flex flex-wrap gap-2">
                {themes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm({ ...form, theme: t })}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-ui transition-all duration-150',
                      form.theme === t
                        ? themeColors[t].badge
                        : 'border border-gold/20 text-parchment/50 hover:border-gold/40'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center gap-3 pt-2">
              <button type="submit" className="btn-gold flex-1 justify-center">
                <PlusCircle className="w-4 h-4" />
                Add Doha
              </button>
            </div>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm font-ui bg-emerald-900/20 border border-emerald-700/30 rounded-xl px-4 py-3"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Doha added! It now appears in the collection.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Preview / saved list */}
        <div className="space-y-5">
          <h2 className="text-parchment/60 text-xs font-ui uppercase tracking-wider">
            Your Submissions ({userDohe.length})
          </h2>

          {userDohe.length === 0 ? (
            <div className="border border-gold/10 rounded-2xl p-8 text-center">
              <p className="text-parchment/30 text-sm font-ui">No dohe added yet.</p>
              <p className="text-parchment/20 text-xs font-ui mt-1">
                Fill the form and hit &ldquo;Add Doha&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[680px] overflow-y-auto pr-1">
              {userDohe.map((doha) => {
                const colors = themeColors[doha.theme]
                const isPreview = previewId === doha.id
                return (
                  <motion.div
                    key={doha.id}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      'rounded-2xl border p-5 transition-all duration-200',
                      isPreview
                        ? 'border-gold/40 bg-white/5'
                        : 'border-gold/15 bg-white/3 hover:border-gold/25'
                    )}
                  >
                    {/* Hindi */}
                    <p className="hindi-doha text-parchment/90 whitespace-pre-line leading-loose mb-3 text-sm">
                      {doha.hindi}
                    </p>

                    <div className="ornate-divider mb-3">
                      <span className="text-gold/30 text-xs px-2 font-ui">✦</span>
                    </div>

                    {/* English */}
                    <p className="english-serif text-parchment/65 italic text-sm leading-relaxed mb-4">
                      &ldquo;{doha.english}&rdquo;
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className={cn('text-xs px-3 py-1 rounded-full font-ui', colors.badge)}>
                        {doha.theme}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <SpeakButton text={doha.hindi} lang="hi-IN" />
                        <CopyButton text={`${doha.hindi}\n\n"${doha.english}"\n\n— You`} />
                        <button
                          onClick={() => handleDelete(doha.id)}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-ui text-red-400/60 border border-red-900/30 hover:text-red-400 hover:border-red-700/50 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

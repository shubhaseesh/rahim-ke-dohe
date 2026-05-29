'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const STORAGE_KEY = 'rahim_gate_passed'
const GATE_DURATION_MS = 60_000  // 1 minute
const EXPIRY_DAYS = 30

function isGatePassed(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const { ts } = JSON.parse(raw) as { ts: number }
    return Date.now() - ts < EXPIRY_DAYS * 24 * 60 * 60 * 1000
  } catch {
    return false
  }
}

function markGatePassed() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }))
}

function validateInput(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return 'Please enter your email or mobile number.'
  // email
  if (trimmed.includes('@')) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(trimmed)) return 'Please enter a valid email address.'
    return null
  }
  // phone — 10 digits (Indian) or 10-15 digits international
  const digits = trimmed.replace(/[\s\-+()]/g, '')
  if (!/^\d{10,15}$/.test(digits)) return 'Please enter a valid 10-digit mobile number.'
  return null
}

export function GateModal() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isGatePassed()) return
    const timer = setTimeout(() => setVisible(true), GATE_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const err = validateInput(value)
    if (err) { setError(err); return }
    markGatePassed()
    setSubmitted(true)
    setTimeout(() => setVisible(false), 1200)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-[#1a0a06] border border-gold/30 rounded-3xl p-8 shadow-2xl">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
              </div>

              {!submitted ? (
                <>
                  <h2 className="text-parchment/90 font-english text-2xl text-center mb-2">
                    Continue Reading
                  </h2>
                  <p className="text-parchment/50 text-sm font-ui text-center mb-6 leading-relaxed">
                    You&apos;ve been enjoying Rahim&apos;s wisdom for a while.
                    Enter your email or mobile to keep reading — free, forever.
                  </p>

                  {/* Decorative doha */}
                  <div className="bg-white/3 border border-gold/10 rounded-xl p-4 mb-6 text-center">
                    <p className="hindi-doha text-parchment/70 text-sm leading-loose">
                      रहिमन धागा प्रेम का, मत तोरो चटकाय।
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => { setValue(e.target.value); setError('') }}
                        placeholder="Email or mobile number"
                        className="w-full px-4 py-3 rounded-full bg-white/5 border border-gold/20 text-parchment placeholder:text-parchment/30 font-ui text-sm focus:outline-none focus:border-gold/50 transition-colors"
                        autoFocus
                      />
                      {error && (
                        <p className="text-red-400 text-xs font-ui mt-2 pl-2">{error}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-gold justify-center py-3"
                    >
                      Continue Reading
                    </button>
                    <p className="text-parchment/25 text-xs font-ui text-center">
                      No spam. No payments. Just Rahim&apos;s wisdom.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <p className="text-gold font-english text-xl mb-2">Welcome!</p>
                  <p className="text-parchment/60 text-sm font-ui">Enjoy reading the Dohe.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useScroll, useTransform, motion, useMotionTemplate } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/writers', label: 'Writers' },
  { href: '/dohe', label: 'Dohe' },
  { href: '/feed', label: 'Feed' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95])
  const blurAmount = useTransform(scrollY, [0, 80], [0, 12])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.15])
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const bgColor = useMotionTemplate`rgba(44, 24, 16, ${bgOpacity})`
  const backdropBlur = useMotionTemplate`blur(${blurAmount}px)`
  const borderColor = useMotionTemplate`rgba(212, 175, 55, ${borderOpacity})`

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: bgColor,
          backdropFilter: backdropBlur,
          borderBottom: `1px solid`,
          borderColor: borderColor,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              <BookOpen className="w-4 h-4 text-gold" />
            </div>
            <span className="font-devanagari text-gold text-lg font-medium tracking-wide hidden sm:inline">
              रहीम के दोहे
            </span>
            <span className="font-devanagari text-gold text-base font-medium sm:hidden">
              दोहे
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-ui transition-all duration-200',
                  pathname === link.href
                    ? 'bg-gold/20 text-gold'
                    : 'text-parchment/70 hover:text-parchment hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/dohe" className="ml-2 btn-gold text-sm py-2 px-5">
              Read Dohe
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-parchment/80 hover:text-gold transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-deep-brown/95 flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-5 right-5 text-parchment/80 hover:text-gold p-2"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'text-2xl font-english transition-colors',
                pathname === link.href ? 'text-gold' : 'text-parchment/80 hover:text-gold'
              )}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </>
  )
}

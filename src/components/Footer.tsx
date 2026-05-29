import Link from 'next/link'
import { BookOpen, Mail } from 'lucide-react'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-deep-brown border-t border-gold/10 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="font-devanagari text-gold text-base">रहीम के दोहे</p>
              <p className="text-parchment/40 text-xs font-ui mt-0.5">Rahim ke Dohe</p>
              <p className="text-parchment/30 text-[11px] font-ui mt-1">by Shubhaseesh Kumar</p>
            </div>
          </div>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { href: '/', label: 'Home' },
              { href: '/writers', label: 'Writers' },
              { href: '/dohe', label: 'Dohe' },
              { href: '/biography/rahim', label: 'Biography' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-parchment/50 hover:text-gold text-sm font-ui transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/10 text-center">
          <p className="text-gold/50 text-xs font-ui uppercase tracking-wider mb-2">
            Creator
          </p>
          <p className="text-parchment/80 font-english text-base sm:text-lg mb-1">
            Shubhaseesh Kumar
          </p>
          <p className="text-parchment/45 text-sm font-ui max-w-md mx-auto mb-4 leading-relaxed">
            Built and curated this collection to share timeless Hindi wisdom — dohe, verses, and
            stories from saints and poets across centuries.
          </p>
          <p className="text-parchment/40 text-xs font-ui uppercase tracking-wider mb-3">
            Get in touch
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="mailto:shubhaseesh09@gmail.com"
              className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm font-ui transition-colors"
            >
              <Mail className="w-4 h-4" />
              shubhaseesh09@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/shubhaseesh-kumar-91749169/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm font-ui transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-parchment/30 text-xs font-ui text-center md:text-left">
            Abdul Rahim Khan-i-Khanan · 1556–1627 · One of Akbar&apos;s Nine Gems
          </p>
          <p className="text-parchment/20 text-xs font-ui text-center md:text-right">
            रहिमन धागा प्रेम का, मत तोरो चटकाय।
          </p>
        </div>
      </div>
    </footer>
  )
}

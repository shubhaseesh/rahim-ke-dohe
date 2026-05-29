import type { Metadata } from 'next'
import { Tiro_Devanagari_Hindi, Crimson_Pro, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransitionWrapper } from '@/components/PageTransitionWrapper'
import { GateModal } from '@/components/GateModal'

const tiroDevanagari = Tiro_Devanagari_Hindi({
  weight: '400',
  subsets: ['devanagari', 'latin'],
  variable: '--font-devanagari',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-english',
  display: 'swap',
  weight: ['400', '600'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rahim ke Dohe — Hindi Literature & Wisdom',
  description:
    'Explore dohe and verses from Rahim, Kabir, Tulsidas, Tagore, Gandhi, and 35+ classical Indian writers — with English translations, explanations, and biographies.',
  keywords: [
    'Rahim ke Dohe',
    'रहीम के दोहे',
    'Kabir dohe',
    'Hindi poetry',
    'Bhakti poetry',
    'Indian literature',
  ],
  authors: [{ name: 'Shubhaseesh Kumar', url: 'https://www.linkedin.com/in/shubhaseesh-kumar-91749169/' }],
  creator: 'Shubhaseesh Kumar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hi"
      className={`${tiroDevanagari.variable} ${crimsonPro.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-deep-brown min-h-screen">
        <Navbar />
        <GateModal />
        <PageTransitionWrapper>
          <main>{children}</main>
        </PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  )
}

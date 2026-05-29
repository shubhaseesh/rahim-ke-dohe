import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-devanagari text-gold text-6xl mb-4">404</p>
        <h2 className="text-parchment/80 font-english text-2xl mb-3">Page Not Found</h2>
        <p className="text-parchment/40 font-english italic mb-8">
          &ldquo;रहिमन देख बड़ेन को, लघु न दीजिये डारि।&rdquo;
        </p>
        <Link href="/" className="btn-gold">
          Return Home
        </Link>
      </div>
    </div>
  )
}

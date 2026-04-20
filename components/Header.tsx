import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🎓</span>
            <span className="text-xl font-bold text-grace-700">Grace International</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-grace-600 font-medium transition">Home</Link>
            <Link href="/programs" className="text-gray-700 hover:text-grace-600 font-medium transition">Programs</Link>
            <Link href="/team" className="text-gray-700 hover:text-grace-600 font-medium transition">Our Team</Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-grace-600 font-medium transition">Success Stories</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-grace-600 font-medium transition">Testimonials</Link>
          </nav>
          <Link href="/programs" className="hidden md:inline-block bg-grace-600 hover:bg-grace-700 text-white px-5 py-2 rounded-lg font-medium transition">
            Explore Programs
          </Link>
        </div>
      </div>
    </header>
  )
}
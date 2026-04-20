import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-grace-50 via-white to-primary-50 py-20 md:py-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-grace-100 text-grace-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ✨ Nurturing Future Leaders
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Holistic Education at{' '}
            <span className="text-grace-600">Grace International</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We prepare students for academic success in today's world, supporting them academically, socially, emotionally and spiritually from Pre-Nursery to A Levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="bg-grace-600 hover:bg-grace-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              Explore Our Programs
            </Link>
            <Link
              href="/case-studies"
              className="bg-white hover:bg-gray-50 text-grace-700 border-2 border-grace-200 px-8 py-4 rounded-lg font-semibold transition"
            >
              Success Stories
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-grace-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    </section>
  )
}
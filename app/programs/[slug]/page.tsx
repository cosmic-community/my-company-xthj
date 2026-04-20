// app/programs/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProgram } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = await getProgram(slug)

  if (!program) notFound()

  const name = getMetafieldValue(program.metadata?.name) || program.title
  const ageRange = getMetafieldValue(program.metadata?.age_range)
  const shortDesc = getMetafieldValue(program.metadata?.short_description)
  const description = getMetafieldValue(program.metadata?.description)
  const image = program.metadata?.image
  const features = program.metadata?.features

  let featuresList: string[] = []
  if (Array.isArray(features)) {
    featuresList = features.map((f) => getMetafieldValue(f)).filter(Boolean)
  } else if (typeof features === 'string' && features) {
    featuresList = features.split('\n').filter(Boolean)
  }

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom max-w-5xl">
        <Link href="/programs" className="text-grace-600 hover:text-grace-700 font-medium mb-6 inline-flex items-center gap-2">
          ← Back to Programs
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {image && (
            <div className="relative h-64 md:h-96">
              <img
                src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full h-full object-cover"
              />
              {ageRange && (
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur text-grace-700 px-4 py-2 rounded-full font-semibold shadow">
                  {ageRange}
                </div>
              )}
            </div>
          )}

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{name}</h1>
            {shortDesc && <p className="text-xl text-gray-600 mb-8 leading-relaxed">{shortDesc}</p>}

            {description && (
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {featuresList.length > 0 && (
              <div className="bg-grace-50 rounded-2xl p-6 md:p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Features</h2>
                <ul className="space-y-3">
                  {featuresList.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-grace-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
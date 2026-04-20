// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = await getCaseStudy(slug)

  if (!study) notFound()

  const title = getMetafieldValue(study.metadata?.title) || study.title
  const summary = getMetafieldValue(study.metadata?.summary)
  const content = getMetafieldValue(study.metadata?.content)
  const outcome = getMetafieldValue(study.metadata?.outcome)
  const image = study.metadata?.featured_image
  const relatedProgram = study.metadata?.related_program

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom max-w-4xl">
        <Link href="/case-studies" className="text-grace-600 hover:text-grace-700 font-medium mb-6 inline-flex items-center gap-2">
          ← Back to Success Stories
        </Link>

        <article className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {image && (
            <div className="relative h-64 md:h-96">
              <img
                src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Success Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>

            {summary && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-grace-400 pl-4">
                {summary}
              </p>
            )}

            {content && (
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}

            {outcome && (
              <div className="bg-grace-50 rounded-2xl p-6 md:p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Outcome</h2>
                <p className="text-gray-700 leading-relaxed">{outcome}</p>
              </div>
            )}

            {relatedProgram && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Related Program</p>
                <Link
                  href={`/programs/${relatedProgram.slug}`}
                  className="inline-block bg-grace-600 hover:bg-grace-700 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  {relatedProgram.title} →
                </Link>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}
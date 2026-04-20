import Link from 'next/link'
import { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const title = getMetafieldValue(study.metadata?.title) || study.title
  const summary = getMetafieldValue(study.metadata?.summary)
  const image = study.metadata?.featured_image

  return (
    <Link href={`/case-studies/${study.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {image && (
          <div className="relative h-56 overflow-hidden">
            <img
              src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start">
            Success Story
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-grace-600 transition">{title}</h3>
          {summary && <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">{summary}</p>}
          <div className="mt-4 text-grace-600 font-semibold text-sm">Read story →</div>
        </div>
      </div>
    </Link>
  )
}
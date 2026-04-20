import Link from 'next/link'
import { Program } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProgramCard({ program }: { program: Program }) {
  const name = getMetafieldValue(program.metadata?.name) || program.title
  const ageRange = getMetafieldValue(program.metadata?.age_range)
  const description = getMetafieldValue(program.metadata?.short_description)
  const image = program.metadata?.image

  return (
    <Link href={`/programs/${program.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {image && (
          <div className="relative h-56 overflow-hidden">
            <img
              src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {ageRange && (
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-grace-700 px-3 py-1 rounded-full text-sm font-semibold shadow">
                {ageRange}
              </div>
            )}
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-grace-600 transition">{name}</h3>
          {description && <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>}
          <div className="mt-4 text-grace-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
            Learn more →
          </div>
        </div>
      </div>
    </Link>
  )
}
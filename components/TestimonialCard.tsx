import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const name = getMetafieldValue(testimonial.metadata?.name) || testimonial.title
  const role = getMetafieldValue(testimonial.metadata?.role)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const photo = testimonial.metadata?.photo

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-gray-100">
      <div className="text-grace-400 text-5xl leading-none mb-4">"</div>
      {quote && <p className="text-gray-700 leading-relaxed mb-6 italic">{quote}</p>}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-grace-100 flex items-center justify-center text-grace-600 font-bold text-xl">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  )
}
import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Testimonials | Grace International School',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-grace-100 text-grace-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Testimonials
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Community Says</h1>
          <p className="text-lg text-gray-600">
            Hear from parents, students, and staff about their experience at Grace International School.
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">No testimonials available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
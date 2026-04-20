import Link from 'next/link'
import Hero from '@/components/Hero'
import ProgramCard from '@/components/ProgramCard'
import TestimonialCard from '@/components/TestimonialCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import { getPrograms, getTestimonials, getCaseStudies } from '@/lib/cosmic'

export default async function HomePage() {
  const [programs, testimonials, caseStudies] = await Promise.all([
    getPrograms(),
    getTestimonials(),
    getCaseStudies(),
  ])

  const featuredPrograms = programs.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  const featuredStudies = caseStudies.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education Beyond Academics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Grace, we believe quality education works to holistically support students in every dimension of their development.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📚', title: 'Academic Excellence', desc: 'Rigorous curriculum that prepares students for success' },
              { icon: '🤝', title: 'Social Development', desc: 'Building strong relationships and communication skills' },
              { icon: '💖', title: 'Emotional Well-being', desc: 'Nurturing emotional intelligence and resilience' },
              { icon: '🙏', title: 'Spiritual Growth', desc: 'Fostering values and character development' },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl hover:bg-grace-50 transition">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      {featuredPrograms.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Programs</h2>
                <p className="text-lg text-gray-600">From Pre-Nursery to A Levels, we guide every step of the journey</p>
              </div>
              <Link href="/programs" className="text-grace-600 hover:text-grace-700 font-semibold">View all programs →</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {featuredStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Success Stories</h2>
                <p className="text-lg text-gray-600">Real stories of growth and achievement</p>
              </div>
              <Link href="/case-studies" className="text-grace-600 hover:text-grace-700 font-semibold">View all stories →</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {featuredTestimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-grace-50 to-primary-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Our Community Says</h2>
              <p className="text-lg text-gray-600">Hear from parents, students and staff</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-grace-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-lg text-grace-100 mb-8 max-w-2xl mx-auto">
            Discover how Grace International School can support your child's journey to success.
          </p>
          <Link href="/programs" className="inline-block bg-white text-grace-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition shadow-lg">
            Explore Programs
          </Link>
        </div>
      </section>
    </>
  )
}
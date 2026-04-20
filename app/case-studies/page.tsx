import CaseStudyCard from '@/components/CaseStudyCard'
import { getCaseStudies } from '@/lib/cosmic'

export const metadata = {
  title: 'Success Stories | Grace International School',
}

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies()

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-grace-100 text-grace-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📚 Success Stories
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Success Stories</h1>
          <p className="text-lg text-gray-600">
            Discover how Grace International School has made a difference in the lives of our students.
          </p>
        </div>

        {studies.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">No success stories available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
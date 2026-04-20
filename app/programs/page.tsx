import ProgramCard from '@/components/ProgramCard'
import { getPrograms } from '@/lib/cosmic'

export const metadata = {
  title: 'Programs | Grace International School',
}

export default async function ProgramsPage() {
  const programs = await getPrograms()

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-grace-100 text-grace-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📚 Academic Programs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs</h1>
          <p className="text-lg text-gray-600">
            Comprehensive educational programs from Pre-Nursery to A Levels, supporting every stage of your child's development.
          </p>
        </div>

        {programs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">No programs available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
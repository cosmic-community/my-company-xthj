import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Team | Grace International School',
}

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-grace-100 text-grace-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            👨‍🏫 Meet Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Dedicated Team</h1>
          <p className="text-lg text-gray-600">
            Meet the passionate educators and staff who nurture our students every day.
          </p>
        </div>

        {members.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">No team members to display yet.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
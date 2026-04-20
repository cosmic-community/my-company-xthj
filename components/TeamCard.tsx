import Link from 'next/link'
import { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.full_name) || member.title
  const position = getMetafieldValue(member.metadata?.position)
  const department = getMetafieldValue(member.metadata?.department)
  const photo = member.metadata?.photo

  return (
    <Link href={`/team/${member.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        {photo ? (
          <div className="relative h-72 overflow-hidden bg-gray-100">
            <img
              src={`${photo.imgix_url}?w=600&h=700&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="h-72 bg-gradient-to-br from-grace-100 to-primary-100 flex items-center justify-center">
            <span className="text-6xl">👨‍🏫</span>
          </div>
        )}
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-grace-600 transition">{name}</h3>
          {position && <p className="text-grace-600 font-medium text-sm mt-1">{position}</p>}
          {department && <p className="text-gray-500 text-xs mt-1">{department}</p>}
        </div>
      </div>
    </Link>
  )
}
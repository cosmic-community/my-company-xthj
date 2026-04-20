// app/team/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTeamMember, getMetafieldValue } from '@/lib/cosmic'

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getTeamMember(slug)

  if (!member) notFound()

  const name = getMetafieldValue(member.metadata?.full_name) || member.title
  const position = getMetafieldValue(member.metadata?.position)
  const department = getMetafieldValue(member.metadata?.department)
  const bio = getMetafieldValue(member.metadata?.bio)
  const qualifications = getMetafieldValue(member.metadata?.qualifications)
  const email = getMetafieldValue(member.metadata?.email)
  const photo = member.metadata?.photo

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom max-w-5xl">
        <Link href="/team" className="text-grace-600 hover:text-grace-700 font-medium mb-6 inline-flex items-center gap-2">
          ← Back to Team
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            {photo ? (
              <div className="relative h-96 md:h-auto">
                <img
                  src={`${photo.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-96 md:h-auto bg-gradient-to-br from-grace-100 to-primary-100 flex items-center justify-center">
                <span className="text-8xl">👨‍🏫</span>
              </div>
            )}

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{name}</h1>
              {position && <p className="text-xl text-grace-600 font-semibold mb-1">{position}</p>}
              {department && <p className="text-gray-500 mb-6">{department}</p>}

              {bio && (
                <div
                  className="prose prose-gray max-w-none mb-6"
                  dangerouslySetInnerHTML={{ __html: bio }}
                />
              )}

              {qualifications && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Qualifications</h3>
                  <p className="text-gray-700">{qualifications}</p>
                </div>
              )}

              {email && (
                <a href={`mailto:${email}`} className="inline-block bg-grace-600 hover:bg-grace-700 text-white px-6 py-3 rounded-lg font-medium transition">
                  Contact {name.split(' ')[0]}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
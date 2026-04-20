import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🎓</span>
              <span className="text-xl font-bold text-white">Grace International</span>
            </div>
            <p className="text-sm">Preparing students for academic success through holistic education from Pre-Nursery to A Levels.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs" className="hover:text-white transition">Programs</Link></li>
              <li><Link href="/team" className="hover:text-white transition">Our Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition">Success Stories</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Our Values</h4>
            <ul className="space-y-2 text-sm">
              <li>Academic Excellence</li>
              <li>Social Development</li>
              <li>Emotional Well-being</li>
              <li>Spiritual Growth</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <p className="text-sm">Learn more about our holistic approach to education.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Grace International School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
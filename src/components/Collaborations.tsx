import { Mic, Building } from 'lucide-react';

export default function Collaborations() {
  // Content simplified and aligned with the provided copy
  const partnershipsBullets = [
    'Designing corporate wellness and fertility programs for employees',
    'Institutional collaborations for clinical training, workshops, and curriculum development',
    'Referral networks and joint initiatives to improve fertility care outcomes'
  ];

  const eventsBullets = [
    'Keynote talks, panel discussions, and interactive workshops at national and international forums',
    "Hands-on training in IVF, reproductive medicine, and women’s health for clinicians",
    'Media interviews, webinars, and articles to educate and guide patients globally'
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Collaborations & Speaking
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Leading the Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Fertility Medicine
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through strategic partnerships, international speaking engagements, and media collaborations, 
            we're shaping the future of fertility care and expanding access to quality treatment worldwide.
          </p>
        </div>

        {/* Partnerships Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Building className="text-pink-500" size={24} />
            <h3 className="text-3xl font-bold text-gray-900">Partnerships with Corporates & Institutions</h3>
          </div>

          <div className="max-w-3xl mx-auto text-gray-700">
            <p className="mb-6">Designing practical collaborations that translate fertility science into institutional impact.</p>
            <ul className="space-y-3 list-disc list-inside text-gray-600">
              {partnershipsBullets.map((b, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-pink-500 mt-1">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conferences, Workshops & Media Appearances (combined) */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Mic className="text-purple-500" size={24} />
            <h3 className="text-3xl font-bold text-gray-900">Conferences, Workshops & Media Appearances</h3>
          </div>

          <div className="max-w-3xl mx-auto text-gray-700">
            <p className="mb-6">Sharing knowledge at conferences and through media to make fertility science accessible and practical.</p>
            <ul className="space-y-3 list-disc list-inside text-gray-600">
              {eventsBullets.map((b, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-pink-500 mt-1">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*
        Research & Publications
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="text-white" size={24} />
              <h3 className="text-3xl font-bold">Research & Publications</h3>
            </div>
            <p className="text-pink-100 max-w-2xl mx-auto">
              Contributing to medical literature and advancing fertility care through research and peer-reviewed publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-pink-100">Published Papers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-pink-100">Research Studies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-pink-100">Conference Presentations</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              View Complete Publications List
            </button>
          </div>
        </div>
        */}

        {/*
        Upcoming Events
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Calendar className="text-purple-500" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Speaking Engagements</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Stay updated on upcoming conferences and events where you can learn from Dr. Johnson's expertise.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Subscribe for Event Updates
            </button>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
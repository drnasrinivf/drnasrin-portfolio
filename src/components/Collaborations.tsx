import React from 'react';
import { Users, Calendar, Mic, Award, BookOpen, Globe, Building, Video } from 'lucide-react';

export default function Collaborations() {
  const partnerships = [
    {
      name: "Harvard Medical School",
      type: "Academic Partnership",
      description: "Guest lecturer in reproductive medicine and research collaboration"
    },
    {
      name: "International Fertility Foundation",
      type: "Board Member",
      description: "Contributing to global fertility care standards and policies"
    },
    {
      name: "Corporate Wellness Programs",
      type: "Healthcare Provider",
      description: "Fertility education and services for Fortune 500 companies"
    },
    {
      name: "Medical Tourism Association",
      type: "Advisory Board",
      description: "Developing international patient care protocols and standards"
    }
  ];

  const speakingEvents = [
    {
      event: "International Fertility Conference 2024",
      location: "London, UK",
      topic: "Innovations in IVF Technology",
      type: "Keynote Speaker",
      date: "March 2024"
    },
    {
      event: "Global Women's Health Summit",
      location: "New York, USA",
      topic: "Personalized Fertility Care for International Patients",
      type: "Panel Discussion",
      date: "February 2024"
    },
    {
      event: "European Society of Human Reproduction",
      location: "Barcelona, Spain",
      topic: "Advanced Laparoscopic Techniques in Fertility Treatment",
      type: "Workshop Leader",
      date: "January 2024"
    },
    {
      event: "Asian Pacific Fertility Congress",
      location: "Singapore",
      topic: "Cultural Sensitivity in International Fertility Care",
      type: "Invited Speaker",
      date: "December 2023"
    }
  ];

  const mediaAppearances = [
    {
      outlet: "BBC Health",
      type: "Television Interview",
      topic: "Breaking Barriers in Fertility Treatment",
      date: "March 2024"
    },
    {
      outlet: "Medical News Today",
      type: "Expert Column",
      topic: "The Future of IVF Technology",
      date: "February 2024"
    },
    {
      outlet: "International Health Podcast",
      type: "Podcast Guest",
      topic: "Fertility Tourism: Opportunities and Considerations",
      date: "January 2024"
    },
    {
      outlet: "Health & Wellness Magazine",
      type: "Feature Article",
      topic: "Comprehensive Fertility Care Approach",
      date: "December 2023"
    }
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
            <h3 className="text-3xl font-bold text-gray-900">Strategic Partnerships</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{partnership.name}</h4>
                    <div className="inline-flex items-center px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-3">
                      {partnership.type}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{partnership.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking Events Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Mic className="text-purple-500" size={24} />
            <h3 className="text-3xl font-bold text-gray-900">International Speaking Events</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {speakingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-pink-500" size={16} />
                    <span className="text-sm text-pink-600 font-medium">{event.date}</span>
                  </div>
                  <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {event.type}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h4>
                <div className="flex items-center space-x-2 mb-3">
                  <Globe className="text-gray-400" size={14} />
                  <span className="text-gray-500 text-sm">{event.location}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.topic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Appearances Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Video className="text-pink-500" size={24} />
            <h3 className="text-3xl font-bold text-gray-900">Media Appearances</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaAppearances.map((appearance, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{appearance.outlet}</h4>
                  <span className="text-xs text-gray-500">{appearance.date}</span>
                </div>
                <div className="inline-flex items-center px-2 py-1 bg-white text-pink-600 rounded-md text-xs font-medium mb-2">
                  {appearance.type}
                </div>
                <p className="text-gray-600 text-sm">{appearance.topic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Publications */}
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

        {/* Upcoming Events */}
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
      </div>
    </div>
  );
}
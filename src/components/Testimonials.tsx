import React from 'react';
import { Star, Quote, Heart, Award, Globe, Users } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Dr. Johnson is simply amazing. After 3 failed IVF cycles with other doctors, she helped us achieve our dream. Her personalized approach and genuine care made all the difference. Our twin boys are now 2 years old!",
      treatment: "IVF with PGT-A",
      outcome: "Twins"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "I flew from Spain for treatment and it was the best decision ever. Dr. Johnson's expertise in endometriosis and her minimally invasive surgery gave me my life back. Now I'm 8 months pregnant naturally!",
      treatment: "Laparoscopic Surgery + Natural Conception",
      outcome: "Natural Pregnancy"
    },
    {
      id: 3,
      name: "Priya & Raj Patel",
      location: "London, UK",
      rating: 5,
      text: "We were dealing with male factor infertility and felt hopeless. Dr. Johnson's advanced ICSI technique and her team's support throughout the process were incredible. Our daughter is our miracle!",
      treatment: "ICSI",
      outcome: "Healthy Baby Girl"
    },
    {
      id: 4,
      name: "Emma Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "The online consultation process was seamless for international patients. Dr. Johnson coordinated everything perfectly for my treatment cycle. The care I received was exceptional from start to finish.",
      treatment: "IVF",
      outcome: "Successful Pregnancy"
    },
    {
      id: 5,
      name: "Fatima Al-Zahra",
      location: "Dubai, UAE",
      rating: 5,
      text: "PCOS made my journey challenging, but Dr. Johnson's holistic approach changed everything. The lifestyle guidance combined with treatment helped me conceive naturally. Forever grateful!",
      treatment: "PCOS Management",
      outcome: "Natural Conception"
    },
    {
      id: 6,
      name: "Lisa Chen",
      location: "Singapore",
      rating: 5,
      text: "Dr. Johnson's reputation brought me from Singapore. Her clinic's international patient services made everything smooth. The success speaks for itself - healthy baby boy after just one IVF cycle!",
      treatment: "IVF",
      outcome: "Healthy Baby Boy"
    }
  ];

  const achievements = [
    {
      year: "2023",
      award: "Excellence in Patient Care",
      organization: "International Fertility Association"
    },
    {
      year: "2022",
      award: "Top Fertility Specialist",
      organization: "Medical Excellence Awards"
    },
    {
      year: "2021",
      award: "Innovation in Reproductive Medicine",
      organization: "Global Health Leadership"
    },
    {
      year: "2020",
      award: "Outstanding International Care",
      organization: "World Medical Council"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Patient Reviews & Awards
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Trusted by Families
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read what our patients from around the globe say about their journey to parenthood 
            and discover the awards recognizing our commitment to excellence in fertility care.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-pink-500 text-pink-500" />
                ))}
              </div>
              <p className="text-gray-600">Overall Rating</p>
            </div>
            <div className="w-px h-16 bg-pink-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-gray-600">Patient Reviews</p>
            </div>
            <div className="w-px h-16 bg-pink-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                  ))}
                </div>
                <Quote className="text-pink-300" size={24} />
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-purple-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Globe size={12} className="mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-xs text-pink-600 font-medium">Treatment: {testimonial.treatment}</p>
                  <p className="text-xs text-purple-600 font-medium">Outcome: {testimonial.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Achievements */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-pink-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="text-pink-500" size={24} />
              <h3 className="text-3xl font-bold text-gray-900">Awards & Recognition</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence in fertility care has been recognized by leading medical organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={20} />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {achievement.year}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{achievement.award}</h4>
                <p className="text-gray-500 text-xs">{achievement.organization}</p>
              </div>
            ))}
          </div>

          {/* International Recognition */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
                <p className="text-gray-600 text-sm">Featured in international medical journals and conferences</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Patient Advocacy</h4>
                <p className="text-gray-600 text-sm">Board member of International Patient Care Association</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Excellence Standard</h4>
                <p className="text-gray-600 text-sm">Certified by Global Healthcare Excellence Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
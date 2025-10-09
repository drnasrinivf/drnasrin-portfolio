import React from 'react';
import { Star, Quote, Award, Globe } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Patient Name",
      location: "India",
      rating: 5,
      text: "Simple lifestyle changes, consistent medical guidance, and the right fertility plan helped us achieve what we had been waiting for. We are grateful for this journey and our little miracle",
      treatment: "ovulation induction with IUI",
      outcome: "Pregnancy achieved on second IUI cycle"
    },
    {
      id: 2,
      name: "Patient Name",
      location: "India",
      rating: 5,
      text: "After repeated failures and the fear of losing hope, we finally experienced the joy of parenthood with our own gametes. This journey has been nothing short of a miracle for us.",
      treatment: "Exosome therapy via laparoscopy",
      outcome: "successful pregnancy"
    },
    {
      id: 3,
      name: "Patient Name",
      location: "India",
      rating: 5,
      text: "From being told we had no chance to holding our twins, this journey has been a life-changing miracle. With the right guidance and persistence, hope turned into reality",
      treatment: "IVF + Embryo transfer in natural cycle",
      outcome: "Healthy Baby Girl"
    },
    {
      id: 4,
      name: "Patient Name",
      location: "India",
      rating: 5,
      text: "After years of waiting and failed attempts at adoption, surrogacy gave us hope and joy we never imagined possible. Today, we hold our own child and our hearts are full.",
      treatment: "Surrogacy using couple’s own gametes (eggs and sperms)",
      outcome: "Successful pregnancy through surrogacy"
    },
    {
      id: 5,
      name: "Patient Name",
      location: "India",
      rating: 5,
      text: "After repeated heartbreaks, we finally found the right treatment path. Today, we hold our baby boy in our arms, and it feels like a dream come true",
      treatment: "IVF + PGT",
      outcome: "Successful pregnancy achieved"
    },
    // {
    //   id: 6,
    //   name: "Lisa Chen",
    //   location: "Singapore",
    //   rating: 5,
    //   text: "Dr. Johnson's reputation brought me from Singapore. Her clinic's international patient services made everything smooth. The success speaks for itself - healthy baby boy after just one IVF cycle!",
    //   treatment: "IVF",
    //   outcome: "Healthy Baby Boy"
    // }
  ];

  const achievements = [
    {
      year: "",
      award: "Medal winner for honours in MBBS",
      organization: ""
    },
    {
      year: "2016",
      award: "Best performing postgraduate",
      organization: "Madras Medical College"
    },
    {
      year: "2017",
      award: "Winner of the Usha Krishna Award in Gynaec Oncology",
      organization: ""
    },
    {
      year: "2023",
      award: "Award for Clinical Excellence in Gynaecology",
      organization: "Society for Women’s Welfare, Chennai"
    },
    {
      year: "",
      award: "Most sought-after gynaecologist for IVF in Chennai",
      organization: ""
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
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 sm:p-8 border border-pink-100 w-full max-w-md mx-auto">
            <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-pink-500 text-pink-500" />
                ))}
              </div>
              <p className="text-gray-600 text-xs sm:text-base">Overall Rating</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-pink-200"></div>
            <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-gray-600 text-xs sm:text-base">Patient Reviews</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-pink-200"></div>
            <div className="text-center w-full sm:w-auto">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-gray-600 text-xs sm:text-base">Countries</p>
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
          
        </div>
      </div>
    </div>
  );
}
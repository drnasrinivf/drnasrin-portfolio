import React from 'react';
import drnasrin from '../../drnasrin.jpeg';
import { Calendar, Award, Users, MapPin, Video, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
                  Leading Fertility Specialist
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Expert Care for Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Fertility Journey
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
               Award-Winning As a fertility Specialist with over 15 years of experience, 
               I've had the privilege of assisting families all over the world in realising their dream of parenthood.

              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  15+
                </div>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  5000+
                </div>
                <p className="text-gray-600 text-sm">Happy Families</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-gray-600 text-sm">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  95%
                </div>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('consultation')}
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Calendar size={20} />
                <span>Book Free Consultation</span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-center space-x-3 border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-xl font-medium hover:bg-pink-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Users size={20} />
                <span>Explore Services</span>
              </button>
            </div>

            {/* International Focus */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Video className="text-pink-500" size={16} />
                <span>Online Consultations Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-purple-500" size={16} />
                <span>International Patients Welcome</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-pink-500" size={16} />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image Placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <img
                  src={drnasrin}
                  alt="Dr. Nasrin Hasan"
                  className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-pink-300"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-purple-100">
                <div className="flex items-center space-x-2">
                  <Award className="text-pink-500" size={20} />
                  <div>
                    <p className="font-semibold text-sm">Award Winner</p>
                    <p className="text-xs text-gray-500">Excellence in Care 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-purple-100">
                <div className="flex items-center space-x-2">
                  <Users className="text-purple-500" size={20} />
                  <div>
                    <p className="font-semibold text-sm">Global Reach</p>
                    <p className="text-xs text-gray-500">50+ Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
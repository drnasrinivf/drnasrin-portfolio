import React from 'react';
import { Award, BookOpen, Heart, Users, Globe, Stethoscope } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              About Dr. Nasrin Hasan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Your Trusted Partner in
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Fertility & Wellness
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to helping families worldwide achieve their dreams of parenthood through 
            compassionate care, cutting-edge treatments, and personalized attention.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My Journey & Story</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Hi, I’m Dr. Nasrin, a fertility specialist and Founder of Eva IVF & Women’s Centre in Chennai. 
                With 15+ years of experience in reproductive medicine, IVF, ICSI, IUI, and fertility preservation, 
                I have helped couples from India and abroad achieve their dream of parenthood. My training at Madras Medical College, 
                along with advanced expertise in reproductive endocrinology, andrology, and minimal access surgery, ensures world-class care with compassion.

              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Becoming a doctor was my calling. Becoming an entrepreneur was my courage. But helping people become parents that’s my purpose. 
                Eva IVF was built not just as a fertility clinic, but as a safe space for hope. Fertility care is more than science, it is emotional,
                 personal, and deeply human. Every couple who walks through our doors carries a unique story, and those stories shape the way we care.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Mission & Values</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Heart className="text-pink-500 mt-1" size={16} />
                  <p className="text-gray-600 text-sm text-justify">
                    <strong>Mission</strong> My mission is to help couples worldwide find hope and clarity in their fertility journey. Through advanced treatments like IVF, ICSI, IUI, and fertility preservation, I provide medical expertise with a personal touch. Every patient across the globe deserves care that balances science with compassion
                  </p>
                </div>
                {/* <div className="flex items-start space-x-3">
                  <Globe className="text-purple-500 mt-1" size={16} />
                  <p className="text-gray-600 text-sm text-justify">
                    <strong>Global Accessibility:</strong> Quality fertility care should be accessible to patients worldwide.
                  </p>
                </div> */}
                <div className="flex items-start space-x-3">
                  <Stethoscope className="text-pink-500 mt-1" size={16} />
                  <p className="text-gray-600 text-sm">
                    <strong>Vission</strong> My vision is to be recognised internationally as a trusted fertility specialist who combines reproductive medicine with empathy. I aim to make Eva IVF & Women’s Centre a global destination for families seeking IVF treatment, reproductive care, and supportive guidance turning the dream of parenthood into reality, no matter where the journey begins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Qualifications & Achievements */}
          <div className="space-y-8">
            {/* Qualifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="text-pink-500" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Qualifications & Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Madras Medical College (MMC)</h4>
                  <p className="text-gray-600 text-sm">MS obstetrics and gynecology, Obstetrics and Gynecology Residency Program</p>
                  <p className="text-gray-500 text-sm">2013 - 2016</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Madras Medical College (MMC)</h4>
                  <p className="text-gray-600 text-sm">Bachelor of Medicine, Bachelor of Surgery - MBBS, Medicine</p>
                  <p className="text-gray-500 text-sm">2005 - 2010</p>
                </div>
                {/* <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Certifications</h4>
                  <p className="text-gray-600 text-sm">Board Certified - Obstetrics & Gynecology</p>
                  <p className="text-gray-500 text-sm">Fellow, Royal College of Obstetricians</p>
                </div> */}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-white" size={24} />
                <h3 className="text-2xl font-bold">Awards & Recognition</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2016</div>
                  <p className="text-sm opacity-90">Medal winner for Honours in MBBS</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2016</div>
                  <p className="text-sm opacity-90">Best Performing Postgraduate<br/>Madras Medical College</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2017</div>
                  <p className="text-sm opacity-90">Winner of the Usha Krishna Award in Gynaec Oncology</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2023</div>
                  <p className="text-sm opacity-90">Award for Clinical Excellence in Gynaecology<br/>Society for Women’s Welfare, Chennai</p>
                </div>
                <div className="text-center col-span-2">
                  <div className="text-2xl font-bold mb-1">—</div>
                  <p className="text-sm opacity-90">Most sought-after gynaecologist for IVF in Chennai</p>
                </div>
              </div>
            </div>

            {/* International Focus */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="text-purple-600" size={20} />
                <h4 className="text-lg font-bold text-gray-900">International Expertise</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4 text-justify">
                Proudly serving patients from over 50 countries with multilingual support, 
                cultural sensitivity, and comprehensive care coordination.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-purple-600 text-xs font-medium">English</span>
                <span className="px-3 py-1 bg-white rounded-full text-purple-600 text-xs font-medium">Spanish</span>
                <span className="px-3 py-1 bg-white rounded-full text-purple-600 text-xs font-medium">French</span>
                <span className="px-3 py-1 bg-white rounded-full text-purple-600 text-xs font-medium">Arabic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
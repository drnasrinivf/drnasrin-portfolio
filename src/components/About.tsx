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
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of dedicated practice in reproductive medicine, I have had the privilege 
                of helping thousands of families from around the world realize their dreams of parenthood. 
                My journey began with a passion for women's health and has evolved into specializing in 
                fertility treatments, IVF, and comprehensive gynecological care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Having completed my medical degree from Harvard Medical School and specialized training 
                in reproductive endocrinology, I believe in combining evidence-based medicine with 
                compassionate, personalized care. Each patient's journey is unique, and I am committed 
                to providing the highest level of support throughout their fertility journey.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Mission & Values</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Heart className="text-pink-500 mt-1" size={16} />
                  <p className="text-gray-600 text-sm">
                    <strong>Compassionate Care:</strong> Every patient deserves empathy, understanding, and personalized attention.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="text-purple-500 mt-1" size={16} />
                  <p className="text-gray-600 text-sm">
                    <strong>Global Accessibility:</strong> Quality fertility care should be accessible to patients worldwide.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Stethoscope className="text-pink-500 mt-1" size={16} />
                  <p className="text-gray-600 text-sm">
                    <strong>Excellence in Treatment:</strong> Combining latest medical advances with proven methodologies.
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
                  <h4 className="font-semibold text-gray-900">Medical Education</h4>
                  <p className="text-gray-600 text-sm">MD - Harvard Medical School, Boston</p>
                  <p className="text-gray-500 text-sm">Summa Cum Laude, 2005</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Specialization</h4>
                  <p className="text-gray-600 text-sm">Fellowship in Reproductive Endocrinology</p>
                  <p className="text-gray-500 text-sm">Johns Hopkins Hospital, 2008</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Certifications</h4>
                  <p className="text-gray-600 text-sm">Board Certified - Obstetrics & Gynecology</p>
                  <p className="text-gray-500 text-sm">Fellow, Royal College of Obstetricians</p>
                </div>
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
                  <div className="text-2xl font-bold mb-1">2023</div>
                  <p className="text-sm opacity-90">Excellence in Patient Care</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2022</div>
                  <p className="text-sm opacity-90">Top Fertility Specialist</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2021</div>
                  <p className="text-sm opacity-90">Innovation in IVF</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2020</div>
                  <p className="text-sm opacity-90">Global Healthcare Leader</p>
                </div>
              </div>
            </div>

            {/* International Focus */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="text-purple-600" size={20} />
                <h4 className="text-lg font-bold text-gray-900">International Expertise</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
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
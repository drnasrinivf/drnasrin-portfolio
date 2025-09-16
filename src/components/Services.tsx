import React, { useState } from 'react';
import { Heart, Baby, Microscope, Stethoscope, Activity, ChevronRight, Users, Award, Calendar, MapPin } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState('infertility');

  const services = [
    {
      id: 'infertility',
      title: 'Infertility Treatment',
      icon: Heart,
      description: 'Comprehensive evaluation and treatment for couples struggling with infertility',
      details: 'Our infertility program offers personalized treatment plans using the latest diagnostic tools and evidence-based approaches. We provide comprehensive fertility assessments, hormonal evaluations, and advanced reproductive technologies.',
      treatments: ['Fertility Assessment', 'Ovulation Induction', 'Hormonal Therapy', 'Male Factor Treatment'],
      successRate: '85%',
      duration: '3-12 months'
    },
    {
      id: 'ivf',
      title: 'IVF Treatment',
      icon: Baby,
      description: 'Advanced In Vitro Fertilization with cutting-edge technology and personalized protocols',
      details: 'Our IVF program combines state-of-the-art laboratory facilities with personalized treatment protocols. We offer fresh and frozen embryo transfers, preimplantation genetic testing, and comprehensive support throughout the process.',
      treatments: ['Fresh IVF Cycles', 'Frozen Embryo Transfer', 'PGT Testing', 'Blastocyst Culture'],
      successRate: '75%',
      duration: '2-4 months'
    },
    {
      id: 'iui',
      title: 'IUI Treatment',
      icon: Activity,
      description: 'Intrauterine Insemination for unexplained infertility and mild male factor issues',
      details: 'IUI is a minimally invasive fertility treatment that increases the chances of conception by placing specially prepared sperm directly into the uterus. This treatment is often recommended for couples with unexplained infertility.',
      treatments: ['Natural Cycle IUI', 'Stimulated IUI', 'Donor Sperm IUI', 'Timing Optimization'],
      successRate: '65%',
      duration: '1-6 cycles'
    },
    {
      id: 'gynecology',
      title: 'Gynecological Care',
      icon: Stethoscope,
      description: 'Comprehensive women\'s health services and routine gynecological care',
      details: 'Complete gynecological services including routine check-ups, preventive care, treatment of gynecological conditions, and management of reproductive health issues throughout all stages of life.',
      treatments: ['Annual Exams', 'PCOS Management', 'Endometriosis Care', 'Menstrual Disorders'],
      successRate: '95%',
      duration: 'Ongoing'
    },
    {
      id: 'laparoscopy',
      title: 'Laparoscopic Surgery',
      icon: Microscope,
      description: 'Minimally invasive surgical procedures for fertility enhancement and gynecological conditions',
      details: 'Advanced laparoscopic techniques for treating endometriosis, fibroids, ovarian cysts, and tubal blockages. Minimally invasive approach ensures faster recovery and better outcomes.',
      treatments: ['Endometriosis Surgery', 'Fibroid Removal', 'Tubal Surgery', 'Ovarian Cysts'],
      successRate: '90%',
      duration: '1-3 hours'
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Comprehensive Fertility &
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Gynecological Care
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advanced treatments and personalized care plans designed to help you achieve your 
            family planning goals with the highest success rates and patient satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Services</h3>
              <div className="space-y-2">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                        activeService === service.id
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                          : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium text-left flex-1">{service.title}</span>
                      <ChevronRight size={16} className={`transition-transform ${
                        activeService === service.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            {activeServiceData && (
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <activeServiceData.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{activeServiceData.title}</h3>
                      <p className="text-pink-100">{activeServiceData.description}</p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{activeServiceData.successRate}</div>
                      <p className="text-pink-100 text-sm">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{activeServiceData.duration}</div>
                      <p className="text-pink-100 text-sm">Duration</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <p className="text-pink-100 text-sm">Support</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Treatment Details</h4>
                      <p className="text-gray-600 leading-relaxed">{activeServiceData.details}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Treatment Options</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activeServiceData.treatments.map((treatment, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-gray-700 font-medium text-sm">{treatment}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* International Features */}
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <MapPin className="text-pink-500" size={20} />
                        <span>International Patient Services</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Users className="text-purple-500" size={16} />
                          <span className="text-gray-600 text-sm">Dedicated Support Team</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="text-pink-500" size={16} />
                          <span className="text-gray-600 text-sm">Flexible Scheduling</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="text-purple-500" size={16} />
                          <span className="text-gray-600 text-sm">Insurance Coordination</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-8 rounded-xl font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        Schedule Consultation for {activeServiceData.title}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
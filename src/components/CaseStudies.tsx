import React, { useState } from 'react';
import { Heart, Baby, Users, Star, ChevronLeft, ChevronRight, Award, Clock, MapPin } from 'lucide-react';

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "PCOS, Irregular Cycles, Male Factor (Motility Issues)",
      patientInfo: "Patient Name, India",
      challenge: "Erratic lifestyle due to frequent night shifts, rapid weight gain, irregular periods, PCOS, and reduced semen motility",
      treatment: "Lifestyle counselling, structured diet with adequate protein and fibre, supervised strength training, husband’s break from night shifts, antioxidant supplements, ovulation induction with IUI",
      outcome: "Pregnancy achieved on second IUI cycle, wife lost 7 kg, thyroid and prolactin levels normalised",
      duration: "6 months",
      testimonial: "Simple lifestyle changes, consistent medical guidance, and the right fertility plan helped us achieve what we had been waiting for. We are grateful for this journey and our little miracle.",
      image: "couple-with-baby",
      tags: ["IVF", "PGT-A", "Unexplained Infertility"]
    },
    {
      id: 2,
      title: "Low Ovarian Reserve, Poor Egg Quality (AMH 0.6 ng/ml)",
      patientInfo: "Patient Name, Spain",
      challenge: "Multiple failed IVF cycles with no embryo formation, advised egg donation but not acceptable due to religious beliefs",
      treatment: "Novel agents for egg quality improvement, karyotyping and genetic work-up, bone marrow harvesting, mesenchymal stem cell injection and exosome therapy via laparoscopy, individualized ovarian stimulation, embryo pooling, and PGT-A",
      outcome: "Singleton euploid embryo transfer resulted in successful pregnancy and live birth",
      duration: "14 months",
      testimonial: "After repeated failures and the fear of losing hope, we finally experienced the joy of parenthood with our own gametes. This journey has been nothing short of a miracle for us.",
      image: "happy-mother",
      tags: ["Endometriosis", "Laparoscopy", "IVF"]
    },
    {
      id: 3,
      title: "Azoospermia (No Sperms in Semen), Male Factor Infertility",
      patientInfo: "Patient Name, UAE",
      challenge: "Labelled azoospermic with negligible hope for own genetic child, advised donor sperm program, tried Ayurvedic, Unani, and hormonal treatments without success",
      treatment: "Lifestyle transformation with intensive weight loss, empirical recombinant injections, IVF stimulation for wife, Micro-TESE for husband, endometrial receptivity assay, and personalised embryo transfer in natural cycle",
      outcome: "Embryos formed with husband’s own sperms, twins conceived after personalised transfer, healthy boy and girl delivered preterm, now growing into thriving toddlers",
      duration: "20 months",
      testimonial: "From being told we had no chance to holding our twins, this journey has been a life-changing miracle. With the right guidance and persistence, hope turned into reality.",
      image: "pregnant-woman",
      tags: ["PCOS", "Lifestyle", "IUI"]
    },
    {
      id: 4,
      title: "Infantile Uterus (Congenital Absence of Functional Uterus)",
      patientInfo: "Patient Name, UK",
      challenge: "Married for 13 years, unable to conceive due to absent uterus, initial decision to live child-free, attempted adoption but faced long waiting lists and stringent regulations",
      treatment: "Surrogacy using couple’s own gametes (eggs and sperms), with comprehensive legal, ethical, and counselling processes in place",
      outcome: "Successful pregnancy through surrogacy, couple welcomed their own genetic child after 13 years of marriage",
      duration: "2 Years",
      testimonial: "After years of waiting and failed attempts at adoption, surrogacy gave us hope and joy we never imagined possible. Today, we hold our own child and our hearts are full.",
      image: "family-twins",
      tags: ["Male Factor", "ICSI", "Twins"]
    },
    {
      id: 5,
      title: "Recurrent Pregnancy Loss (RPL)",
      patientInfo: "Patient Name, UK",
      challenge: "Four consecutive pregnancy losses, basic investigations and genetic/immunological work-up normal, hidden cause found to be related to HLA system and immune rejection of embryos",
      treatment: "Genetic counselling, IVF with Preimplantation Genetic Testing (PGT), and Lymphocyte Immunisation Therapy (LIT)",
      outcome: "Successful pregnancy achieved, carried to term, healthy baby boy delivered",
      duration: "16 months",
      testimonial: "After repeated heartbreaks, we finally found the right treatment path. Today, we hold our baby boy in our arms, and it feels like a dream come true.",
      image: "family-twins",
      tags: ["Male Factor", "ICSI", "Twins"]
    },
    {
      id: 6,
      title: "Male Factor Infertility Success",
      patientInfo: "James & Emma, UK",
      challenge: "Severe male factor infertility, low sperm count",
      treatment: "ICSI with advanced sperm selection",
      outcome: "Successful fertilization, healthy twin pregnancy",
      duration: "6 months",
      testimonial: "We were told our chances were very low, but Dr. Johnson's advanced techniques gave us twins! We couldn't be happier.",
      image: "family-twins",
      tags: ["Male Factor", "ICSI", "Twins"]
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[activeCase];

  return (
    <div className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Real Families,
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Real Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how personalized treatment plans and cutting-edge medical care have helped 
            thousands of families from around the world achieve their dreams of parenthood.
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Image Placeholder */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Baby className="text-white" size={64} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentCase.patientInfo}</h3>
                  <p className="text-gray-600">{currentCase.title}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {currentCase.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-purple-600 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Heart className="text-pink-500" size={20} />
                      <h4 className="text-lg font-bold text-gray-900">Challenge</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{currentCase.challenge}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="text-purple-500" size={20} />
                      <h4 className="text-lg font-bold text-gray-900">Treatment Approach</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{currentCase.treatment}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Star className="text-pink-500" size={20} />
                      <h4 className="text-lg font-bold text-gray-900">Successful Outcome</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{currentCase.outcome}</p>
                  </div>

                  {/* Treatment Duration */}
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                    <Clock className="text-purple-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Treatment Duration</p>
                      <p className="font-bold text-gray-900">{currentCase.duration}</p>
                    </div>
                  </div>

                  {/* Patient Testimonial */}
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">"</div>
                      <p className="italic flex-1">{currentCase.testimonial}</p>
                    </div>
                    <p className="text-right text-pink-100 text-sm mt-3">— {currentCase.patientInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCase}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-purple-100 flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextCase}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-purple-100 flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Case Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeCase
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              5000+
            </div>
            <p className="text-gray-600">Success Stories</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-gray-600">Countries</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
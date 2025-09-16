import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Globe, Clock, CreditCard, Heart } from 'lucide-react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What makes your clinic different from others?",
          answer: "Our clinic combines cutting-edge technology with personalized care, offering comprehensive fertility treatments with a focus on international patients. We provide multilingual support, cultural sensitivity, and coordinate all aspects of care for patients traveling from abroad. Our success rates are among the highest globally, and we offer both online and in-person consultations."
        },
        {
          question: "What is your success rate for fertility treatments?",
          answer: "Our overall success rates are exceptional: IVF success rate of 75%, IUI success rate of 65%, and an overall patient satisfaction rate of 95%. Success rates vary based on individual factors such as age, diagnosis, and treatment type. We provide personalized success rate estimates during your consultation based on your specific situation."
        }
      ]
    },
    {
      title: "International Patients",
      icon: Globe,
      questions: [
        {
          question: "Do you accept international patients?",
          answer: "Yes, we welcome patients from around the world! We have extensive experience treating patients from over 50 countries. Our international patient services include visa support documentation, airport pickup coordination, hotel recommendations, interpreter services, and comprehensive care coordination throughout your treatment."
        },
        {
          question: "What languages do you speak?",
          answer: "Our team speaks English, Spanish, French, and Arabic fluently. We also have access to professional medical interpreters for other languages as needed. All medical documents can be translated into your preferred language, and we ensure clear communication throughout your treatment journey."
        },
        {
          question: "How long do I need to stay for treatment?",
          answer: "The duration depends on your treatment type: Initial consultation and assessment: 2-3 days, IUI treatment: 5-7 days, Fresh IVF cycle: 2-3 weeks, Frozen embryo transfer: 1 week. We provide detailed timelines during your consultation and can often coordinate multiple procedures to minimize your time away from home."
        }
      ]
    },
    {
      title: "Treatment & Procedures",
      icon: Heart,
      questions: [
        {
          question: "What fertility treatments do you offer?",
          answer: "We offer comprehensive fertility treatments including: Fertility assessment and diagnosis, Ovulation induction and monitoring, IUI (Intrauterine Insemination), IVF (In Vitro Fertilization), ICSI (Intracytoplasmic Sperm Injection), PGT-A (Preimplantation Genetic Testing), Frozen embryo transfer, Egg and sperm donation programs, Laparoscopic surgery for endometriosis and fibroids."
        },
        {
          question: "How do I know which treatment is right for me?",
          answer: "The best treatment depends on your specific diagnosis, age, medical history, and personal preferences. During your initial consultation, we'll conduct a comprehensive fertility assessment including medical history review, physical examination, and necessary diagnostic tests. Based on these results, we'll develop a personalized treatment plan tailored to your needs and goals."
        },
        {
          question: "Do you offer online consultations?",
          answer: "Yes! We offer comprehensive online consultations via secure video conferencing. This is perfect for international patients who want to discuss their options before traveling. Online consultations include medical history review, treatment planning, test result discussions, and follow-up appointments. The initial online consultation is free for international patients."
        }
      ]
    },
    {
      title: "Costs & Insurance",
      icon: CreditCard,
      questions: [
        {
          question: "What are the costs for fertility treatments?",
          answer: "Treatment costs vary depending on the specific procedures needed. We provide transparent pricing with no hidden fees: Initial consultation: $150 (applied toward treatment costs), IUI: $800-1,200 per cycle, IVF: $8,000-12,000 per cycle, Additional services like PGT-A, medication, and monitoring are priced separately. We offer package deals for international patients and accept various payment methods."
        },
        {
          question: "Do you accept insurance?",
          answer: "We work with many international insurance providers and can assist with insurance claim preparation. We also offer financing options and payment plans to make treatment more accessible. Our international patient coordinator will help verify your insurance coverage and explore all financial options available to you."
        }
      ]
    },
    {
      title: "Scheduling & Process",
      icon: Clock,
      questions: [
        {
          question: "How do I schedule an appointment?",
          answer: "You can schedule an appointment through our website, by phone, or email. For international patients, we recommend starting with an online consultation to discuss your needs and plan your visit. Our international patient coordinator will assist with scheduling, travel coordination, and all necessary arrangements."
        },
        {
          question: "What should I bring to my first appointment?",
          answer: "Please bring: Previous medical records and test results, List of current medications, Insurance information, Partner's medical information (if applicable), List of questions or concerns. For international patients, we'll also need passport information for documentation purposes and can assist with any translation needs."
        },
        {
          question: "How quickly can treatment begin?",
          answer: "Timeline varies based on your specific situation and treatment needs: Online consultation: Usually within 1-2 weeks, In-person consultation: 2-4 weeks, Treatment start: Can often begin within 1-2 cycles after consultation. For urgent cases or time-sensitive situations, we can often accommodate expedited scheduling. We understand that international patients may have limited travel windows and work to accommodate your schedule."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqId = categoryIndex * 100 + questionIndex;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Your Questions
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Answered
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about fertility treatments, international patient services, 
            and what to expect during your journey with us.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <category.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Questions */}
              <div className="divide-y divide-purple-100">
                {category.questions.map((faq, questionIndex) => {
                  const faqId = categoryIndex * 100 + questionIndex;
                  const isOpen = openFAQ === faqId;

                  return (
                    <div key={questionIndex} className="p-6">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full flex items-center justify-between text-left group"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors pr-4">
                          {faq.question}
                        </h4>
                        <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : ''
                        }`}>
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="mt-4 pr-12">
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact for More Questions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
            <HelpCircle className="mx-auto mb-4 text-pink-500" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our international patient coordinators 
              are here to help with any questions about fertility treatments, travel arrangements, 
              or our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-pink-500 text-pink-600 px-8 py-3 rounded-xl font-medium hover:bg-pink-50 transition-all duration-300 transform hover:-translate-y-1">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
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

        {/* ...existing code... */}
      </div>
    </div>
  );
}
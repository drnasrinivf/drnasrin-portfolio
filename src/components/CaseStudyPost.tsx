import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudiesData';
import { Heart, Award, Star, Clock, Baby } from 'lucide-react';

export default function CaseStudyPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudiesData.find(cs => String(cs.id) === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
          <button onClick={() => navigate(-1)} className="px-6 py-2 bg-pink-500 text-white rounded-lg">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <button onClick={() => navigate(-1)} className="mb-8 px-4 py-2 bg-pink-500 text-white rounded-lg">Back to Case Studies</button>
        <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center mb-4">
              <Baby className="text-white" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{caseStudy.title}</h2>
            <h3 className="text-lg text-gray-600 mb-2">{caseStudy.patientInfo}</h3>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {caseStudy.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white rounded-full text-purple-600 text-sm font-medium">{tag}</span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Heart className="text-pink-500" size={20} />
                <h4 className="text-lg font-bold text-gray-900">Challenge</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Award className="text-purple-500" size={20} />
                <h4 className="text-lg font-bold text-gray-900">Treatment Approach</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">{caseStudy.treatment}</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Star className="text-pink-500" size={20} />
                <h4 className="text-lg font-bold text-gray-900">Successful Outcome</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">{caseStudy.outcome}</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-100">
              <Clock className="text-purple-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Treatment Duration</p>
                <p className="font-bold text-gray-900">{caseStudy.duration}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">"</div>
                <p className="italic flex-1">{caseStudy.testimonial}</p>
              </div>
              <p className="text-right text-pink-100 text-sm mt-3">— {caseStudy.patientInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

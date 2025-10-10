import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { caseStudiesDetails } from '../data/caseStudiesData';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowLeft, Tag, BookOpen, Heart, Stethoscope, Baby } from 'lucide-react';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudiesDetails.find(cs => cs.id === Number(id));

  const goToSection = (sectionId: string) => {
    const maxAttempts = 20;
    let attempts = 0;
    navigate('/');

    const tryScroll = () => {
      attempts += 1;
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 150);
      }
    };

    setTimeout(tryScroll, 150);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h2>
          <button onClick={() => navigate('/')} className="text-pink-600 hover:text-purple-600 font-medium">Return to Home</button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fertility':
        return <Heart className="text-pink-500" size={32} />;
      case 'treatments':
        return <Stethoscope className="text-purple-500" size={32} />;
      case 'wellness':
        return <Baby className="text-pink-500" size={32} />;
      case 'international':
        return <BookOpen className="text-purple-500" size={32} />;
      default:
        return <BookOpen className="text-pink-500" size={32} />;
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.excerpt,
    "author": caseStudy.author,
    "datePublished": caseStudy.date,
    "url": `https://yourdomain.com/case-study/${caseStudy.id}`
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => goToSection('case-studies')} className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Case Studies</span>
          </button>

          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center space-x-2">
              <Tag size={16} className="text-pink-500" />
              <span className="text-sm text-pink-600 font-medium capitalize">{caseStudy.category.replace('-', ' ')}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center space-x-2 text-gray-500">
              <Clock size={16} />
              <span className="text-sm">{caseStudy.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{caseStudy.title}</h1>

          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2"><User size={18} /><span>{caseStudy.author}</span></div>
            <div className="flex items-center space-x-2"><Calendar size={18} /><span>{caseStudy.date}</span></div>
          </div>

          <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl h-72 flex items-center justify-center mb-12">
            <div className="text-center">
              {getCategoryIcon(caseStudy.category)}
              <p className="text-gray-700 font-medium mt-4">Case Study Image</p>
            </div>
          </div>
        </div>
      </div>

      <Helmet>
        <title>{caseStudy.title} | Dr. Nasrin Hasan</title>
        <meta name="description" content={caseStudy.excerpt.slice(0, 150)} />
        <link rel="canonical" href={`https://yourdomain.com/case-study/${caseStudy.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.excerpt.slice(0, 150)} />
        <meta property="og:url" content={`https://yourdomain.com/case-study/${caseStudy.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={caseStudy.title} />
        <meta name="twitter:description" content={caseStudy.excerpt.slice(0, 150)} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">{caseStudy.excerpt}</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            {caseStudy.content.map((section, index) => (
              <div key={index}>
                {section.type === 'heading' && (
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.text}</h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="mb-4 leading-relaxed">{section.text}</p>
                )}
                {section.type === 'list' && (
                  <ul className="list-disc pl-6 space-y-2 mb-4">{section.items?.map((item, i) => <li key={i}>{item}</li>)}</ul>
                )}
                {section.type === 'quote' && (
                  <blockquote className="border-l-4 border-pink-500 pl-6 py-4 my-6 bg-pink-50 rounded-r-lg">
                    <p className="text-gray-700 italic">{section.text}</p>
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
              <p className="text-gray-600 mb-6">Schedule a consultation with Dr. Nasrin Hasan to discuss a personalised fertility treatment plan.</p>
              <button onClick={() => goToSection('consultation')} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">Book Consultation</button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => goToSection('case-studies')} className="inline-flex items-center space-x-2 text-pink-600 hover:text-purple-600 font-medium transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Case Studies</span>
          </button>
        </div>
      </div>
    </div>
  );
}

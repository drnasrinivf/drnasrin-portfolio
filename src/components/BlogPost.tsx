import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Heart, Baby, Stethoscope, BookOpen, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-pink-600 hover:text-purple-600 font-medium"
          >
            Return to Home
          </button>
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

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Articles</span>
          </button>

          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center space-x-2">
              <Tag size={16} className="text-pink-500" />
              <span className="text-sm text-pink-600 font-medium capitalize">
                {post.category.replace('-', ' ')}
              </span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center space-x-2 text-gray-500">
              <Clock size={16} />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl h-96 flex items-center justify-center mb-12">
            <div className="text-center">
              {getCategoryIcon(post.category)}
              <p className="text-gray-700 font-medium mt-4">Article Featured Image</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            {post.content.map((section, index) => (
              <div key={index}>
                {section.type === 'heading' && (
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {section.text}
                  </h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="mb-4 leading-relaxed">
                    {section.text}
                  </p>
                )}
                {section.type === 'list' && (
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    {section.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation with Dr. Sarah Johnson to discuss your personalized fertility treatment plan.
              </p>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 text-pink-600 hover:text-purple-600 font-medium transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </button>
        </div>
      </div>
    </div>
  );
}

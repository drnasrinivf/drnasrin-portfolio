import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, BookOpen, Heart, Baby, Stethoscope, Tag } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'fertility', name: 'Fertility Tips', count: 8 },
    { id: 'treatments', name: 'Treatments', count: 6 },
    { id: 'wellness', name: 'Wellness', count: 5 },
    { id: 'international', name: 'International Care', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding IVF: A Comprehensive Guide for International Patients",
      excerpt: "Everything you need to know about IVF treatment, from preparation to success rates, with special considerations for international patients.",
      category: "treatments",
      readTime: "8 min read",
      date: "March 15, 2024",
      author: "Dr. Sarah Johnson",
      image: "ivf-guide",
      featured: true
    },
    {
      id: 2,
      title: "Fertility Nutrition: Foods That Support Your Journey to Parenthood",
      excerpt: "Discover the science-backed nutritional strategies that can enhance fertility and support your reproductive health naturally.",
      category: "wellness",
      readTime: "6 min read",
      date: "March 12, 2024",
      author: "Dr. Sarah Johnson",
      image: "nutrition"
    },
    {
      id: 3,
      title: "PCOS and Fertility: Managing Symptoms for Better Outcomes",
      excerpt: "A comprehensive approach to understanding and managing PCOS to improve fertility outcomes and overall well-being.",
      category: "fertility",
      readTime: "7 min read",
      date: "March 10, 2024",
      author: "Dr. Sarah Johnson",
      image: "pcos"
    },
    {
      id: 4,
      title: "International Fertility Treatment: What to Expect",
      excerpt: "A guide for international patients considering fertility treatment abroad, including logistics, preparation, and what to expect.",
      category: "international",
      readTime: "10 min read",
      date: "March 8, 2024",
      author: "Dr. Sarah Johnson",
      image: "international"
    },
    {
      id: 5,
      title: "Male Factor Infertility: Breaking the Silence",
      excerpt: "Understanding male fertility issues, available treatments, and how couples can navigate this journey together.",
      category: "fertility",
      readTime: "5 min read",
      date: "March 5, 2024",
      author: "Dr. Sarah Johnson",
      image: "male-fertility"
    },
    {
      id: 6,
      title: "Endometriosis and Fertility: Treatment Options That Work",
      excerpt: "Exploring the latest treatment approaches for endometriosis and their impact on fertility outcomes.",
      category: "treatments",
      readTime: "9 min read",
      date: "March 2, 2024",
      author: "Dr. Sarah Johnson",
      image: "endometriosis"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Medical Blog & Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Expert Insights &
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Fertility Guidance
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest insights, research, and practical advice on fertility, 
            reproductive health, and wellness from Dr. Sarah Johnson and our medical team.
          </p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-pink-100">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-medium">
                      Featured Article
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <BookOpen size={16} />
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="mx-auto mb-4 text-pink-600" size={48} />
                    <p className="text-gray-700 font-medium">Featured Article Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-48 flex items-center justify-center">
                <div className="text-center">
                  {post.category === 'fertility' && <Heart className="mx-auto mb-2 text-pink-500" size={32} />}
                  {post.category === 'treatments' && <Stethoscope className="mx-auto mb-2 text-purple-500" size={32} />}
                  {post.category === 'wellness' && <Baby className="mx-auto mb-2 text-pink-500" size={32} />}
                  {post.category === 'international' && <BookOpen className="mx-auto mb-2 text-purple-500" size={32} />}
                  <p className="text-gray-600 text-sm">Article Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Tag size={12} className="text-pink-500" />
                    <span className="text-xs text-pink-600 font-medium capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Clock size={12} />
                    <span className="text-xs">{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-pink-600 hover:text-purple-600 text-sm font-medium transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest Insights</h3>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get expert fertility advice, treatment updates, 
            and wellness tips delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
          
          <p className="text-pink-200 text-xs mt-4">
            Join 5,000+ people already receiving our expert insights and tips.
          </p>
        </div>
      </div>
    </div>
  );
}
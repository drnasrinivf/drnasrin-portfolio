import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle, Send, CheckCircle, Video, Calendar } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Clinic Location",
      details: ["123 Medical Center Drive", "New York, NY 10001", "United States"],
      color: "text-pink-500"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+1 (234) 567-8900", "+1 (234) 567-8901", "24/7 Emergency Line"],
      color: "text-purple-500"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@drjohnson.com", "international@drjohnson.com", "appointments@drjohnson.com"],
      color: "text-pink-500"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Emergency Only"],
      color: "text-purple-500"
    }
  ];

  const socialLinks = [
  { name: "Facebook", url: "#", icon: FaFacebookF, color: "text-blue-600" },
  { name: "Instagram", url: "https://www.instagram.com/dr.nasrinhasan.mmc?igsh=MWl2YXZ0MTR0M2d2eA==", icon: FaInstagram, color: "text-pink-600" },
  { name: "Twitter", url: "#", icon: FaTwitter, color: "text-blue-400" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dr-nasrin-hasan", icon: FaLinkedinIn, color: "text-blue-700" },
  { name: "YouTube", url: "https://youtube.com/@drnasrinhasan?si=viBLfVG8BxzADBjI", icon: FaYoutube, color: "text-red-600" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Start
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Your Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contact our international team today. We're here to answer your questions, 
            provide guidance, and support you every step of the way to parenthood.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
            <div className="flex items-center space-x-3 mb-8">
              <MessageCircle className="text-pink-500" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Schedule Consultation</option>
                    <option value="treatment-info">Treatment Information</option>
                    <option value="international-patient">International Patient Services</option>
                    <option value="insurance">Insurance & Pricing</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['email', 'phone', 'video'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({...formData, preferredContact: method})}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          formData.preferredContact === method
                            ? 'border-pink-500 bg-pink-50 text-pink-700'
                            : 'border-gray-200 hover:border-pink-300'
                        }`}
                      >
                        {method === 'email' && <Mail className="mx-auto mb-1" size={16} />}
                        {method === 'phone' && <Phone className="mx-auto mb-1" size={16} />}
                        {method === 'video' && <Video className="mx-auto mb-1" size={16} />}
                        <div className="text-xs font-medium capitalize">{method}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
                    placeholder="Tell us about your situation, questions, or how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-8 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 24 hours. For urgent matters, please call us directly.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all">
                  <Calendar className="text-white" size={20} />
                  <div className="text-left">
                    <p className="font-semibold">Book Free Consultation</p>
                    <p className="text-pink-100 text-sm">Online or in-person</p>
                  </div>
                </button>
                <button className="w-full flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all">
                  <Phone className="text-white" size={20} />
                  <div className="text-left">
                    <p className="font-semibold">Call Us Now</p>
                    <p className="text-pink-100 text-sm">+1 (234) 567-8900</p>
                  </div>
                </button>
                <button className="w-full flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all">
                  <Video className="text-white" size={20} />
                  <div className="text-left">
                    <p className="font-semibold">Virtual Consultation</p>
                    <p className="text-pink-100 text-sm">Free for international patients</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <info.icon className={`${info.color}`} size={20} />
                    <h4 className="font-bold text-gray-900">{info.title}</h4>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* International Support */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="text-purple-600" size={20} />
                <h4 className="text-lg font-bold text-gray-900">International Patient Support</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Our dedicated international team provides comprehensive support including:
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Visa documentation assistance</li>
                <li>• Travel and accommodation coordination</li>
                <li>• Airport pickup services</li>
                <li>• Multi-language interpretation</li>
                <li>• Insurance coordination</li>
                <li>• Cultural liaison services</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-10 h-10 ${social.color} bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors`}
                      title={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Stay updated with success stories, health tips, and treatment insights.
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl h-64 flex items-center justify-center border border-pink-200">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-pink-600" size={48} />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Find Our Clinic</h4>
              <p className="text-gray-600">123 Medical Center Drive, New York, NY 10001</p>
              <p className="text-gray-500 text-sm mt-2">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
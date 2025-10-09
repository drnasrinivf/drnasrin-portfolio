import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Calendar, Award, Users, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
  { name: 'About Dr. Nasrin Hasan', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Book Consultation', id: 'consultation' },
    { name: 'Success Stories', id: 'case-studies' },
    { name: 'Patient Reviews', id: 'testimonials' }
  ];

  const services = [
    'Fertility Assessment',
    'IVF Treatment',
    'IUI Treatment',
    'Gynecological Care',
    'Laparoscopic Surgery',
    'PCOS Management'
  ];

  const internationalServices = [
    'Online Consultations',
    'Visa Documentation',
    'Travel Coordination',
    'Multi-language Support',
    'Insurance Assistance',
    'Cultural Liaison'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Dr</span>
              </div>
              <span className="text-xl font-bold">Dr. Nasrin Hasan</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading fertility specialist dedicated to helping families worldwide achieve their dreams of parenthood 
              through compassionate care and advanced treatments.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Award className="text-pink-400" size={16} />
                <span className="text-sm">Excellence in Patient Care 2023</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Users className="text-purple-400" size={16} />
                <span className="text-sm">5000+ Happy Families</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="text-pink-400" size={16} />
                <span className="text-sm">50+ Countries Served</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & International */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-pink-400 mt-1" size={16} />
                  <div className="text-gray-300 text-sm">
                    <p>123 Medical Center Drive</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-400" size={16} />
                  <span className="text-gray-300 text-sm">+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-pink-400" size={16} />
                  <span className="text-gray-300 text-sm">info@drnasrin.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white flex items-center space-x-2">
                <Globe className="text-purple-400" size={16} />
                <span>International Services</span>
              </h4>
              <div className="space-y-2">
                {internationalServices.slice(0, 3).map((service) => (
                  <div key={service} className="text-gray-300 text-xs">
                    • {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

  {/* ...existing code... */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <p>&copy; 2024 Dr. Nasrin Hasan. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link to="/privacy-policy" className="hover:text-pink-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms-conditions" className="hover:text-pink-400 transition-colors">Terms &amp; Conditions</Link>
                <Link to="/medical-disclaimer" className="hover:text-pink-400 transition-colors">Medical Disclaimer</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('consultation')}
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                <Calendar size={14} />
                <span>Book Consultation</span>
              </button>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919842070099"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <FaWhatsapp size={20} />
      </a>
    </footer>
  );
}
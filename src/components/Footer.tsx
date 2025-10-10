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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 text-center md:text-left">
          {/* Clinic Info */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-6">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Dr</span>
              </div>
              <span className="text-xl font-bold">Dr. Nasrin Hasan</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Leading fertility specialist dedicated to helping families worldwide achieve their dreams of parenthood through compassionate care and advanced treatments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-6">
            <h3 className="text-lg font-bold mb-3 text-white tracking-wide">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm text-left w-full"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-6">
            <h3 className="text-lg font-bold mb-3 text-white tracking-wide">Services</h3>
            <div className="space-y-2">
              <Link to="/services/infertility" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">Infertility Treatment</Link>
              <Link to="/services/ivf" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">IVF Treatment</Link>
              <Link to="/services/iui" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">IUI Treatment</Link>
              <Link to="/services/gynecology" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">Gynecological Care</Link>
              <Link to="/services/laparoscopy" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">Laparoscopic Surgery</Link>
              <Link to="/services/pcos" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">PCOS Management</Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-3 text-white tracking-wide">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">Privacy Policy</Link>
              <Link to="/terms-conditions" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">Terms &amp; Conditions</Link>
              <Link to="/medical-disclaimer" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm">Medical Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <p>&copy; 2024 Dr. Nasrin Hasan. All rights reserved.</p>
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
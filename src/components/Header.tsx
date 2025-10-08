import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    // { id: 'consultation', label: 'Consultation' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'collaborations', label: 'Speaking' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-purple-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Dr</span>
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Nasrin Hasan
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Phone size={16} />
              <span>+1 (234) 567-890</span>
            </a> */}
            <button
              onClick={() => scrollToSection('consultation')}
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-purple-100">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-purple-100 space-y-3">
                {/* <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors px-4"
                >
                  <Phone size={16} />
                  <span>+1 (234) 567-890</span>
                </a> */}
                <button
                  onClick={() => scrollToSection('consultation')}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
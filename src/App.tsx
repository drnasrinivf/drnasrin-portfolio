import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
// Consultation component intentionally left in the project but not embedded in HomePage
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Collaborations from './components/Collaborations';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import CaseStudyDetail from './components/CaseStudyDetail';

function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
  const sections = ['home', 'about', 'services', 'case-studies', 'testimonials', 'collaborations', 'blog', 'faq', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="case-studies">
        <CaseStudies />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="collaborations">
        <Collaborations />
      </section> 

      <section id="blog">
        <Blog />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
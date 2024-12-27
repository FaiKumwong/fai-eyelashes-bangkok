import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MobileMenu from './Navigation/MobileMenu';
import DesktopMenu from './Navigation/DesktopMenu';

const Navigation = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const translations = {
    en: {
      services: 'Services',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      contact: 'Contact',
      bookNow: 'Book Now',
      blog: 'Blog'
    },
    th: {
      services: 'บริการ',
      gallery: 'แกลเลอรี่',
      testimonials: 'รีวิว',
      contact: 'ติดต่อ',
      bookNow: 'จองตอนนี้',
      blog: 'บล็อก'
    }
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="container mx-auto px-4 sm:px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src="/lovable-uploads/34bdfa6c-b7c6-43e5-a5a6-11d644d950c0.png" 
              alt="Fai Eyelashes Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
            <img 
              src="/lovable-uploads/b51289dd-7745-4393-8f51-c20b75f76b59.png" 
              alt="Fai Eyelashes Text" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <DesktopMenu 
            translations={translations[language]} 
            scrollToSection={scrollToSection} 
          />

          <button 
            onClick={() => scrollToSection('booking')}
            className="hidden sm:block bg-gradient-to-r from-pink-300 to-pink-200 text-pink-500 px-4 sm:px-6 py-2 rounded-full hover:from-pink-400 hover:to-pink-300 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
          >
            {translations[language].bookNow}
          </button>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen}
          translations={translations[language]}
          scrollToSection={scrollToSection}
        />
      </div>
    </nav>
  );
};

export default Navigation;
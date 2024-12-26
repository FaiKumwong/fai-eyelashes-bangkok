import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/lovable-uploads/927a4887-df5b-4756-a1a7-e149f2441776.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1a245a47-4a4f-4651-a353-f1f105132607.png" 
              alt="Fai Eyelashes Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-white">
              Fai Eyelashes
            </span>
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
            translations={translations} 
            scrollToSection={scrollToSection} 
          />

          <button 
            onClick={() => scrollToSection('booking')}
            className="bg-gradient-to-r from-pink-300 to-pink-200 text-pink-500 px-6 py-2 rounded-full hover:from-pink-400 hover:to-pink-300 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            {translations[language].bookNow}
          </button>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen}
          translations={translations}
          scrollToSection={scrollToSection}
        />
      </div>
    </nav>
  );
};

export default Navigation;
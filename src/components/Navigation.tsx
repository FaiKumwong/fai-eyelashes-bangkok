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

  console.log('Navigation rendered, current language:', language);

  const translations = {
    en: {
      services: 'Services',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      contact: 'Contact',
      bookNow: 'Book Now',
      blog: 'Blog',
      about: 'About'
    },
    th: {
      services: 'บริการ',
      gallery: 'แกลเลอรี่',
      testimonials: 'รีวิว',
      contact: 'ติดต่อ',
      bookNow: 'จองตอนนี้',
      blog: 'บล็อก',
      about: 'เกี่ยวกับฉัน'
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img 
              src="/lovable-uploads/34bdfa6c-b7c6-43e5-a5a6-11d644d950c0.png" 
              alt="Fai Eyelashes Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <img 
              src="/lovable-uploads/b51289dd-7745-4393-8f51-c20b75f76b59.png" 
              alt="Fai Eyelashes Text" 
              className="h-8 sm:h-10 md:h-12 w-auto block"
            />
          </div>

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
            onNavigate={handleNavigation}
          />
        </div>

        <MobileMenu 
          isOpen={isMenuOpen}
          translations={translations[language]}
          onNavigate={handleNavigation}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Navigation;
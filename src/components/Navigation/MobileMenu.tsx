import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  translations: {
    en: {
      services: string;
      gallery: string;
      testimonials: string;
      contact: string;
      blog: string;
    };
    th: {
      services: string;
      gallery: string;
      testimonials: string;
      contact: string;
      blog: string;
    };
  };
  scrollToSection: (id: string) => void;
}

const MobileMenu = ({ isOpen, translations, scrollToSection }: MobileMenuProps) => {
  const { language } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-pink-500 to-purple-500 py-4">
      <div className="flex flex-col items-center space-y-4 px-6">
        <LanguageSelector />
        <button 
          onClick={() => scrollToSection('services')} 
          className="text-white hover:text-white/80 text-center w-full"
        >
          {translations[language].services}
        </button>
        <Link 
          to="/gallery" 
          className="text-white hover:text-white/80 text-center w-full"
        >
          {translations[language].gallery}
        </Link>
        <button 
          onClick={() => scrollToSection('testimonials')} 
          className="text-white hover:text-white/80 text-center w-full"
        >
          {translations[language].testimonials}
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="text-white hover:text-white/80 text-center w-full"
        >
          {translations[language].contact}
        </button>
        <Link 
          to="/blog" 
          className="text-white hover:text-white/80 text-center w-full"
        >
          {translations[language].blog}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
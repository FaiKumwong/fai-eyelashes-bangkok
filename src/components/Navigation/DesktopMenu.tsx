import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface DesktopMenuProps {
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

const DesktopMenu = ({ translations, scrollToSection }: DesktopMenuProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="hidden md:flex items-center space-x-8">
      <LanguageSelector />
      <button 
        onClick={() => scrollToSection('services')} 
        className="text-white hover:text-white/80"
      >
        {translations[language].services}
      </button>
      <Link 
        to="/gallery" 
        className="text-white hover:text-white/80"
      >
        {translations[language].gallery}
      </Link>
      <button 
        onClick={() => scrollToSection('testimonials')} 
        className="text-white hover:text-white/80"
      >
        {translations[language].testimonials}
      </button>
      <button 
        onClick={() => scrollToSection('contact')} 
        className="text-white hover:text-white/80"
      >
        {translations[language].contact}
      </button>
      <Link 
        to="/blog" 
        className="text-white hover:text-white/80"
      >
        {translations[language].blog}
      </Link>
    </div>
  );
};

export default DesktopMenu;
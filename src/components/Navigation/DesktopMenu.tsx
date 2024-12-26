import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface TranslationType {
  services: string;
  gallery: string;
  testimonials: string;
  contact: string;
  blog: string;
}

interface DesktopMenuProps {
  translations: TranslationType;
  scrollToSection: (id: string) => void;
}

const DesktopMenu = ({ translations, scrollToSection }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <LanguageSelector />
      <button 
        onClick={() => scrollToSection('services')} 
        className="text-white hover:text-white/80"
      >
        {translations.services}
      </button>
      <Link 
        to="/gallery" 
        className="text-white hover:text-white/80"
      >
        {translations.gallery}
      </Link>
      <button 
        onClick={() => scrollToSection('testimonials')} 
        className="text-white hover:text-white/80"
      >
        {translations.testimonials}
      </button>
      <button 
        onClick={() => scrollToSection('contact')} 
        className="text-white hover:text-white/80"
      >
        {translations.contact}
      </button>
      <Link 
        to="/blog" 
        className="text-white hover:text-white/80"
      >
        {translations.blog}
      </Link>
    </div>
  );
};

export default DesktopMenu;
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

interface TranslationType {
  services: string;
  gallery: string;
  testimonials: string;
  contact: string;
  blog: string;
  about: string;
}

interface DesktopMenuProps {
  translations: TranslationType;
  onNavigate: (path: string) => void;
}

const DesktopMenu = ({ translations, onNavigate }: DesktopMenuProps) => {
  console.log('DesktopMenu rendered with translations:', translations);

  return (
    <div className="hidden md:flex items-center space-x-8">
      <LanguageSelector />
      <button 
        onClick={() => onNavigate('/services')} 
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
        onClick={() => onNavigate('/testimonials')} 
        className="text-white hover:text-white/80"
      >
        {translations.testimonials}
      </button>
      <button 
        onClick={() => onNavigate('/contact')} 
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
      <Link 
        to="/about" 
        className="text-white hover:text-white/80"
      >
        {translations.about}
      </Link>
    </div>
  );
};

export default DesktopMenu;
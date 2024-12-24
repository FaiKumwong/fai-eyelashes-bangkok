import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      nav: {
        services: 'Services',
        gallery: 'Gallery',
        testimonials: 'Testimonials',
        contact: 'Contact',
        bookNow: 'Book Now',
        blog: 'Blog'
      }
    },
    th: {
      nav: {
        services: 'บริการ',
        gallery: 'แกลเลอรี่',
        testimonials: 'รีวิว',
        contact: 'ติดต่อ',
        bookNow: 'จองตอนนี้',
        blog: 'บล็อก'
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Fai Eyelashes
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4 mr-4">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 ${language === 'en' ? 'text-pink-500' : 'text-gray-600'}`}
              >
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage('th')}
                className={`flex items-center space-x-1 ${language === 'th' ? 'text-pink-500' : 'text-gray-600'}`}
              >
                <span>TH</span>
              </button>
            </div>
            <a href="#services" className="text-gray-600 hover:text-pink-500">
              {translations[language].nav.services}
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-pink-500">
              {translations[language].nav.gallery}
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-pink-500">
              {translations[language].nav.testimonials}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-pink-500">
              {translations[language].nav.contact}
            </a>
            <Link to="/blog" className="text-gray-600 hover:text-pink-500">
              {translations[language].nav.blog}
            </Link>
          </div>
          <button 
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {translations[language].nav.bookNow}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
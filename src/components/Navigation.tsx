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
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Fai Eyelashes
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4 mr-4">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 ${language === 'en' ? 'text-white' : 'text-white/70'}`}
              >
                <svg className="w-6 h-4" viewBox="0 0 60 30">
                  <clipPath id="t">
                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                  </clipPath>
                  <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
                </svg>
              </button>
              <button
                onClick={() => setLanguage('th')}
                className={`flex items-center space-x-1 ${language === 'th' ? 'text-white' : 'text-white/70'}`}
              >
                <svg className="w-6 h-4" viewBox="0 0 900 600">
                  <rect fill="#ED1C24" width="900" height="600"/>
                  <rect fill="#fff" y="100" width="900" height="400"/>
                  <rect fill="#241D4F" y="200" width="900" height="200"/>
                </svg>
              </button>
            </div>
            <a href="#services" className="text-white hover:text-white/80">
              {translations[language].nav.services}
            </a>
            <a href="#gallery" className="text-white hover:text-white/80">
              {translations[language].nav.gallery}
            </a>
            <a href="#testimonials" className="text-white hover:text-white/80">
              {translations[language].nav.testimonials}
            </a>
            <a href="#contact" className="text-white hover:text-white/80">
              {translations[language].nav.contact}
            </a>
            <Link to="/blog" className="text-white hover:text-white/80">
              {translations[language].nav.blog}
            </Link>
          </div>
          <button 
            className="bg-gradient-to-r from-pink-300 to-pink-200 text-pink-500 px-6 py-2 rounded-full hover:from-pink-400 hover:to-pink-300 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            {translations[language].nav.bookNow}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
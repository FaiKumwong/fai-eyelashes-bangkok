import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  console.log('LanguageSelector rendered, current language:', language);

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={() => setLanguage('en')}
        className={`w-6 h-5 flex items-center justify-end transition-all duration-300 ${
          language === 'en' ? 'scale-125' : 'opacity-35'
        }`}
      >
        <svg className="w-5 h-4" viewBox="0 0 60 30">
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6" />
        </svg>
      </button>
      <button
        onClick={() => setLanguage('th')}
        className={`w-6 h-5 flex items-center justify-end transition-all duration-300 ${
          language === 'th' ? 'scale-125' : 'opacity-35'
        }`}
      >
        <svg className="w-5 h-4" viewBox="0 0 900 600">
          <rect fill="#ED1C24" width="900" height="600" />
          <rect fill="#fff" y="100" width="900" height="400" />
          <rect fill="#241D4F" y="200" width="900" height="200" />
        </svg>
      </button>
    </div>
  );
};

export default LanguageSelector;

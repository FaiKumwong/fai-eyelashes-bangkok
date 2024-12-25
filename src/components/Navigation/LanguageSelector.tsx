import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
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
  );
};

export default LanguageSelector;
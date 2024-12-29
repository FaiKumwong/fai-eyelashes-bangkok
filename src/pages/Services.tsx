import React from 'react';
import { Metadata } from '@/components/Metadata';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();
  console.log('Services page rendered, language:', language);

  const translations = {
    en: {
      title: "Our Services",
      description: "Premium eyelash extension services in Bangkok"
    },
    th: {
      title: "บริการของเรา",
      description: "บริการต่อขนตาระดับพรีเมียมในกรุงเทพฯ"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24">
      <Metadata 
        title={translations[language].title}
        description={translations[language].description}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {translations[language].title}
        </h1>
      </div>
    </div>
  );
};

export default Services;
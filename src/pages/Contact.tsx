import React from 'react';
import { Metadata } from '@/components/Metadata';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  console.log('Contact page rendered, language:', language);

  const translations = {
    en: {
      title: "Contact Us",
      description: "Get in touch with us"
    },
    th: {
      title: "ติดต่อเรา",
      description: "ติดต่อสอบถามข้อมูลเพิ่มเติม"
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

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Metadata } from '@/components/Metadata';

const NotFound = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist.",
      backHome: "Back to Home"
    },
    th: {
      title: "ไม่พบหน้าที่คุณต้องการ",
      description: "ไม่พบหน้าที่คุณกำลังค้นหา",
      backHome: "กลับสู่หน้าหลัก"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24">
      <Metadata 
        title={translations[language].title}
        description={translations[language].description}
      />
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="flex items-center mb-8">
          <img 
            src="/lovable-uploads/34bdfa6c-b7c6-43e5-a5a6-11d644d950c0.png"
            alt="Fai Eyelashes Logo"
            className="h-16 w-auto"
          />
          <img 
            src="/lovable-uploads/b51289dd-7745-4393-8f51-c20b75f76b59.png"
            alt="Fai Eyelashes Text"
            className="h-16 w-auto ml-2"
          />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          404 - {translations[language].title}
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          {translations[language].description}
        </p>
        <Link 
          to="/"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
        >
          {translations[language].backHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
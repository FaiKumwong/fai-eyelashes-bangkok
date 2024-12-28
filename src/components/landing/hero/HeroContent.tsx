import React from 'react';

interface HeroContentProps {
  translations: {
    [key: string]: {
      hero: {
        title: string;
        subtitle: string;
        bookButton: string;
      }
    }
  };
  language: string;
}

const HeroContent = ({ translations, language }: HeroContentProps) => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroTranslations = {
    en: {
      hero: {
        title: "Enhance Your Natural Beauty",
        subtitle: "Premium eyelash extensions tailored to your unique style",
        bookButton: "Book Your Appointment"
      }
    },
    th: {
      hero: {
        title: "เสริมความงามตามธรรมชาติของคุณ",
        subtitle: "ต่อขนตาระดับพรีเมียมที่เหมาะกับสไตล์ของคุณ",
        bookButton: "จองคิวตอนนี้"
      }
    }
  };

  return (
    <div className="absolute inset-0 flex items-end justify-start text-left p-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
          {heroTranslations[language].hero.title}
        </h1>
        <p className="text-xl text-white mb-8 drop-shadow-lg">
          {heroTranslations[language].hero.subtitle}
        </p>
        <button 
          onClick={scrollToBooking}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
        >
          {heroTranslations[language].hero.bookButton}
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
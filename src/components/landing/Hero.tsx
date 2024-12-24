import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en');

  const carouselImages = [
    "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=1920&h=600&fit=crop",
    "https://images.unsplash.com/photo-1561916542-c8888474c582?w=1920&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=1920&h=600&fit=crop",
    "https://images.unsplash.com/photo-1513097847644-f00cfe868607?w=1920&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&h=600&fit=crop"
  ];

  const translations = {
    en: {
      hero: {
        title: 'Enhance Your Natural Beauty',
        subtitle: 'Premium eyelash extensions tailored to your unique style',
        bookButton: 'Book Your Appointment'
      }
    },
    th: {
      hero: {
        title: 'เสริมความงามตามธรรมชาติของคุณ',
        subtitle: 'ต่อขนตาระดับพรีเมียมที่เหมาะกับสไตล์ของคุณ',
        bookButton: 'จองคิวตอนนี้'
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30" />
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {translations[language].hero.title}
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              {translations[language].hero.subtitle}
            </p>
            <button 
              className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-50 transition-colors duration-300"
            >
              {translations[language].hero.bookButton}
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
          onClick={handlePrevSlide}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
          onClick={handleNextSlide}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
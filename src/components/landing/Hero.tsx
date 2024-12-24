import React, { useState, useEffect } from 'react';
import CarouselSlide from './hero/CarouselSlide';
import CarouselControls from './hero/CarouselControls';
import CarouselDots from './hero/CarouselDots';
import HeroContent from './hero/HeroContent';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en');

  const carouselImages = [
    "/lovable-uploads/190b47c4-6ba6-4557-8773-f6c519e3cd31.png",
    "/lovable-uploads/3db74b41-0201-4f73-bfa6-4c2f183ce923.png",
    "/lovable-uploads/b512175b-f441-4177-9048-5a330e3ad2ae.png",
    "/lovable-uploads/d8939ed6-b0f2-4c3e-99ff-eeeb6044605c.png",
    "/lovable-uploads/2ca5201b-ac58-4ad6-9166-57a07b0f978f.png"
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
          <CarouselSlide
            key={index}
            image={image}
            index={index}
            currentSlide={currentSlide}
          />
        ))}

        <HeroContent translations={translations} language={language} />
        <CarouselDots
          slides={carouselImages}
          currentSlide={currentSlide}
          onDotClick={handleDotClick}
        />
        <CarouselControls
          onPrevSlide={handlePrevSlide}
          onNextSlide={handleNextSlide}
        />
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';

interface CarouselSlideProps {
  image: string;
  index: number;
  currentSlide: number;
}

const CarouselSlide = ({ image, index, currentSlide }: CarouselSlideProps) => {
  return (
    <div
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
  );
};

export default CarouselSlide;
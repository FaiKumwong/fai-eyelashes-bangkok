import React from 'react';

interface CarouselDotsProps {
  slides: string[];
  currentSlide: number;
  onDotClick: (index: number) => void;
}

const CarouselDots = ({ slides, currentSlide, onDotClick }: CarouselDotsProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
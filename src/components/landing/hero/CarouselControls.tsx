import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

const CarouselControls = ({ onPrevSlide, onNextSlide }: CarouselControlsProps) => {
  return (
    <>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
        onClick={onPrevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
        onClick={onNextSlide}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

export default CarouselControls;

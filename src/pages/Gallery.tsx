import React from 'react';
import { Metadata } from '@/components/Metadata';
import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { language } = useLanguage();
  const images = [
    "/lovable-uploads/190b47c4-6ba6-4557-8773-f6c519e3cd31.png",
    "/lovable-uploads/3db74b41-0201-4f73-bfa6-4c2f183ce923.png",
    "/lovable-uploads/b512175b-f441-4177-9048-5a330e3ad2ae.png",
    "/lovable-uploads/d8939ed6-b0f2-4c3e-99ff-eeeb6044605c.png",
    "/lovable-uploads/2ca5201b-ac58-4ad6-9166-57a07b0f978f.png",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  ];

  const translations = {
    en: {
      title: "Our Gallery"
    },
    th: {
      title: "แกลเลอรี่ของเรา"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-32">
      <Metadata 
        title="Fai Eyelashes Gallery - Our Work"
        description="View our portfolio of beautiful eyelash extensions at Fai Eyelashes Bangkok."
      />
      
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {translations[language].title}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
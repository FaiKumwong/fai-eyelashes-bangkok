import React, { useState } from 'react';
import { Metadata } from '@/components/Metadata';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent right-click context menu
  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  // Reorder array to put newest images first
  const images = [
    "/lovable-uploads/1e1e0bc6-c11a-42d9-b66b-8b6998c27e29.png",
    "/IGpics/IG 0027.png",
    "/IGpics/IG 0026.png",
    "/IGpics/IG 0025.png",
    "/IGpics/IG 0024.png",
    "/IGpics/IG 0023.png",
    "/IGpics/IG 0022.png",
    "/IGpics/IG 0021.png",
    "/IGpics/IG 0020.png",
    "/IGpics/IG 0019.png",
    "/IGpics/IG 0018.png",
    "/IGpics/IG 0017.png",
    "/IGpics/IG 0016.png",
    "/IGpics/IG 0015.png",
    "/IGpics/IG 0014.png",
    "/IGpics/IG 0013.png",
    "/IGpics/IG 0012.png",
    "/IGpics/IG 0011.png",
    "/IGpics/IG 0010.png",
    "/IGpics/IG 009.png",
    "/IGpics/IG 008.png",
    "/IGpics/IG 007.png",
    "/IGpics/IG 006.png",
    "/IGpics/IG 005.png",
    "/IGpics/IG 004.png",
    "/IGpics/IG 003.png",
    "/IGpics/IG 002.png",
    "/IGpics/IG 001.png",
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
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg shadow-lg relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
              onContextMenu={preventContextMenu}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                draggable="false"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/IGpics/Waterlogo.png"
                  alt="Watermark"
                  className="opacity-25 w-2/3 h-2/3 object-contain"
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent 
          className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none overflow-y-auto"
          onPointerLeave={() => setSelectedImage(null)}
          onContextMenu={preventContextMenu}
        >
          <div className="relative">
            {selectedImage && (
              <>
                <img
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  className="w-full h-full object-contain sm:transform sm:scale-150"
                  draggable="false"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="/IGpics/Waterlogo.png"
                    alt="Watermark"
                    className="opacity-25 w-full h-full object-contain"
                    draggable="false"
                  />
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
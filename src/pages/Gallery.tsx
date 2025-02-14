import React, { useState, useEffect } from 'react';
import { Metadata } from '@/components/Metadata';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import { ZoomIn, ZoomOut, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery',
};

const Gallery = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobileOrTablet(isSmallScreen);
      if (!isSmallScreen) {
        setZoomLevel(1);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleCloseDialog = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const images = [
    "/IGpics/lash_care_tips_20250214.jpg",
    "/IGpics/Twitter 0033.jpg",
    "/IGpics/Twitter 0034.jpg",
    "/lovable-uploads/41e16786-acbe-4f16-a095-14843c45ad84.png",
    "/lovable-uploads/4d4048fb-bbb6-46c5-ba68-525884edd9d4.png",
    "/lovable-uploads/4695c3ce-5ed1-4637-bffd-26eae194190a.png",
    "/lovable-uploads/9c460874-9b19-4d4a-af5f-3892d5b79807.png",
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

      <Dialog 
        open={!!selectedImage} 
        onOpenChange={handleCloseDialog}
      >
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/90" />
          <DialogContent 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full outline-none border-none shadow-none bg-transparent p-0"
            onContextMenu={preventContextMenu}
          >
            <div className="relative mx-auto flex flex-col items-center">
              {/* Custom close button */}
              <button
                onClick={handleCloseDialog}
                className="absolute -top-10 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image container */}
              <div className="relative">
                <div className="relative flex items-center justify-center">
                  <img
                    src={selectedImage || ''}
                    alt="Enlarged gallery image"
                    className="object-contain select-none transition-all duration-200"
                    style={{ 
                      maxWidth: isMobileOrTablet ? 'min(85vw, 500px)' : '62.5vw',
                      maxHeight: isMobileOrTablet ? 'min(75vh, 600px)' : '62.5vh',
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: 'center',
                    }}
                    draggable="false"
                  />

                  {/* Watermark */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                    style={{ 
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: 'center'
                    }}
                  >
                    <img
                      src="/IGpics/Waterlogo.png"
                      alt="Watermark"
                      className="opacity-25 w-2/3 h-2/3 object-contain"
                      draggable="false"
                    />
                  </div>
                </div>

                {/* Zoom controls - show for all devices */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                  <button
                    onClick={handleZoomOut}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleZoomIn}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    disabled={zoomLevel >= 2.5}
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default Gallery;
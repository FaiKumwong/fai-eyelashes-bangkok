import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      contactUs: 'Contact Us',
      address: 'Sukhumvit soi 50 (On Nut)',
      businessHours: 'Business Hours',
      weekdays: 'Monday - Friday: 8:00 AM - 8:00 PM',
      weekends: 'Saturday - Sunday: 9:00 AM - 9:00 PM',
      connectWithUs: 'Connect With Us'
    },
    th: {
      contactUs: 'ติดต่อเรา',
      address: 'สุขุมวิท ซอย 50 (อ่อนนุช)',
      businessHours: 'เวลาทำการ',
      weekdays: 'วันจันทร์ - วันศุกร์: 8:00 น. - 20:00 น.',
      weekends: 'วันเสาร์ - วันอาทิตย์: 9:00 น. - 21:00 น.',
      connectWithUs: 'เชื่อมต่อกับเรา'
    }
  };

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{translations[language].contactUs}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{translations[language].address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+66 627 766 926</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>fai@faieyelashes.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{translations[language].businessHours}</h3>
            <div className="space-y-2">
              <p>{translations[language].weekdays}</p>
              <p>{translations[language].weekends}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{translations[language].connectWithUs}</h3>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/faieyelashes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-200 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/people/Faieyelashes-Bangkok/100091360824765" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-200 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              <img 
                src="/lovable-uploads/ce710b32-98d4-448d-9109-bc89e20e6345.png" 
                alt="Fai Eyelashes QR Code" 
                className="w-24 h-24 bg-white p-1 rounded"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7752.393146317586!2d100.5879249!3d13.7065412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f95b83bdfe9%3A0xfaba138e651e3ed9!2sWaterford%20Sukhumvit%2050!5e0!3m2!1snl!2sth!4v1735070685168!5m2!1snl!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

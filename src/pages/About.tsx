import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Metadata } from '@/components/Metadata';

const About = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About Fai Eyelashes",
      description: "Professional Eyelash Extensions in Bangkok",
      intro: "Welcome to Fai Eyelashes",
      story: "With over 5 years of experience in the beauty industry, Fai Eyelashes has become a trusted name in Bangkok's beauty scene. Our commitment to excellence and attention to detail ensures that every client leaves our salon feeling beautiful and confident.",
      mission: "Our mission is to enhance your natural beauty through premium eyelash extension services, using only the highest quality materials and the most advanced techniques.",
      expertise: "Specializing in classic, volume, and hybrid lash extensions, we pride ourselves on creating customized looks that perfectly match each client's unique style and preferences."
    },
    th: {
      title: "เกี่ยวกับ ฟ้า อายแลช",
      description: "บริการต่อขนตามืออาชีพในกรุงเทพฯ",
      intro: "ยินดีต้อนรับสู่ ฟ้า อายแลช",
      story: "ด้วยประสบการณ์กว่า 5 ปีในวงการความงาม ฟ้า อายแลช ได้กลายเป็นชื่อที่ไว้วางใจได้ในวงการความงามของกรุงเทพฯ ความมุ่งมั่นในความเป็นเลิศและความใส่ใจในรายละเอียดของเรา ทำให้มั่นใจได้ว่าลูกค้าทุกคนจะออกจากร้านของเราด้วยความสวยงามและมั่นใจ",
      mission: "ภารกิจของเราคือการเสริมความงามตามธรรมชาติของคุณผ่านบริการต่อขนตาระดับพรีเมียม โดยใช้วัสดุคุณภาพสูงสุดและเทคนิคที่ทันสมัยที่สุด",
      expertise: "เราเชี่ยวชาญในการต่อขนตาแบบคลาสสิก โวลุ่ม และไฮบริด เรามีความภาคภูมิใจในการสร้างลุคที่ปรับแต่งให้เข้ากับสไตล์และความชอบที่เป็นเอกลักษณ์ของลูกค้าแต่ละคน"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-20">
      <Metadata 
        title={translations[language].title}
        description={translations[language].description}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {translations[language].intro}
        </h1>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            {translations[language].story}
          </p>
          <p className="text-lg leading-relaxed">
            {translations[language].mission}
          </p>
          <p className="text-lg leading-relaxed">
            {translations[language].expertise}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Our Services",
      services: [
        {
          title: "Classic Lashes",
          description: "Natural-looking enhancement with one extension per natural lash",
          price: "฿ 799"
        },
        {
          title: "Volume Lashes",
          description: "Volume (Russian) lash look with multiple extensions per natural lash",
          price: "฿ 899"
        },
        {
          title: "Hybrid Lashes",
          description: "Hybrid lash mix of Classic and Volume for a customized look",
          price: "฿ 899"
        },
        {
          title: "Mega Volume Lashes",
          description: "Ultra-dramatic look with maximum volume and density",
          price: "฿ 999"
        },
        {
          title: "Color Lashes",
          description: "Add a pop of color to your lash extensions for a unique style",
          price: "฿ 1199"
        },
        {
          title: "Lash Removal",
          description: "Professional and safe removal of old eyelash extensions",
          price: "฿ 150"
        },
        {
          title: "Service at Home",
          description: "Enjoy the convenience of professional lash services in the comfort of your own home.",
          price: "฿ 999"
        }
      ]
    },
    th: {
      title: "บริการของเรา",
      services: [
        {
          title: "ขนตาแบบคลาสสิค",
          description: "เสริมความงามแบบธรรมชาติด้วยขนตาต่อหนึ่งเส้นต่อขนตาจริงหนึ่งเส้น",
          price: "฿ 799"
        },
        {
          title: "ขนตาแบบวอลลุ่ม",
          description: "ลุคที่เต็มด้วยขนตาหลายเส้นต่อขนตาจริงหนึ่งเส้น",
          price: "฿ 899"
        },
        {
          title: "ขนตาแบบไฮบริด",
          description: "ผสมผสานระหว่างแบบคลาสสิคและวอลลุ่มเพื่อลุคที่เป็นเอกลักษณ์",
          price: "฿ 899"
        },
        {
          title: "ขนตาเมก้าวอลลุ่ม",
          description: "ลุคที่ดูหนาแน่นและดูโดดเด่นเป็นพิเศษ",
          price: "฿ 999"
        },
        {
          title: "ขนตาสี",
          description: "เพิ่มสีสันให้กับขนตาต่อของคุณเพื่อสไตล์ที่เป็นเอกลักษณ์",
          price: "฿ 1199"
        },
        {
          title: "ถอดขนตา",
          description: "บริการถอดขนตาต่ออย่างมืออาชีพและปลอดภัย",
          price: "฿ 150"
        },
        {
          title: "บริการถึงบ้าน",
          description: "เพลิดเพลินกับความสะดวกสบายของบริการขนตามืออาชีพในบ้านของคุณเอง",
          price: "฿ 999"
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-200 to-pink-200" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {translations[language].title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {translations[language].services.slice(0, 6).map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-2xl font-bold text-pink-500">{service.price}</p>
            </div>
          ))}
        </div>
        {translations[language].services.length > 6 && (
          <div className="flex justify-center mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100 max-w-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{translations[language].services[6].title}</h3>
              <p className="text-gray-600 mb-4">{translations[language].services[6].description}</p>
              <p className="text-2xl font-bold text-pink-500">{translations[language].services[6].price}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

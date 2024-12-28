import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Client Love",
      testimonials: [
        {
          name: "Sarah Johnson",
          rating: 5,
          comment: "Absolutely love my new lashes! The service was professional and the results are stunning.",
          date: "March 2024"
        },
        {
          name: "Emily Davis",
          rating: 5,
          comment: "Best lash artist in town! Natural looking and long-lasting results.",
          date: "March 2024"
        },
        {
          name: "Michelle Lee",
          rating: 4,
          comment: "Great experience and beautiful results. Will definitely come back!",
          date: "February 2024"
        }
      ]
    },
    th: {
      title: "รีวิวจากลูกค้า",
      testimonials: [
        {
          name: "สุนิสา จันทร์เพ็ญ",
          rating: 5,
          comment: "รักขนตาใหม่มากเลยค่ะ! บริการเป็นมืออาชีพและผลลัพธ์สวยมาก",
          date: "มีนาคม 2567"
        },
        {
          name: "วรรณา สมิธ",
          rating: 5,
          comment: "ช่างต่อขนตาที่ดีที่สุดในกรุงเทพฯ! ดูเป็นธรรมชาติและติดทนมาก",
          date: "มีนาคม 2567"
        },
        {
          name: "มิเชล ลี",
          rating: 4,
          comment: "ประสบการณ์ที่ยอดเยี่ยมและผลลัพธ์ที่สวยงาม จะกลับมาใช้บริการอีกแน่นอน!",
          date: "กุมภาพันธ์ 2567"
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-200 to-pink-200" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {translations[language].title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {translations[language].testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-pink-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-purple-600">{testimonial.name}</span>
                <span className="text-sm text-pink-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

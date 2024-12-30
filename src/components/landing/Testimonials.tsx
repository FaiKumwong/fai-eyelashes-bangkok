import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Client Love",
      testimonials: [
        {
          name: "Sarah",
          rating: 5,
          comment: "Absolutely love my new lashes! The service was professional and the results are stunning as usually.",
          date: "October 2024"
        },
        {
          name: "Kung",
          rating: 5,
          comment: "Best lash artist in Bangkok! Natural looking and long lasting results, thx Fai.",
          date: "October 2024"
        },
        {
          name: "Michelle Lee",
          rating: 4,
          comment: "Great experience and beautiful results. Will definitely come back!",
          date: "September 2024"
        },
        {
          name: "Jessica Chen",
          rating: 5,
          comment: "Love the natural look of my new lashes. Perfect for everyday wear, above my expectation!",
          date: "November 2024"
        },
        {
          name: "Amanda UK",
          rating: 5,
          comment: "The attention to detail is amazing. My lashes look perfect thanks to Fai!",
          date: "November 2024"
        },
        {
          name: "Rachel Kim",
          rating: 5,
          comment: "Fantastic service and amazing results. Highly recommend!",
          date: "December 2024"
        },
        {
          name: "P' Ning",
          rating: 5,
          comment: "The best lash extensions I've ever had. So natural and comfortable, see my picture in Fai's Gallery.",
          date: "December 2024"
        },
        {
          name: "Laura",
          rating: 5,
          comment: "Incredible attention to detail. My lashes look amazing! Before travelling back home, thanks Fai",
          date: "December 2024"
        },
        {
          name: "Emma",
          rating: 5,
          comment: "Perfect lashes every time. Wouldn't go anywhere else!",
          date: "December 2024"
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
        },
        {
          name: "พิมพ์มาดา สุขใจ",
          rating: 5,
          comment: "ขนตาสวยเป็นธรรมชาติมาก เหมาะกับใส่ทุกวันค่ะ",
          date: "พฤศจิกายน 2567"
        },
        {
          name: "กัญญา รักสวย",
          rating: 5,
          comment: "ใส่ใจในรายละเอียดมาก ขนตาสวยสมบูรณ์แบบ!",
          date: "พฤศจิกายน 2567"
        },
        {
          name: "ณัฐธิดา แสงทอง",
          rating: 5,
          comment: "บริการดีเยี่ยมและผลลัพธ์น่าประทับใจมาก แนะนำเลยค่ะ!",
          date: "ธันวาคม 2567"
        },
        {
          name: "วริศรา ดวงดี",
          rating: 5,
          comment: "ต่อขนตาที่ดีที่สุดที่เคยทำมา ธรรมชาติและสบายตามาก",
          date: "ธันวาคม 2567"
        },
        {
          name: "ปาริชาติ มั่นคง",
          rating: 5,
          comment: "ใส่ใจในทุกรายละเอียด ขนตาสวยมาก!",
          date: "ธันวาคม 2567"
        },
        {
          name: "อรุณี สว่างใจ",
          rating: 5,
          comment: "ขนตาสวยทุกครั้งที่มา ไม่ไปที่อื่นแล้วค่ะ!",
          date: "ธันวาคม 2567"
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
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-8 min-w-max">
            {translations[language].testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100 w-80"
              >
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
      </div>
    </section>
  );
};

export default Testimonials;

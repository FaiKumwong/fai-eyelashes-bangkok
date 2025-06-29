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
        },
        {
          name: "Sophie",
          rating: 5,
          comment: "Amazing New Year transformation! My lashes look incredible for the celebrations.",
          date: "January 2025"
        },
        {
          name: "Maya",
          rating: 5,
          comment: "Started the year with beautiful lashes. Fai's work is always flawless!",
          date: "February 2025"
        },
        {
          name: "Isabella",
          rating: 5,
          comment: "Spring refresh with gorgeous volume lashes. Love the natural yet dramatic look!",
          date: "March 2025"
        },
        {
          name: "Chloe",
          rating: 5,
          comment: "Perfect for my spring wedding photos. Thank you Fai for making me feel beautiful!",
          date: "March 2025"
        },
        {
          name: "Olivia",
          rating: 5,
          comment: "April showers bring May flowers, and Fai brings perfect lashes! So happy with the results.",
          date: "April 2025"
        },
        {
          name: "Grace",
          rating: 4,
          comment: "Lovely experience as always. The hybrid lashes are perfect for my lifestyle.",
          date: "April 2025"
        },
        {
          name: "Zoe",
          rating: 5,
          comment: "May flowers have nothing on these lashes! Absolutely stunning work by Fai.",
          date: "May 2025"
        },
        {
          name: "Lily",
          rating: 5,
          comment: "Summer ready lashes! The color lashes are so unique and beautiful.",
          date: "May 2025"
        },
        {
          name: "Ava",
          rating: 5,
          comment: "June bride with perfect lashes! Fai made my wedding day even more special.",
          date: "June 2025"
        },
        {
          name: "Mia",
          rating: 5,
          comment: "Summer vacation ready! These lashes are perfect for all my beach photos.",
          date: "June 2025"
        }
      ]
    },
    th: {
      title: "รีวิวจากลูกค้า",
      testimonials: [
        {
          name: "ซาร่า",
          rating: 5,
          comment: "รักขนตาใหม่มากๆ! บริการเป็นมืออาชีพและผลลัพธ์สวยงามเหมือนเคย",
          date: "ตุลาคม 2567"
        },
        {
          name: "กุ้ง",
          rating: 5,
          comment: "ช่างต่อขนตาที่เก่งที่สุดในกรุงเทพ! ดูเป็นธรรมชาติและติดทนมาก ขอบคุณฝ้าย",
          date: "ตุลาคม 2567"
        },
        {
          name: "มิเชล ลี",
          rating: 4,
          comment: "ประสบการณ์ที่ยอดเยี่ยมและผลลัพธ์ที่สวยงาม จะกลับมาใช้บริการอีกแน่นอน!",
          date: "กันยายน 2567"
        },
        {
          name: "เจสสิก้า เชน",
          rating: 5,
          comment: "ชอบลุคธรรมชาติของขนตาใหม่มาก เหมาะกับการใส่ทุกวัน เกินความคาดหมาย!",
          date: "พฤศจิกายน 2567"
        },
        {
          name: "อแมนด้า UK",
          rating: 5,
          comment: "ใส่ใจในรายละเอียดมาก ขนตาสวยสมบูรณ์แบบ ขอบคุณฝ้าย!",
          date: "พฤศจิกายน 2567"
        },
        {
          name: "เรเชล คิม",
          rating: 5,
          comment: "บริการยอดเยี่ยมและผลลัพธ์น่าทึ่ง แนะนำมากๆ!",
          date: "ธันวาคม 2567"
        },
        {
          name: "พี่หนิง",
          rating: 5,
          comment: "ขนตาต่อที่ดีที่สุดที่เคยทำมา ธรรมชาติและสบายตามาก ดูรูปได้ในแกลเลอรี่ของฝ้าย",
          date: "ธันวาคม 2567"
        },
        {
          name: "ลอร่า",
          rating: 5,
          comment: "ใส่ใจในทุกรายละเอียด ขนตาสวยมาก! ก่อนกลับบ้าน ขอบคุณฝ้าย",
          date: "ธันวาคม 2567"
        },
        {
          name: "เอ็มม่า",
          rating: 5,
          comment: "ขนตาสวยทุกครั้งที่มา ไม่ไปที่อื่นแล้ว!",
          date: "ธันวาคม 2567"
        },
        {
          name: "โซฟี",
          rating: 5,
          comment: "การเปลี่ยนแปลงปีใหม่ที่น่าทึ่ง! ขนตาสวยมากสำหรับงานเฉลิมฉลอง",
          date: "มกราคม 2568"
        },
        {
          name: "มายา",
          rating: 5,
          comment: "เริ่มต้นปีด้วยขนตาสวยๆ งานของฝ้ายไม่มีที่ติเสมอ!",
          date: "กุมภาพันธ์ 2568"
        },
        {
          name: "อิซาเบลลา",
          rating: 5,
          comment: "รีเฟรชฤดูใบไม้ผลิด้วยขนตาวอลลุ่มสวยงาม ชอบลุคธรรมชาติแต่โดดเด่น!",
          date: "มีนาคม 2568"
        },
        {
          name: "โคลอี้",
          rating: 5,
          comment: "เหมาะสำหรับภาพแต่งงานฤดูใบไม้ผลิ ขอบคุณฝ้ายที่ทำให้รู้สึกสวยงาม!",
          date: "มีนาคม 2568"
        },
        {
          name: "โอลิเวีย",
          rating: 5,
          comment: "ฝนเมษาทำให้ดอกไม้บานในเดือนพฤษภา และฝ้ายทำให้ขนตาสมบูรณ์แบบ! มีความสุขมากกับผลลัพธ์",
          date: "เมษายน 2568"
        },
        {
          name: "เกรซ",
          rating: 4,
          comment: "ประสบการณ์ที่น่ารักเหมือนเคย ขนตาไฮบริดเหมาะกับไลฟ์สไตล์ของฉันมาก",
          date: "เมษายน 2568"
        },
        {
          name: "โซอี้",
          rating: 5,
          comment: "ดอกไม้เดือนพฤษภาไม่มีอะไรเทียบขนตาเหล่านี้! งานของฝ้ายสวยงามมาก",
          date: "พฤษภาคม 2568"
        },
        {
          name: "ลิลลี่",
          rating: 5,
          comment: "ขนตาพร้อมสำหรับฤดูร้อน! ขนตาสีเป็นเอกลักษณ์และสวยงามมาก",
          date: "พฤษภาคม 2568"
        },
        {
          name: "เอวา",
          rating: 5,
          comment: "เจ้าสาวเดือนมิถุนายนกับขนตาสมบูรณ์แบบ! ฝ้ายทำให้วันแต่งงานพิเศษยิ่งขึ้น",
          date: "มิถุนายน 2568"
        },
        {
          name: "มีอา",
          rating: 5,
          comment: "พร้อมสำหรับวันหยุดฤดูร้อน! ขนตาเหล่านี้เหมาะสำหรับภาพถ่ายริมชายหาดทั้งหมด",
          date: "มิถุนายน 2568"
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
            {translations[language].testimonials.slice().reverse().map((testimonial, index) => (
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

import React from 'react';
import BlogPost from './BlogPost';
import { BlogTranslations } from '@/types/blog';

const BlogList = () => {
  const blog1Images = [
    "/lovable-uploads/9f107259-6f56-44fc-9063-9c6cd14f0508.png",
    "/lovable-uploads/8a857c32-c130-41f5-b5e8-9317158d7eca.png",
    "/lovable-uploads/c6ec5e3b-e8fb-465a-b037-5353de31ecab.png"
  ];

  const translations: Record<string, BlogTranslations> = {
    blog1: {
      en: {
        title: "How to Care for Your Lash Extensions",
        subtitle: "✨ Keep Your Lash Extensions Looking Fabulous! ✨",
        intro: "Got lash extensions and want them to last? Proper care is key to maintaining their look and longevity. Whether you're new to extensions or a seasoned pro, these tips will help you keep your lashes on point. Read on for the ultimate lash care guide! 💁‍✨",
        mainTitle: "Essential Lash Extension Care Tips",
        sections: [
          {
            title: "1. Cleanse Gently",
            content: "Your lash extensions need regular cleaning to stay fresh and healthy. Use a lash-safe cleanser to remove dirt, oils, and makeup residue. Skip the cotton pads and opt for a soft brush or fingertips to avoid pulling on your lashes.",
            tip: "🔑 Pro Tip: Clean your lashes at least 2-3 times a week to prevent buildup and irritation."
          },
          {
            title: "2. Avoid Oil-Based Products",
            content: "Oil is the enemy of lash adhesive. Make sure your skincare and makeup products are oil-free. From cleansers to moisturizers, double-check the labels to keep your extensions intact.",
            avoid: [
              "Waterproof mascara",
              "Oil-based eyeliners",
              "Heavy face creams near your eyes"
            ]
          },
          {
            title: "3. Brush Daily",
            content: "Keep your lashes neat and tangle-free by gently brushing them with a clean spoolie brush every morning. This helps maintain their shape and keeps them looking flawless.",
            tip: "🎀 Pro Tip: Brush upward and outward for a natural look."
          },
          {
            title: "4. Be Gentle",
            content: "Lash extensions are delicate, so handle them with care! Avoid rubbing your eyes, tugging at your lashes, or sleeping face-down. Consider a silk or satin pillowcase to minimize friction while you sleep.",
            tip: "💤 Pro Tip: Try sleeping on your back to protect your extensions."
          },
          {
            title: "5. Schedule Refills",
            content: "Lash extensions naturally shed with your natural lashes. To maintain a full, fabulous look, schedule refills every 2 weeks. Regular appointments will keep your lashes lush and lovely.",
            tip: "📅 Pro Tip: Book your refill in advance to secure your spot!"
          }
        ],
        avoid: {
          title: "What to Avoid",
          items: [
            "Excessive steam or hot water",
            "Harsh makeup removers",
            "Touching your lashes frequently"
          ]
        },
        whyItMatters: {
          title: "Why Proper Care Matters",
          content: "Taking care of your lash extensions not only preserves their beauty but also ensures your natural lashes stay healthy. A little extra effort goes a long way in keeping your lash game strong! 💪"
        },
        booking: {
          title: "Book Your Lash Appointment Today!",
          content: "At Fai Eyelashes Bangkok, we're here to help you look and feel your best. Whether you're new to extensions or need a refill, our personalized consultations ensure you'll leave with lashes you love. 💕"
        },
        footer: {
          location: "📍 Fai Eyelashes Bangkok, On Nut",
          slogan: "✨ Love your lashes every day! ✨"
        }
      },
      th: {
        title: "วิธีดูแลขนตาต่อให้สวยยาวนาน",
        subtitle: "✨ ดูแลขนตาต่อให้สวยเป๊ะตลอดเวลา! ✨",
        intro: "ต่อขนตามาแล้วอยากให้อยู่ทนนาน? การดูแลที่ถูกต้องเป็นกุญแจสำคัญในการรักษาความสวยและความคงทนของขนตา ไม่ว่าคุณจะเพิ่งเริ่มต่อขนตาหรือเป็นคนที่ต่อมานาน เคล็ดลับเหล่านี้จะช่วยให้ขนตาของคุณสวยเด่นอยู่เสมอ! มาดูกันว่าจะดูแลขนตาต่อให้สวยได้อย่างไร! 💁‍✨",
        mainTitle: "เคล็ดลับสำคัญในการดูแลขนตาต่อ",
        sections: [
          {
            title: "1. ทำความสะอาดอย่างนุ่มนวล",
            content: "ขนตาต่อต้องการการทำความสะอาดสม่ำเสมอเพื่อความสดชื่นและสุขภาพที่ดี ใช้น้ำยาทำความสะอาดที่ปลอดภัยสำหรับขนตาเพื่อขจัดสิ่งสกปรก น้ำมัน และเครื่องสำอางตกค้าง หลีกเลี่ยงการใช้สำลีและเลือกใช้แปรงนุ่มๆ หรือปลายนิ้วเพื่อหลีกเลี่ยงการดึงขนตา",
            tip: "🔑 เคล็ดลับ: ทำความสะอาดขนตาอย่างน้อย 2-3 ครั้งต่อสัปดาห์เพื่อป้องกันการสะสมของสิ่งสกปรกและการระคายเคือง"
          },
          {
            title: "2. หลีกเลี่ยงผลิตภัณฑ์ที่มีส่วนผสมของน้ำมัน",
            content: "น้ำมันเป็นศัตรูของกาวติดขนตา ตรวจสอบให้แน่ใจว่าผลิตภัณฑ์ดูแลผิวและเครื่องสำอางของคุณปราศจากน้ำมัน ตั้งแต่คลีนเซอร์ไปจนถึงมอยส์เจอไรเซอร์ ตรวจสอบฉลากให้ดีเพื่อรักษาขนตาต่อของคุณ",
            avoid: [
              "มาสคาร่ากันน้ำ",
              "อายไลเนอร์ที่มีส่วนผสมของน้ำมัน",
              "ครีมบำรุงผิวเข้มข้นบริเวณรอบดวงตา"
            ]
          },
          {
            title: "3. แปรงทุกวัน",
            content: "รักษาขนตาให้เรียบร้อยและไม่พันกันด้วยการแปรงเบาๆ ด้วยแปรงสปูลี่สะอาดทุกเช้า วิธีนี้จะช่วยรักษารูปทรงและทำให้ขนตาดูสวยอยู่เสมอ",
            tip: "🎀 เคล็ดลับ: แปรงขึ้นและออกด้านนอกเพื่อลุคที่เป็นธรรมชาติ"
          },
          {
            title: "4. ดูแลอย่างนุ่มนวล",
            content: "ขนตาต่อบอบบาง ต้องดูแลด้วยความระมัดระวัง! หลีกเลี่ยงการขยี้ตา ดึงขนตา หรือนอนคว่ำหน้า พิจารณาใช้ปลอกหมอนผ้าไหมหรือผ้าซาตินเพื่อลดการเสียดสีขณะนอนหลับ",
            tip: "💤 เคล็ดลับ: ลองนอนหงายเพื่อปกป้องขนตาต่อ"
          },
          {
            title: "5. นัดเติมขนตาตามกำหนด",
            content: "ขนตาต่อจะร่วงตามธรรมชาติพร้อมกับขนตาจริง เพื่อรักษาความเต็มและสวยงาม ควรนัดเติมขนตาทุก 2 สัปดาห์ การนัดหมายสม่ำเสมอจะช่วยให้ขนตาของคุณดูสวยและเต็มอยู่เสมอ",
            tip: "📅 เคล็ดลับ: จองคิวเติมขนตาล่วงหน้าเพื่อให้ได้เวลาที่ต้องการ!"
          }
        ],
        avoid: {
          title: "สิ่งที่ควรหลีกเลี่ยง",
          items: [
            "ไอน้ำหรือน้ำร้อนมากเกินไป",
            "น้ำยาล้างเครื่องสำอางที่รุนแรง",
            "การสัมผัสขนตาบ่อยๆ"
          ]
        },
        whyItMatters: {
          title: "ทำไมการดูแลที่ถูกต้องจึงสำคัญ",
          content: "การดูแลขนตาต่อไม่เพียงแต่รักษาความสวยงามเท่านั้น แต่ยังช่วยให้ขนตาธรรมชาติของคุณแข็งแรง ความพยายามเพียงเล็กน้อยจะช่วยให้ขนตาของคุณสวยอย่างยั่งยืน! 💪"
        },
        booking: {
          title: "จองคิวต่อขนตาวันนี้!",
          content: "ที่ฝ้าย อายแลช กรุงเทพ เราพร้อมช่วยให้คุณดูดีและรู้สึกดี ไม่ว่าคุณจะเพิ่งเริ่มต่อขนตาหรือต้องการเติมขนตา การปรึกษาส่วนตัวของเราจะช่วยให้คุณได้ขนตาที่คุณรัก 💕"
        },
        footer: {
          location: "📍 ฝ้าย อายแลช กรุงเทพ, อ่อนนุช",
          slogan: "✨ รักขนตาของคุณทุกวัน! ✨"
        }
      }
    },
    blog2: {
      en: {
        title: "Fai Eyelashes & Trends for 2025",
        subtitle: "✨ 2025's Hottest Eyelash Trends You Need to Know! ✨",
        intro: "Are you ready to elevate your lash game in 2025? Beauty trends are popping up everywhere, but let's talk about lashes! From bold colors to natural enhancements, these lash trends are set to turn heads. Keep reading to find the perfect style to match your vibe this year!",
        mainTitle: "Lash Trends to Watch in 2025",
        sections: [
          {
            title: "🎨 Colorful Lashes",
            content: "Color is IN, and it's here to stay for 2025! Fai Eyelashes offers a vibrant collection of colored lashes that add fun and flair to your extensions. Whether you want a full set of colored lashes or just a pop at the corners, we've got you covered.",
            options: [
              "🍇 Purple",
              "💙 Blue",
              "💚 Green",
              "🌸 Pink"
            ],
            note: "Looking for something different? Just ask! We can order custom colors to match your unique style."
          },
          {
            title: "Natural Lash Extension Looks",
            content: "Want that 'no-makeup' makeup look? Our classic lash extensions enhance your natural beauty without the need for mascara. During your consultation, Fai will guide you through different options to find the best fit for your desired look. Effortless, lightweight, and perfect for everyday wear!"
          },
          {
            title: "Wet Look Lashes",
            content: "Love a fresh, dewy finish? Wet-look lash extensions are making waves and are here to stay in 2025. This trend gives your lashes a just out of the water shine that looks youthful and voluminous. It's perfect for those who adore full, fluttery lashes."
          },
          {
            title: "Lash Tint for Effortless Beauty",
            content: "If your natural lashes are light or not as bold as you'd like, a lash tint is the answer! A lash tint darkens and enhances your natural lashes, giving you a polished look without daily mascara. This simple treatment lasts up to 4 weeks, keeping your lashes looking flawless. Tinting works for all hair colors and is a game-changer for brunettes, blondes and redheads alike!"
          },
          {
            title: "Start 2025 with a New Lash Look!",
            content: "Whether you're going bold with color or keeping it soft and natural, 2025 is your year to shine. Treat yourself to a new lash look and step into the new year with confidence."
          }
        ],
        footer: {
          content: "At Fai Eyelashes, we provide personalized consultations to help you choose the perfect lash style. Don't worry if you're unsure—we'll help you find the right fit! Book your lash appointment today and get ready to love your lashes in 2025! 💅",
          location: "Fai Eyelashes Bangkok, On Nut",
          slogan: "Happy New Year"
        }
      },
      th: {
        title: "ฝ้าย อายแลช & เทรนด์ขนตาสำหรับปี 2025",
        subtitle: "✨ เทรนด์ขนตาที่ร้อนแรงที่สุดในปี 2025 ที่คุณต้องรู้! ✨",
        intro: "คุณพร้อมที่จะยกระดับการต่อขนตาของคุณในปี 2025 หรือยัง? เทรนด์ความงามกำลังมาแรง แต่เรามาพูดถึงขนตากันเถอะ! ตั้งแต่สีสันที่โดดเด่นไปจนถึงการเสริมความเป็นธรรมชาติ เทรนด์ขนตาเหล่านี้จะทำให้คุณต้องหันมามอง มาติดตามกันว่าลุคไหนที่เหมาะกับคุณในปีนี้!",
        mainTitle: "เทรนด์ขนตาที่ควรจับตามองในปี 2025",
        sections: [
          {
            title: "🎨 ขนตาสีสัน",
            content: "สีสันกำลังมาแรงและจะอยู่ต่อไปในปี 2025! ฝ้าย อายแลช มีคอลเลกชันขนตาสีสันสดใสที่จะเพิ่มความสนุกและความโดดเด่นให้กับขนตาของคุณ ไม่ว่าคุณจะต้องการขนตาสีเต็มชุดหรือแค่เพิ่มสีที่มุมตา เรามีให้คุณครบ",
            options: [
              "🍇 สีม่วง",
              "💙 สีน้ำเงิน",
              "💚 สีเขียว",
              "🌸 สีชมพู"
            ],
            note: "กำลังมองหาสิ่งที่แตกต่าง? แค่บอกเรา! เราสามารถสั่งสีที่กำหนดเองเพื่อให้ตรงกับสไตล์ที่เป็นเอกลักษณ์ของคุณ"
          },
          {
            title: "ลุคขนตาต่อแบบธรรมชาติ",
            content: "ต้องการลุค 'ไม่แต่งหน้า' หรือเปล่า? ขนตาต่อแบบคลาสสิคของเราจะช่วยเสริมความงามตามธรรมชาติของคุณโดยไม่ต้องใช้มาสคาร่า ในระหว่างการปรึกษา ฝ้ายจะช่วยแนะนำตัวเลือกต่างๆ เพื่อหาลุคที่เหมาะสมที่สุดสำหรับคุณ สวยงามและเบาสบาย เหมาะสำหรับการใส่ทุกวัน!"
          },
          {
            title: "ขนตาลุคเปียก",
            content: "ชอบลุคที่สดชื่นและเปียกน้ำ? ขนตาลุคเปียกกำลังมาแรงและจะอยู่ต่อไปในปี 2025 เทรนด์นี้จะทำให้ขนตาของคุณดูมีประกายเหมือนเพิ่งออกจากน้ำ ดูอ่อนเยาว์และฟูฟ่อง เหมาะสำหรับผู้ที่ชื่นชอบขนตาที่เต็มและฟู"
          },
          {
            title: "การย้อมขนตาเพื่อความสวยที่ไม่ยุ่งยาก",
            content: "ถ้าขนตาธรรมชาติของคุณมีสีอ่อนหรือไม่เข้มพอ การย้อมขนตาคือคำตอบ! การย้อมขนตาจะทำให้ขนตาของคุณเข้มขึ้นและดูโดดเด่น โดยไม่ต้องใช้มาสคาร่าทุกวัน การทำทรีตเมนต์นี้ใช้เวลาได้นานถึง 4 สัปดาห์ ทำให้ขนตาของคุณดูสวยงาม การย้อมขนตาเหมาะสำหรับทุกสีผมและเป็นการเปลี่ยนแปลงที่ยอดเยี่ยมสำหรับคนผมสีน้ำตาล บลอนด์ และแดง!"
          },
          {
            title: "เริ่มต้นปี 2025 ด้วยลุคขนตาใหม่!",
            content: "ไม่ว่าคุณจะเลือกสีสันที่โดดเด่นหรือรักษาความเป็นธรรมชาติ ปี 2025 คือปีของคุณที่จะเปล่งประกาย ดูแลตัวเองด้วยลุคขนตาใหม่และก้าวเข้าสู่ปีใหม่ด้วยความมั่นใจ"
          }
        ],
        footer: {
          content: "ที่ฝ้าย อายแลช เรามีการปรึกษาส่วนตัวเพื่อช่วยให้คุณเลือกสไตล์ขนตาที่เหมาะสมที่สุด ไม่ต้องกังวลหากคุณไม่แน่ใจ—เราจะช่วยคุณหาลุคที่ใช่! จองคิวต่อขนตาของคุณวันนี้และเตรียมพร้อมที่จะรักขนตาของคุณในปี 2025! 💅",
          location: "ฝ้าย อายแลช กรุงเทพ, อ่อนนุช",
          slogan: "สวัสดีปีใหม่"
        }
      }
    }
  };

  return (
    <div className="space-y-8">
      <BlogPost translations={translations.blog1} images={blog1Images} />
      <BlogPost translations={translations.blog2} />
    </div>
  );
};

export default BlogList;

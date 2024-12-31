import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogSidebar = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      categories: "Categories",
      recentPosts: "Recent Posts",
      categories_list: [
        "Beauty Tips",
        "Lash Extensions",
        "Product Reviews",
        "Client Stories"
      ],
      recent_posts: [
        "How to Care for Your Lash Extensions",
        "Top 5 Lash Trends of 2024"
      ]
    },
    th: {
      categories: "หมวดหมู่",
      recentPosts: "โพสต์ล่าสุด",
      categories_list: [
        "เคล็ดลับความงาม",
        "ต่อขนตา",
        "รีวิวผลิตภัณฑ์",
        "เรื่องราวจากลูกค้า"
      ],
      recent_posts: [
        "วิธีดูแลขนตาต่อ",
        "เทรนด์ขนตายอดนิยม 5 อันดับปี 2024"
      ]
    }
  };

  return (
    <div className="space-y-6 sticky top-32">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{translations[language].categories}</h3>
        <ul className="list-disc pl-5 space-y-2">
          {translations[language].categories_list.map((category, index) => (
            <li key={index} className="text-gray-700 hover:text-purple-600 cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{translations[language].recentPosts}</h3>
        <ul className="space-y-3">
          {translations[language].recent_posts.map((post, index) => (
            <li key={index}>
              <a href="#" className="text-blue-500 hover:text-blue-700 hover:underline">
                {post}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
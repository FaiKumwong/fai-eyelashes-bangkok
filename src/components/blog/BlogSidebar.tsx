import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

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
        {
          title: "How to Care for Your Lash Extensions",
          url: "/blog#blog1"
        },
        {
          title: "Fai Eyelashes & Trends for 2025",
          url: "/blog#blog2"
        },
        {
          title: "Top 5 Lash Trends of 2024",
          url: "/blog#blog3"
        }
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
        {
          title: "วิธีดูแลขนตาต่อ",
          url: "/blog#blog1"
        },
        {
          title: "ฝ้าย อายแลช & เทรนด์ขนตาปี 2025",
          url: "/blog#blog2"
        },
        {
          title: "เทรนด์ขนตายอดนิยม 5 อันดับปี 2024",
          url: "/blog#blog3"
        }
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
              <Link 
                to={post.url}
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;

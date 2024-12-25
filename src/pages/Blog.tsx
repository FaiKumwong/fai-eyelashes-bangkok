import React from 'react';
import { Metadata } from '@/components/Metadata';
import BlogList from '@/components/blog/BlogList';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Beauty Blog"
    },
    th: {
      title: "บล็อกความงาม"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Metadata 
        title="Fai Eyelashes Blog - Eyelash Care Tips & Trends"
        description="Discover the latest eyelash extension trends, aftercare tips, and beauty advice on the Fai Eyelashes blog."
      />
      
      <div className="container mx-auto px-4 py-16 pt-32">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {translations[language].title}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogList />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
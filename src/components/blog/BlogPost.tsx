import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogSection, BlogTranslations } from '@/types/blog';

interface BlogPostProps {
  translations: BlogTranslations;
  images?: string[];
}

const BlogPost = ({ translations, images }: BlogPostProps) => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-purple-800">
        {content.title}
      </h2>
      <h3 className="text-2xl font-semibold mb-6 text-pink-600">
        {content.subtitle}
      </h3>
      
      <p className="text-gray-700 mb-6">
        {content.intro}
      </p>

      <h4 className="text-xl font-bold mb-4 text-purple-700">
        {content.mainTitle}
      </h4>

      {content.sections.map((section: BlogSection, index: number) => (
        <div key={index} className="mb-6">
          <h5 className="text-lg font-semibold mb-2">{section.title}</h5>
          <p className="text-gray-700 mb-4">{section.content}</p>
          {section.tip && (
            <p className="text-gray-700 mb-4">{section.tip}</p>
          )}
          {section.avoid && (
            <p className="text-gray-700 mb-4">
              🚫 {language === 'en' ? 'Say no to:' : 'หลีกเลี่ยง:'}<br />
              {section.avoid.map((item: string, i: number) => (
                <span key={i}>- {item}<br /></span>
              ))}
            </p>
          )}
 {/* Only show image after the tip for section 5 */}
          {index === 4 && section.tip && images && images[index] && (
            <img 
              src={images[index]}
              alt={`${content.title} - Section ${index + 1}`}
              className="w-full rounded-lg mb-8 shadow-lg"
            />
          )}
          {/* Show images for all other sections normally */}
          {index !== 4 && images && images[index] && (
            <img 
              src={images[index]}
              alt={`${content.title} - Section ${index + 1}`}
              className="w-full rounded-lg mb-8 shadow-lg"
            />
          )}
        </div>
      ))}

      {content.avoid && (
        <div className="mb-6">
          <h5 className="text-lg font-semibold mb-2">
            {content.avoid.title}
          </h5>
          <p className="text-gray-700 mb-4">
            {content.avoid.items.map((item: string, index: number) => (
              <span key={index}>- {item}<br /></span>
            ))}
          </p>
        </div>
      )}

      {content.whyItMatters && (
        <div className="mb-6">
          <h5 className="text-lg font-semibold mb-2">
            {content.whyItMatters.title}
          </h5>
          <p className="text-gray-700">
            {content.whyItMatters.content}
          </p>
        </div>
      )}

      {content.booking && (
        <div className="mb-6">
          <h5 className="text-lg font-semibold mb-2">
            {content.booking.title}
          </h5>
          <p className="text-gray-700">
            {content.booking.content}
          </p>
        </div>
      )}

      <div className="mt-8 text-gray-600">
        <p>{content.footer.location}</p>
        <p>{content.footer.slogan}</p>
      </div>
    </div>
  );
};

export default BlogPost;

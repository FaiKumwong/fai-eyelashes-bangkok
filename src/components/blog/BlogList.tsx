import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from '@/data/blogPosts';

const BlogList = () => {
  const blog2Images = [
    "/lovable-uploads/19f41b52-665c-453e-b6b1-29a5e5497b7a.png",
    "/lovable-uploads/27480162-d35c-46eb-91b2-f8f5fc76628a.png",
    "/lovable-uploads/1f53349f-d3c4-41da-9e4c-91de0b98deb2.png"
  ];

  return (
    <div className="space-y-8">
      <BlogPost translations={blogPosts.blog1} />
      <BlogPost translations={blogPosts.blog2} images={blog2Images} />
      <BlogPost translations={blogPosts.blog3} />
    </div>
  );
};

export default BlogList;
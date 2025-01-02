import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from '@/data/blogPosts';

const BlogList = () => {
  const blog1Images = [
    "/lovable-uploads/0e3dd6b6-b4a3-43c7-9242-436d9db5c1dd.png",
    "/lovable-uploads/ddbac248-10f9-4526-a385-eab468063b00.png",
    "/lovable-uploads/7a42b3eb-f2fb-46d9-afc1-236756a8fc4e.png"
  ];

const blog2Images = [
    "/lovable-uploads/0e3dd6b6-b4a3-43c7-9242-436d9db5c1dd.png",
    "/lovable-uploads/ddbac248-10f9-4526-a385-eab468063b00.png",
    "/lovable-uploads/7a42b3eb-f2fb-46d9-afc1-236756a8fc4e.png"
  ];
  
  const blog3Images = [
    "/lovable-uploads/488937db-dea5-4f77-b6dd-48f212851001.png",
    "/lovable-uploads/4ff03cc2-bcfe-4145-8f1a-4e9d3de728ee.png",
    "/lovable-uploads/c0da4a81-6c11-49d6-bd02-70d1207f3ad9.png"
  ];

  return (
    <div className="space-y-8" id="blog-posts">
      <div id="blog1">
        <BlogPost translations={blogPosts.blog1} images={blog1Images} />
      </div>
      <div id="blog2">
        <BlogPost translations={blogPosts.blog2} />
      </div>
      <div id="blog3">
        <BlogPost translations={blogPosts.blog3} images={blog3Images} />
      </div>
    </div>
  );
};

export default BlogList;

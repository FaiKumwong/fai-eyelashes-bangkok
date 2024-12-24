import React from 'react';

const BlogSidebar = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Categories</h3>
      <ul className="list-disc pl-5">
        <li>Beauty Tips</li>
        <li>Lash Extensions</li>
        <li>Product Reviews</li>
        <li>Client Stories</li>
      </ul>
      <h3 className="text-xl font-semibold">Recent Posts</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-500 hover:underline">How to Care for Your Lash Extensions</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Top 5 Lash Trends of 2024</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Client Spotlight: Sarah's Transformation</a></li>
      </ul>
    </div>
  );
};

export default BlogSidebar;

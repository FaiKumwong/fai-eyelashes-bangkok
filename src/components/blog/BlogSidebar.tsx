import React from 'react';

const BlogSidebar = () => {
  const categories = [
    "Lash Care Tips",
    "Beauty Trends",
    "Client Stories",
    "Product Reviews",
    "Industry News"
  ];

  const recentPosts = [
    "The Benefits of Volume Lashes",
    "How to Prepare for Your First Lash Appointment",
    "Summer Lash Care Guide",
    "Why Choose Professional Lash Extensions"
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Posts</h3>
        <ul className="space-y-2">
          {recentPosts.map((post, index) => (
            <li key={index}>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
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
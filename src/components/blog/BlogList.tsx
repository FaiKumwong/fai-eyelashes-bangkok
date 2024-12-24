import React from 'react';

const BlogList = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Latest Posts</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Post Title 1</h3>
        <p className="text-gray-600">This is a brief description of the first blog post. It covers the main points and invites readers to learn more.</p>
        <a href="#" className="text-pink-500 hover:underline">Read more</a>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Post Title 2</h3>
        <p className="text-gray-600">This is a brief description of the second blog post. It provides insights and encourages readers to explore further.</p>
        <a href="#" className="text-pink-500 hover:underline">Read more</a>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Post Title 3</h3>
        <p className="text-gray-600">This is a brief description of the third blog post. It highlights key information and prompts readers to click for more details.</p>
        <a href="#" className="text-pink-500 hover:underline">Read more</a>
      </div>
    </div>
  );
};

export default BlogList;

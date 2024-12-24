import React from 'react';

const BlogList = () => {
  const posts = [
    {
      title: "How to Make Your Eyelash Extensions Last Longer",
      excerpt: "Learn the best practices for maintaining your eyelash extensions...",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&h=400&fit=crop"
    },
    {
      title: "Different Types of Eyelash Extensions",
      excerpt: "Discover the various styles and materials used in eyelash extensions...",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1561916542-c8888474c582?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-pink-500">{post.date}</span>
              <button className="text-purple-600 hover:text-purple-700">Read More →</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
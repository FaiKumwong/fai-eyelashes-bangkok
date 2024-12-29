import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50 p-4">
      <div className="text-center">
        <img 
          src="/lovable-uploads/34bdfa6c-b7c6-43e5-a5a6-11d644d950c0.png"
          alt="Fai Eyelashes Logo"
          className="mx-auto mb-8 w-32 h-auto"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
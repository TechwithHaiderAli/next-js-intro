// app/posts/loading.jsx
import React from 'react';

const PostsLoading = () => {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {/* Title placeholder */}
      <h1 className="text-4xl font-bold text-center text-gray-300 mb-8 animate-pulse">
        Loading Posts...
      </h1>

      {/* Grid for skeleton loaders */}
      <ul className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md animate-pulse"
          >
            {/* Title line */}
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            {/* Shorter text line */}
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </li>
        ))}
      </ul>

      {/* You can add a more central spinner if preferred */}
      {/* <div className="flex justify-center items-center h-full">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div> */}
    </div>
  );
};

export default PostsLoading;
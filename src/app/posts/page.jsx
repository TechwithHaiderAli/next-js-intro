// components/Posts.jsx
import React from 'react';
import Link from 'next/link';

const dummyPosts = [
  { id: '1', title: 'The Unseen Beauty of Everyday Moments' },
  { id: '2', title: 'Mastering the Art of Procrastination (and How to Stop)' },
  { id: '3', title: 'Why Learning a New Language Changes Your Brain' },
  { id: '4', title: 'Exploring the Future of Artificial Intelligence' },
  { id: '5', title: 'A Beginner\'s Guide to Stargazing' },
];

const Posts = () => {
  const linkTitleClasses =
    'text-xl font-semibold text-blue-700 hover:text-blue-900 cursor-pointer block';

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {/* Title for the Posts page */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        All Posts
      </h1>

      {/* List of post titles */}
      <ul className="space-y-4">
        {dummyPosts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Apply classes directly to the Link component */}
            <Link href={`/posts/${post.id}`} className={linkTitleClasses}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
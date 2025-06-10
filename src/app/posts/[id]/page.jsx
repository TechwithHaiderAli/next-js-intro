// app/posts/[id]/page.jsx
import React from 'react';
import { notFound } from 'next/navigation'; // For handling 404s
import Link from 'next/link'; // Import Link

// Function to fetch a single post by ID
async function getPost(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

// Metadata for the page (optional, but good for SEO)
export async function generateMetadata({ params }) {
  const post = await getPost(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.body.substring(0, 150) + '...', // Take a snippet of the body
    keywords: ['post', 'blog', post.title.split(' ').join(',')],
  };
}

// The main page component
const SinglePostPage = async ({ params }) => {
  const { id } = params;

  let post;
  try {
    post = await getPost(id);
  } catch (error) {
    console.error('Error fetching post:', error);
    return (
      <div className="container mx-auto max-w-3xl px-4 py-8 text-center text-red-600">
        <h1 className="text-3xl font-bold mb-4">
          Failed to load post.
        </h1>
        <p>Please check the ID or try again later.</p>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {/* Back button - now using Link */}
      <div className="mb-8">
        <Link href="/posts" className="text-blue-600 hover:underline">
          &larr; Back to all posts
        </Link>
      </div>

      {/* Post content */}
      <article className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {post.title}
        </h1>
        {post.userId && (
          <p className="text-sm text-gray-500 mb-6">
            By User ID: {post.userId}
          </p>
        )}
        <p className="text-gray-800 leading-relaxed text-lg whitespace-pre-wrap">
          {post.body}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <span className="font-semibold text-gray-700">Tags: </span>
            {post.tags.map((tag, index) => (
              <span
                key={tag}
                className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default SinglePostPage;
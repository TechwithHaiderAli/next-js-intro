// app/createpost/page.jsx
import React from 'react';
import PostForm from '@/components/PostForm'; // We'll create this component next
const CreatePostPage =async () => {
 
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Create New Post
      </h1>
      <PostForm />
    </div>
  );
};

export default CreatePostPage;
// components/Posts.jsx
import React from 'react';
import Posts from '@/components/post-fetch';
import { Suspense } from 'react';
import PostsLoading from './loading';
const PostsPage=()=>{
  return(<>
  <div className='text-center mx-15 flex flex-col gap-20'>
     {/* Title for the Posts page */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        All Posts
      </h1>
    <Suspense fallback={<PostsLoading/>}>
        <Posts/>
    </Suspense>
  </div>
    
  </>)
}

export default PostsPage;
// app/actions.js (or lib/actions.js)
'use server'; // This directive makes all exports in this file Server Actions

import { revalidatePath } from 'next/cache'; // For revalidating cached data
import { redirect } from 'next/navigation'; // For server-side redirects (if needed)

// Define tically created from the form inputs
  // IMPORTANT: Input fields MUST have ahe Server Action function
export async function addPost(prevState, formData) {
  // `prevState` is the last state returned by the action (from useFormState)
  // `formData` is a FormData object automat `name` attribute for `formData` to capture their values.

  const title = formData.get('title');
  const body = formData.get('body');
  const tagsString = formData.get('tags');

  // Basic validation (can be more robust with Zod, etc.)
  if (!title || !body) {
    return {
      message: 'Title and content are required.',
      success: false,
    };
  }

  const tagsArray = tagsString
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  try {
    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        tags: tagsArray,
        userId: 1, // Dummy user ID for dummyjson
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Failed to create post: HTTP status ${response.status}`
      );
    }

    const newPost = await response.json();
    console.log('Server Action: New Post Created:', newPost);

    // Revalidate the /posts path so the main list gets updated data on next navigation
    // This is crucial for seeing the new post (if dummyjson actually added it persistently)
    revalidatePath('/posts');

    // Return state for useFormState
    return {
      message: 'Post created successfully!',
      success: true,
      post: newPost, // Optionally return the new post data
    };
  } catch (error) {
    console.error('Server Action Error:', error);
    // Return error state for useFormState
    return {
      message: `Failed to create post: ${error.message}`,
      success: false,
    };
  }
}
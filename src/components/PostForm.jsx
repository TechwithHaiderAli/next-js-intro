// components/PostForm.jsx
// No 'use client' needed at the top level IF this component ONLY handles server actions
// and does not have client-side state or effects unrelated to the form submission.
// However, since we have text inputs with onChange handlers, we will still need 'use client'.
// The key is that the ACTION itself is a server action.

'use client'; // This component still needs to be a Client Component for form inputs

import React, { useActionState, useState } from 'react';
import { useFormStatus, useFormState } from 'react-dom'; // Hooks for Server Actions
import { useRouter } from 'next/navigation'; // For programmatic navigation
import { addPost } from '@/app/actions'; // We'll create this file next!

// Component to show pending state of the form
function SubmitButton() {
  const { pending } = useFormStatus(); // Get pending state from the form it belongs to

  return (
    <button
      type="submit"
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 ${
        pending ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={pending}
    >
      {pending ? 'Creating Post...' : 'Create Post'}
    </button>
  );
}

const PostForm = () => {
  const router = useRouter();

  // useFormState hook: [state, dispatch] = useFormState(action, initialState)
  // `state` will be the last result of the action (e.g., success/error message)
  // `dispatch` is the function to call the action
  const [formState, formAction] = useActionState(addPost, {
    message: '',
    success: false,
  });

  // Effect to handle redirection or clear form on successful submission
  React.useEffect(() => {
    if (formState.success) {
      alert(formState.message); // Or use a toast notification
      router.push('/posts'); // Redirect to posts list
      // Note: form fields can be reset by making them controlled and resetting state
      // For now, we'll rely on redirection.
    } else if (formState.message && !formState.success) {
      // Display error message if there's an error
      alert(`Error: ${formState.message}`); // Or display in a div on the form
    }
  }, [formState, router]);

  return (
    <form
      action={formAction} // Assign the Server Action directly to the form's action prop
      className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
    >
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title" // IMPORTANT: `name` attribute is needed for Server Actions
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="body"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Content
        </label>
        <textarea
          id="body"
          name="body" // IMPORTANT: `name` attribute is needed for Server Actions
          rows="8"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 resize-y"
          required
        ></textarea>
      </div>

      <div className="mb-6">
        <label
          htmlFor="tags"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Tags (comma-separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags" // IMPORTANT: `name` attribute is needed for Server Actions
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., programming, webdev, react"
        />
      </div>

      {/* Message display from formState (optional, can be integrated into alerts too) */}
      {/*
      {formState.message && (
        <p
          className={`text-center mb-4 ${
            formState.success ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {formState.message}
        </p>
      )}
      */}

      <div className="flex items-center justify-between">
        <SubmitButton /> {/* Use the dedicated submit button component */}
      </div>
    </form>
  );
};

export default PostForm;
// components/Navigation.jsx
"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname for App Router

const Navigation = () => {
  const pathname = usePathname(); // Get the current path

  // Base classes for all links
  const baseLinkClasses =
    'font-medium transition-colors duration-300';
  
  // Specific classes for when the link is active
  const activeLinkClasses = 'text-blue-600 hover:text-blue-700';
  
  // Specific classes for when the link is inactive
  const inactiveLinkClasses = 'text-gray-600 hover:text-blue-600';

  const logoClasses =
    'text-2xl font-bold text-gray-800 mr-5 cursor-pointer';

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
      {/* Left section: Logo */}
      <div className="flex items-center">
        <Link href="/" className={logoClasses}>
          H
        </Link>
      </div>

      {/* Right section: Navigation links */}
      <div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`${baseLinkClasses} ${
                pathname === '/' ? activeLinkClasses : inactiveLinkClasses
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={`${baseLinkClasses} ${
                pathname === '/posts' ? activeLinkClasses : inactiveLinkClasses
              }`}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/create-post"
              className={`${baseLinkClasses} ${
                pathname === '/create-post' ? activeLinkClasses : inactiveLinkClasses
              }`}
            >
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
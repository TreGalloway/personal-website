import React from 'react';

const Navbar = () => (
  <nav className="text-sm text-gray-500 bg-gray-50">
    <div className="relative max-w-6xl mx-auto">
      <div className="flex items-center justify-between p-4">
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-12 text-lg cursor-pointer">
            <li className="relative group">
              <button
                type="button"
                className="px-2 py-1 rounded-md group-hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
                Portfolio
              </button>
            </li>
            <li className="relative group">
              <button
                type="button"
                className="px-2 py-1 rounded-md group-hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
                Blog
              </button>
            </li>
            <li className="relative group">
              <button
                type="button"
                className="px-2 py-1 rounded-md group-hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
                Contact
              </button>
            </li>
          </ul>
        </div>
        <a
          href="https://flurly.com/p/tailmars"
          className="items-center justify-center hidden px-4 py-2 text-lg font-medium text-white rounded-md lg:flex bg-primary-600 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
          CV/Resume
        </a>
        <button
          id="menu-toggle"
          className="p-1 rounded-md lg:hidden focus:ring-primary-600 focus:ring-2 focus:outline-none">
          <svg
            id="menu-open"
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            id="menu-close"
            className="hidden w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className="absolute inset-x-0 z-10 hidden pb-4 top-20 lg:hidden"
        id="mobile-menu">
        <div className="p-4 mx-4 font-normal bg-white rounded-md shadow-xl-even">
          <div>
            <h2 className="mb-4 text-lg">Portfolio</h2>
          </div>
          <hr className="my-6 divider" />
          <div>
            <h2 className="mb-4 text-lg">Blog</h2>
          </div>
          <hr className="my-6 divider" />
          <h2 className="mb-4 text-lg">Contact</h2>
          <ul className="w-full space-y-4 text-sm">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <a href="documentation.html#Quick-Start" className="ml-2">
                Documentation
              </a>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
              <a href="documentation.html#Buttons" className="ml-2">
                Components
              </a>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <a href="documentation.html#Change-Log" className="ml-2 mr-4">
                Change Log
              </a>
              <p className="px-2 py-px text-xs rounded-full text-primary-600 bg-primary-100">
                V1.3
              </p>
            </li>
          </ul>
          <hr className="my-6 divider" />
          <a
            href="https://flurly.com/p/tailmars"
            className="flex items-center justify-center px-4 py-2 text-lg font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
            CV/Resume
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

import React from 'react';

const ProjectOne = () => {
  return (
    <div className="transition duration-500 ease-in-out delay-150 transform rounded-lg shadow-xl bg-gray-50 w-96 hover:scale-110 ">
      <a href="/">
        <img
          className="object-cover w-full rounded-t-xl h-60"
          src={require('.//../../assets/image/reactrender.jpg')}
          alt="project screenshot"
        />
      </a>

      <header className="px-8 py-5 text-2xl font-bold rounded-t-lg bg-gray-50">
        Project 1
      </header>
      <div class="py-5 px-8">
        <p>
          This card has a header, body, and footer. This is where the content of
          the card goes.
        </p>

        <div className="grid grid-cols-2 justify-items-center">
          {' '}
          <div>
            <button class="text-lg mt-4 rounded-lg px-8 py-2 text-primary-500 border-2 border-primary-500  hover:bg-primary-600 shadow hover:shadow-xl duration-300">
              Live
            </button>
          </div>
          <div>
            <button class="grid grid-cols-2 text-lg mt-4 rounded-lg px-8 py-2 text-gray-50 border-2 bg-gray-800  hover:bg-primary-600 shadow hover:shadow-xl duration-300">
              <a href="/" className="text-gray-100 hover:text-emerald-400">
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              Code
            </button>
          </div>
        </div>
        {/* <footer class="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
          Updated 3 days ago
        </footer> */}
      </div>
    </div>
  );
};

export default ProjectOne;

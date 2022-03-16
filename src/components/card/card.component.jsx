import React from 'react';

const Card = () => {
  return (
    <div className="transition ease-in-out delay-150 rounded-lg shadow-xl bg-gray-50 w-96">
      <img
        src="../../assets/image/test.png"
        alt="project screenshot"
        className="object-cover w-full rounded-t-xl h-60"
      />
      <header className="px-8 py-5 text-2xl font-bold rounded-t-lg bg-gray-50">
        Project 1
      </header>
      <div class="py-5 px-8">
        <p>
          This card has a header, body, and footer. This is where the content of
          the card goes.
        </p>

        <div class="text-left ">
          <button class="mt-4 rounded-lg px-4 py-2 bg-primary-500 hover:bg-primary-600 text-blue-50 shadow hover:shadow-xl duration-300">
            Get Started
          </button>
        </div>
        {/* <footer class="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
          Updated 3 days ago
        </footer> */}
      </div>
    </div>
  );
};

export default Card;

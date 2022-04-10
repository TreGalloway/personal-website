import React from 'react';

function About({ title, description }) {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <p className="text-2xl font-bold text-center md:text-4xl">{title}</p>
      <p className="mt-4 text-base leading-relaxed text-left text-gray-600 md:text-center">
        {description}
      </p>
    </div>
  );
}

export default About;

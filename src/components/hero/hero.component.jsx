import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col max-w-full px-4 pt-16 pb-20 mx-auto bg-gray-50 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center animate-fade-in-down">
        <h1 className="flex flex-wrap justify-center text-4xl leading-tight text-gray-800 md:text-6xl ">
          <span className="leading-tight">Tre Galloway</span>
        </h1>
        <h1 className="text-5xl text-gray-800 underline decoration-solid decoration-emerald-500">
          Frontend React Developer & Content Creator
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

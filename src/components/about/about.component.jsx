import React from 'react';
import ReactPlayer from 'react-player';

const AboutSection = () => {
  return (
    <div className="bg-gray-50 ">
      <div>
        <h1 className="flex flex-col items-center justify-center max-w-2xl pb-24 mx-auto text-4xl text-center text-gray-800 underline decoration-solid decoration-emerald-500 bg-gray-50 ">
          About Me
        </h1>
        <div className="flex flex-wrap pb-10 grid-cols justify-items-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=xaHqD5T-UgQ" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

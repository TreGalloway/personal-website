import React from 'react';
import ProjectOne from '../cards/project-one-card.component';
import ProjectTwo from '../cards/project-two-card.component';
import ProjectThree from '../cards/project-three-card.component';
import ProjectFour from '../cards/project-four-card.component';

const ProjectSection = () => {
  return (
    <div className="w-full pt-16 pb-20 bg-gray-50">
      <h1 className="flex flex-col items-center justify-center max-w-2xl pb-24 mx-auto text-5xl text-center text-gray-800 underline decoration-solid decoration-emerald-500 bg-gray-50 ">
        Projects
      </h1>

      <div className="grid grid-cols-4 justify-items-center ">
        <div>
          <ProjectOne />
        </div>
        <div>
          <ProjectTwo />
        </div>
        <div>
          <ProjectThree />
        </div>
        <div>
          <ProjectFour />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

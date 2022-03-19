import React from 'react';
import ProjectOne from '../cards/project-one-card.component';
import ProjectTwo from '../cards/project-two-card.component';
import ProjectThree from '../cards/project-three-card.component';
import ProjectFour from '../cards/project-four-card.component';

const ProjectSection = () => {
  return (
    <div className="w-full pt-16 pb-20 bg-gray-50">
      <h1 className="flex flex-col items-center justify-center max-w-2xl pb-24 mx-auto text-4xl text-center text-gray-800 underline decoration-solid decoration-emerald-500 bg-gray-50 ">
        Projects
      </h1>

      <div className="flex flex-wrap justify-items-center lg:flex-nowrap ">
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

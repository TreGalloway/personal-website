import React from 'react';
import ProjectCard from '../card/projectcard.component';

const Projects = ({ projects }) => {
  return (
    <div>
      <h1 className="mt-8 text-2xl font-extrabold text-center underline md:text-4xl decoration-primary-400">
        My Projects
      </h1>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Projects;

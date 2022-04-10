import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
const ProjectCard = ({
  project: { title, image, description, tags, link },
}) => {
  return (
    <div className="w-full p-6 m-4 mx-auto border-2 border-gray-300 group sm:w-1/2 rounded-xl">
      <a href={link}>
        <h1 className="text-xl font-bold text-center">
          {title} <FaExternalLinkAlt className="inline align-baseline" />
        </h1>
        <div>
          <image src={image} />
        </div>
      </a>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 mb-8">
        {tags.map((tag) => (
          <div className="px-4 py-1 border-2 rounded-full">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

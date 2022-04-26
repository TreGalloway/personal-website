import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({
  project: { title, image, description, tags, github, live },
}) => {
  return (
    <div className="w-full p-6 m-4 mx-auto bg-white border-gray-300 border-none shadow-md group sm:w-1/2 rounded-xl">
      <h1 className="text-xl font-bold text-center">
        {title}
        <a href={github}>
          <AiFillGithub
            size={65}
            className="inline px-4 align-middle hover:text-primary-600"
          />
        </a>
        <a href={live}>
          <FaExternalLinkAlt
            size={25}
            className="inline align-middle hover:text-primary-600"
          />
        </a>
      </h1>
      <div className="items-center ">
        <img alt="" src={image} />
      </div>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 mb-8">
        {tags.map((tag) => (
          <div className="px-4 py-1 border-none rounded-md shadow-md bg-slate-50">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({
  project: { title, description, tags, github, live },
}) => {
  return (
    <div className="container py-3 lg:w-6/12">
      <div class="p-1 shadow-xl bg-gradient-to-r from-primary-500 via-sky-500 to-indigo-500 rounded-2xl">
        <a class="block p-6 bg-white sm:p-8 rounded-xl" href="/">
          <div class="mt-16 sm:pr-8">
            <h5 class="text-xl font-bold text-gray-900">{title}</h5>

            <p class="mt-5 text-sm text-gray-500">{description}</p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2 mb-8">
              {tags.map((tag) => (
                <div className="px-4 py-1 border-none rounded-md shadow-md bg-slate-50">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-start">
            {/* Base */}
            <div className="p-2">
              <a
                className="inline-block  p-[2px] rounded bg-gradient-to-r from-primary-500 via-sky-500 to-indigo-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
                href={github}>
                <span className="block px-4 py-1 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
                  <AiFillGithub
                    size={35}
                    className="inline pr-2 align-middle "
                  />
                  Github
                </span>
              </a>
            </div>
            <div className="p-2">
              <a
                className="inline-block p-[2px] rounded bg-gradient-to-r from-primary-500 via-sky-500 to-indigo-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
                href={live}>
                <span className="block px-6 py-2 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
                  <FaExternalLinkAlt
                    size={28}
                    className="inline pr-2 align-middle "
                  />
                  Live
                </span>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

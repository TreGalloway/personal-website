import React from 'react';

const SkillCard = ({ skillName, skillIcon }) => {
  return (
    <div className="p-2 lg:p-6 ">
      <div className="p-1 shadow-xl bg-gradient-to-r from-primary-500 via-sky-500 to-indigo-500 rounded-2xl">
        <p className="block p-6 bg-white sm:p-10 rounded-xl">
          <div className="mt-1 sm:pr-8">
            <div className="flex justify-items-center "> {skillIcon}</div>
            <p className="mt-4 text-xl font-semibold">{skillName}</p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default SkillCard;

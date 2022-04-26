import React from 'react';

const SkillCard = ({ skillName, skillIcon }) => {
  return (
    <div className="flex flex-wrap px-2">
      <div className="flex-none w-40 p-5 m-4 mx-auto text-center border-2 border-gray-300 rounded-lg">
        {skillIcon}
        <p className="mt-4 text-xl font-semibold">{skillName}</p>
      </div>
    </div>
  );
};

export default SkillCard;

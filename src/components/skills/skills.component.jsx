import React from 'react';
import SkillCard from '../card/skillscard.component';

function Skills({ skills }) {
  return (
    <div className="pt-10 lg:px-2.5 ">
      <div className="flex flex-wrap ">
        {skills.map((skill) => {
          return (
            <SkillCard
              skillName={skill.skillName}
              skillIcon={skill.skillIcon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

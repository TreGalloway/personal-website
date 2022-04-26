import React from 'react';
import SkillCard from '../card/skillscard.component';

function Skills({ skills }) {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto mt-8 sm:flex-row align-center">
      {skills.map((skill) => {
        return (
          <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} />
        );
      })}
    </div>
  );
}

export default Skills;

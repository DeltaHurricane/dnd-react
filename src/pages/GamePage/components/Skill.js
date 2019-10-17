import React from 'react';
import Rotator from './Rotator';
import proficiencyChart from '../../../utils/proficiencyChart';


export default function Skill({ skillName, skillAttribute, stats }) {
  const proficiency = proficiencyChart[stats.traits.lv];
  return (
    <div className="info__skills-wrapper__skill">
      <Rotator
        skillName={skillName}
        attributeValue={stats.attributes[skillAttribute]}
        proficiency={proficiency}
      />
    </div>
  );
}

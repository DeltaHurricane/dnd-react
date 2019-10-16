import React from 'react';
import PropTypes from 'prop-types';
import Rotator from './Rotator';
import proficiencyChart from '../../../../utils/proficiencyChart';


export default function Skill({ skillName, skillAttribute, stats }) {
  const { attributes, traits } = stats;
  const proficiency = proficiencyChart[traits.lv];
  return (
    <div className="info__skills-wrapper__skill">
      <Rotator
        skillName={skillName}
        attributeValue={attributes[skillAttribute]}
        proficiency={proficiency}
      />
    </div>
  );
}

Skill.propTypes = {
  skillName: PropTypes.string.isRequired,
  skillAttribute: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,

};

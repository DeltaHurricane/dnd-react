import React from 'react';
import PropTypes from 'prop-types';
import { attributes, skills } from '../../../../utils/attributesSkills';
import Skill from '../Skill';

export default function InfoSkills({ stats }) {
  return (
    <div className="info__skills-wrapper">
      {attributes.map((attribute) => (
        skills[attribute].map((skill) => (
          <Skill key={skill} stats={stats} skillName={skill} skillAttribute={attribute} />
        ))))}
    </div>
  );
}

InfoSkills.propTypes = {
  stats: PropTypes.object.isRequired,
};

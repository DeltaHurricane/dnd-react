import React from 'react';
import { attributes, skills } from '../../../utils/attributesSkills';
import Skill from './Skill';

export default function InfoSkills({ stats }) {
  return (
    <div className="info__skills-wrapper">
      {attributes.map((attribute) => (
        skills[attribute].map((skill) => (
          <Skill stats={stats} skillName={skill} skillAttribute={attribute} />
        ))))}
    </div>
  );
}

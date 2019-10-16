import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';

export default function SkillPannel({
  skillName, modifier, onClick, name,
}) {
  return (
    <div className={`info__skills-wrapper__skill__rotator__face info__skills-wrapper__skill__rotator__face--${name}`}>
      <Button onClick={onClick} name={name} />
      {`${skillName}    ${modifier}`}
      <Button onClick={onClick} name="roll" />
    </div>
  );
}

SkillPannel.propTypes = {
  skillName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

};

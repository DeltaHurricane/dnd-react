import React from 'react';
import Button from '../../../components/Button/Button';

export default function SkillPannel({
  skilName, modifier, onClick, name,
}) {
  return (
    <div className={`info__skills-wrapper__skill__rotator__face info__skills-wrapper__skill__rotator__face--${name}`}>
      <Button onClick={onClick} name={name} />
      {`${skilName}    ${modifier}`}
      <Button onClick={onClick} name="roll" />
    </div>
  );
}

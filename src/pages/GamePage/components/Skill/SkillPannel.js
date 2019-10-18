import React from 'react';
import PropTypes from 'prop-types';
import DiceRollContext from '../../../../contexts/diceRollContext';
import Button from '../../../../components/Button/Button';


export default function SkillPannel({
  skillName, modifier, onClick, name,
}) {
  function handleClick(showModal) {
    return (event) => {
      showModal(modifier, skillName);
      event.stopPropagation();
    };
  }
  return (
    <DiceRollContext.Consumer>
      {({ diceRoll }) => (
        <div className={`info__skills-wrapper__skill__rotator__face info__skills-wrapper__skill__rotator__face--${name}`}>
          <Button onClick={onClick} name={name} />
          {`${skillName}    ${modifier}`}
          <Button onClick={handleClick(diceRoll)} name="roll" />
        </div>
      )}
    </DiceRollContext.Consumer>
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

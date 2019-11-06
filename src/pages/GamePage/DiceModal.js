import React from 'react';
// import PropTypes from 'prop-types'; TODO
import { d20 } from '../../assets';

export default function DiceModal({ configs }) {
  const {
    rollValue,
    rollName,
    modifier,
  } = configs;
  const showCrit = getCrit(rollValue);
  return (
    <div className="game__modal">
      <img className="game__modal__dice-figure" src={d20} alt="Smiley face" />
      <div className={showCrit}>{`${rollValue} + (${modifier}) of ${rollName}`}</div>

    </div>
  );
}

function getCrit(rollValue) {
  const defaultClass = 'game__modal__results';
  switch (rollValue) {
    case 20:
      return `${defaultClass} game__modal__results--crit`;
    case 1:
      return `${defaultClass} game__modal__results--fail`;
    default:
      return defaultClass;
  }
}

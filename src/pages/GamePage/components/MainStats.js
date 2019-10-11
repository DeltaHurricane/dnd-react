import React from 'react';
import { halfOrc } from '../../../assets';
import { attributes } from '../../../utils/attributesSkills';


export default function MainStats({ characterAttributes }) {
  return (
    <div className="char">
      <Attributes stat={characterAttributes} attributesNames={attributes.slice(0, 3)} side="left" />
      <CharacterFigure />
      <Attributes stat={characterAttributes} attributesNames={attributes.slice(3)} side="right" />
    </div>
  );
}

function Attributes({ stat, side, attributesNames }) {
  const arr = side === 'right' ? [0, 1, 0] : [1, 0, 1];
  return (
    <div className="char__attributes">
      { attributesNames.map((name, index) => <Attribute key={name} name={name} value={stat[name]} position={arr[index] ? '--left' : '--right'} />)}
    </div>
  );
}


function CharacterFigure() {
  return (
    <div className="char__figure-wrapper">
      <div className="char__figure-hoverable">
        <img className="char__figure" src={halfOrc} alt="Smiley face" />
      </div>
    </div>
  );
}

function Attribute({ name, value, position }) {
  const mod = Math.floor((value - 10) / 2);
  const modifier = mod >= 1 ? `+${mod}` : mod;
  const show = `char__attribute attribute${position}`;
  return (
    <div className={show}>
      <p>{name}</p>
      <p>{value}</p>
      <p>{modifier}</p>
    </div>
  );
}

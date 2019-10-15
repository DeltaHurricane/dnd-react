import React from 'react';
import {
  halfOrc, elf, dwarf, human,
} from '../../../assets';

export default function CharacterFigure({ race }) {
  let figure = null;
  switch (race) {
    case 'halfOrc':
      figure = halfOrc;
      break;
    case 'dwarf':
      figure = dwarf;
      break;
    case 'elf':
      figure = elf;
      break;
    default:
      figure = human;
  }
  return (
    <div className="char__figure-wrapper">
      <div className="char__figure-hoverable">
        <img className="char__figure" src={figure} alt="Smiley face" />
      </div>
    </div>
  );
}

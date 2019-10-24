import React from 'react';
import FigureBox from './FigureBox';
import CharacterContext from '../../../contexts/characterContext';
import {
  human, halfOrc, dwarf, elf,
} from '../assets';


export default function RaceCard() {
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <div className="card" title="RaceCard">
          <FigureBox description="dwarf" imgSource={dwarf} onClick={character.updateRace} />
          <FigureBox description="human" imgSource={human} onClick={character.updateRace} />
          <FigureBox description="halfOrc" imgSource={halfOrc} onClick={character.updateRace} />
          <FigureBox description="elf" imgSource={elf} onClick={character.updateRace} />
        </div>
      )}
    </CharacterContext.Consumer>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import FigureBox from './FigureBox';
import CharacterContext from '../../../contexts/characterContext';
import {
  human, halfOrc, dwarf, elf,
} from '../assets';


export default function RaceCard({ currentCard }) {
  const show = `card${currentCard !== 0 ? ' fadeaway' : ''}`;
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <div className={show}>
          <FigureBox description="dwarf" imgSource={dwarf} onClick={character.updateRace} />
          <FigureBox description="human" imgSource={human} onClick={character.updateRace} />
          <FigureBox description="halfOrc" imgSource={halfOrc} onClick={character.updateRace} />
          <FigureBox description="elf" imgSource={elf} onClick={character.updateRace} />
        </div>
      )}
    </CharacterContext.Consumer>
  );
}

RaceCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

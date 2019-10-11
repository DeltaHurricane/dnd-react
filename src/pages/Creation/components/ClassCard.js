import React from 'react';
import PropTypes from 'prop-types';
import FigureBox from './FigureBox/FigureBox';
import CharacterContext from '../../../contexts/characterContext';
import {
  human, kobold, d20, elf,
} from '../assets';


export default function ClassCard({ currentCard }) {
  const show = `card${currentCard !== 1 ? ' fadeaway' : ''}`;
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <div className={show}>
          <FigureBox description="kobold" imgSource={kobold} onClick={character.updateClass} />
          <FigureBox description="teste" imgSource={human} onClick={character.updateClass} />
          <FigureBox description="teste" imgSource={d20} onClick={character.updateClass} />
          <FigureBox description="teste" imgSource={elf} onClick={character.updateClass} />
        </div>
      )}
    </CharacterContext.Consumer>
  );
}

ClassCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

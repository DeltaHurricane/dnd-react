import React from 'react';
import PropTypes from 'prop-types';
import FigureBox from '../../../components/FigureBox/FigureBox';
import {
  human, halfOrc, dwarf, elf,
} from '../assets';


export default function RaceCard({ currentCard }) {
  const show = `card${currentCard !== 0 ? ' fadeaway' : ''}`;
  return (
    <div className={show}>
      <FigureBox description="teste" imgSource={dwarf} />
      <FigureBox description="teste" imgSource={human} />
      <FigureBox description="teste" imgSource={halfOrc} />
      <FigureBox description="teste" imgSource={elf} />
    </div>
  );
}

RaceCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

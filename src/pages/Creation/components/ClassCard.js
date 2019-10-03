import React from 'react';
import PropTypes from 'prop-types';
import FigureBox from '../../../components/FigureBox/FigureBox';
import {
  human, kobold, d20, elf,
} from '../assets';


export default function ClassCard({ currentCard }) {
  const show = `card${currentCard !== 1 ? ' fadeaway' : ''}`;
  return (
    <div className={show}>
      <FigureBox description="teste" imgSource={kobold} />
      <FigureBox description="teste" imgSource={human} />
      <FigureBox description="teste" imgSource={d20} />
      <FigureBox description="teste" imgSource={elf} />
    </div>
  );
}

ClassCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

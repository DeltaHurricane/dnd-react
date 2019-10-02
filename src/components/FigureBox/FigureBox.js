import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CurrentCardContext from '../../contexts/currentCardContext';
import './FigureBox.scss';
import Door from './Door';

export default function FigureBox({ description, imgSource }) {
  const nextCard = useContext(CurrentCardContext);
  return (
    <div className="figure-box" onClick={nextCard} role="button" tabIndex={0}>
      <Door imgSource={imgSource} position="top" />
      <p className="description">{description}</p>
      <Door imgSource={imgSource} position="bottom" />
    </div>
  );
}

FigureBox.propTypes = {
  imgSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

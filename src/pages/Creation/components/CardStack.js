import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaceCard from './RaceCard';
import ClassCard from './ClassCard';
import AttributesCard from './AttributesCard';
import TraitsCard from './TraitsCard';
import './CardStack.scss';

export default function CardStack({ currentCard }) {
  const cardToBeRendered = [
    <RaceCard />,
    <ClassCard />,
    <AttributesCard />,
    <TraitsCard />,
    <Link className="input" to="/game"> Jogar</Link>,
  ];
  return (
    <div className="card-stack" data-testid="test">
      {cardToBeRendered[currentCard]}
    </div>

  );
}

CardStack.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

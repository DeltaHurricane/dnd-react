import React from 'react';
import PropTypes from 'prop-types';
import RaceCard from './RaceCard';
import ClassCard from './ClassCard';
import AttributesCard from './AttributesCard';
import TraitsCard from './TraitsCard';
import './CardStack.scss';


export default function CardStack({ currentCard }) {
  return (
    <div className="card-stack">
      <RaceCard currentCard={currentCard} />
      <ClassCard currentCard={currentCard} />
      <AttributesCard currentCard={currentCard} />
      <TraitsCard currentCard={currentCard} />
    </div>

  );
}

CardStack.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

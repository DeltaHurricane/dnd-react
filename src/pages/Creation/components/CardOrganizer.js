import React from 'react';
import PropTypes from 'prop-types';
import RaceCard from './RaceCard';
import ClassCard from './ClassCard';
import AttributesCard from './AttributesCard';
import TraitsCard from './TraitsCard';
import './CardOrganizer.scss';


export default function CardOrganizer({ currentCard }) {
  return (
    <>
      <RaceCard currentCard={currentCard} />
      <ClassCard currentCard={currentCard} />
      <AttributesCard currentCard={currentCard} />
      <TraitsCard currentCard={currentCard} />
    </>
  );
}

CardOrganizer.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function DiceModal({ configs }) {
  const {
    rollValue,
    rollName,
    modifier,
  } = configs;
  return (
    <div className="game__modal">{`${rollValue} + (${modifier}) of ${rollName}`}</div>
  );
}

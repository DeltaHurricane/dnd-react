import React from 'react';
import PropTypes from 'prop-types';
import CharacterFigures from '../../../../assets';

export default function CharacterFigure({ race }) {
  const figure = CharacterFigures[race];
  return (
    <div className="char__figure-wrapper">
      <div className="char__figure-hoverable">
        <img className="char__figure" src={figure} alt="Smiley face" />
      </div>
    </div>
  );
}

CharacterFigure.propTypes = {
  race: PropTypes.string.isRequired,
};

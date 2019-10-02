import React from 'react';
import PropTypes from 'prop-types';
import './Door.scss';

export default function Door({ imgSource, position }) {
  const doorClassName = `door door--${position === 'top' ? 'top' : 'bottom'}`;
  const figureClassName = `door__figure door__figure--${position === 'top' ? 'top' : 'bottom'}`;
  return (
    <div className={doorClassName}>
      <img className={figureClassName} src={imgSource} alt="Smiley face" />
    </div>
  );
}

Door.propTypes = {
  imgSource: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

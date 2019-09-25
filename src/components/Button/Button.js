import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default function Button({ name }) {
  return (
    <button
      className="button button--flash button--confirmation"
      type="button"
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export default function Input({ type, placeholder }) {
  return (
    <input
      className="input input--pulse"
      type={type}
      placeholder={placeholder}
    />
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export default function Input({ type, placeholder, onChange }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

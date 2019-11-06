import React from 'react';
import PropTypes from 'prop-types';

export default function Attribute({ name, value, position }) {
  const mod = Math.floor((value - 10) / 2);
  const modifier = mod >= 1 ? `+${mod}` : mod;
  const show = `char__attribute attribute${position}`;
  return (
    <div className={show}>
      <p>{name}</p>
      <p>{value}</p>
      <p>{modifier}</p>
    </div>
  );
}

Attribute.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  position: PropTypes.string.isRequired,
};

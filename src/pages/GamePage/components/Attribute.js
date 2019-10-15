import React from 'react';

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

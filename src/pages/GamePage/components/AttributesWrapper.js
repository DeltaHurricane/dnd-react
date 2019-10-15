import React from 'react';
import Attribute from './Attribute';

export default function AttributesWrapper({ stat, side, attributesNames }) {
  const arr = side === 'right' ? [0, 1, 0] : [1, 0, 1];
  return (
    <div className="char__attributes">
      { attributesNames.map((name, index) => <Attribute key={name} name={name} value={stat[name]} position={arr[index] ? '--left' : '--right'} />)}
    </div>
  );
}

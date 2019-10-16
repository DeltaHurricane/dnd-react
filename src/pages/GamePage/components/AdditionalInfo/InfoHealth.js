import React from 'react';
import PropTypes from 'prop-types';

export default function InfoHealth({ traits }) {
  return (
    <div className="info__health">
      <div className="info__health__ca">{`CA ${traits.ca}`}</div>
      <div className="info__health__hp">{`HP ${traits.hp}`}</div>
      <div className="info__health__mana">{`Mana ${traits.mana}`}</div>
    </div>
  );
}

InfoHealth.propTypes = {
  traits: PropTypes.object.isRequired,
};

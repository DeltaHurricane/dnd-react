import React from 'react';
import PropTypes from 'prop-types';

export default function InfoTitle({ name }) {
  return (
    <div className="info__title">
      {name}
    </div>
  );
}

InfoTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

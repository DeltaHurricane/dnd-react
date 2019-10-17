import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import './ControlTab.scss';

export default function ControlTab({ currentCard, StartingCard, returnState }) {
  return (
    <div className="control-tab">
      {currentCard > StartingCard && <Button name="<" onClick={returnState} />}
    </div>
  );
}


ControlTab.propTypes = {
  currentCard: PropTypes.number.isRequired,
  StartingCard: PropTypes.number.isRequired,
  returnState: PropTypes.func.isRequired,
};

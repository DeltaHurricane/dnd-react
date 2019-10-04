import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CurrentCardContext from '../../../contexts/currentCardContext';


const attributes = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

export default function AttributesCard({ currentCard }) {
  const show = `card card__form${currentCard !== 2 ? ' fadeaway' : ''}`;
  const nextState = useContext(CurrentCardContext);
  return (
    <form className={show}>
      {attributes.map((atribute) => (
        <Input key={atribute} type="number" placeholder={atribute} onChange={(e) => console.log(e.target.value)} />
      )) }
      <Button name="next" type="button" onClick={nextState} />
    </form>
  );
}

AttributesCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

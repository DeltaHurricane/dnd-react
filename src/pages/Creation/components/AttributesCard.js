import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/Input/Input';
import CurrentCardContext from '../../../contexts/currentCardContext';


const attributes = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

export default function AttributesCard({ currentCard }) {
  const show = `card${currentCard !== 2 ? ' fadeaway' : ''}`;
  const nextState = useContext(CurrentCardContext);
  return (
    <form className={show}>
      {attributes.map((atribute) => (
        <Input key={atribute} type="number" placeholder={atribute} onChange={(e) => console.log(e.target.value)} />
      )) }
      <button name="next" type="button" onClick={nextState}>proximo</button>
    </form>
  );
}

AttributesCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/Input/Input';
import CurrentCardContext from '../../../contexts/currentCardContext';

export default function TraitsCard({ currentCard }) {
  const show = `card${currentCard !== 3 ? ' fadeaway' : ''}`;
  return (
    <form className={show}>
      <Input type="number" placeholder="CA" onChange={(e) => console.log(e.target.value)} />
      <Input type="number" placeholder="HP" onChange={(e) => console.log(e.target.value)} />
      <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
      <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
      <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
      <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
      <button name="next" type="button" onClick={(e) => console.log(e.target.value)}>proximo</button>
    </form>
  );
}


TraitsCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

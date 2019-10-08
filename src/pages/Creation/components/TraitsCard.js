import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CharacterContext from '../../../contexts/characterContext';
import storageService from '../../../services/StorageServices';

// import CurrentCardContext from '../../../contexts/currentCardContext';

export default function TraitsCard({ currentCard }) {
  const show = `card card__form${currentCard !== 3 ? ' fadeaway' : ''}`;
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <form className={show}>
          <Input type="number" placeholder="CA" onChange={(e) => { character.updateTraits(e.target.value, 'CA'); }} />
          <Input type="number" placeholder="HP" onChange={(e) => { character.updateTraits(e.target.value, 'HP'); }} />
          <Input type="text" placeholder="Generico" onChange={(e) => { character.updateTraits(e.target.value, 'Generico'); }} />
          <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
          <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
          <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
          <Button name="next" type="button" onClick={() => storageService.setIn('characterStats', character)} />
        </form>
      )}
    </CharacterContext.Consumer>
  );
}


TraitsCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

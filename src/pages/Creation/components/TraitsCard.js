import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import CharacterContext from '../../../contexts/characterContext';
import storageService from '../../../services/StorageServices';
import CurrentCardContext from '../../../contexts/currentCardContext';

export default function TraitsCard({ currentCard }) {
  const show = `card card__form${currentCard !== 3 ? ' fadeaway' : ''}`;
  const { nextState } = useContext(CurrentCardContext);
  function saveNext(character) {
    nextState();
    storageService.setIn('characterStats', character);
  }
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <form className={show}>
          <Input type="text" placeholder="Name" onChange={(e) => { character.updateTraits(e.target.value, 'name'); }} />
          <Input type="number" placeholder="CA" onChange={(e) => { character.updateTraits(e.target.value, 'ca'); }} />
          <Input type="number" placeholder="HP" onChange={(e) => { character.updateTraits(e.target.value, 'hp'); }} />
          <Input type="text" placeholder="Mana Points" onChange={(e) => { character.updateTraits(e.target.value, 'mana'); }} />
          <Input type="text" placeholder="LV" onChange={(e) => { character.updateTraits(e.target.value, 'lv'); }} />
          <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
          <Button name="next" type="button" onClick={() => saveNext(character)} />
        </form>
      )}
    </CharacterContext.Consumer>
  );
}


TraitsCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

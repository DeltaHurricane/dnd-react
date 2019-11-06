import React, { useContext } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import CharacterContext from '../../../contexts/characterContext';
import storageService from '../../../services/StorageServices';
import CurrentCardContext from '../../../contexts/currentCardContext';
import apiServices from '../../../services/ApiServices';

export default function TraitsCard() {
  const { nextState } = useContext(CurrentCardContext);
  function saveNext(character) {
    const currentGame = storageService.getFrom('currentGame').name;
    const characterToDatabase = {};
    characterToDatabase.username = storageService.getFrom('username').username;
    characterToDatabase.stats = character.stats;
    apiServices.setGameCharacter(currentGame, characterToDatabase);
    storageService.setIn('characterStats', character);
    nextState();
  }
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <form className="card card__form" title="TraitsCard">
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

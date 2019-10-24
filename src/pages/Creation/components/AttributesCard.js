import React, { useContext } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CurrentCardContext from '../../../contexts/currentCardContext';
import CharacterContext from '../../../contexts/characterContext';


const attributes = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

export default function AttributesCard() {
  const { nextState } = useContext(CurrentCardContext);
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <form className="card card__form" title="AttributesCard">
          {attributes.map((attribute) => (
            <Input key={attribute} type="text" placeholder={attribute} onChange={(e) => { character.updateAttributes(e.target.value, attribute); }} />
          )) }
          <Button name="next" type="button" onClick={nextState} />
        </form>
      )}
    </CharacterContext.Consumer>
  );
}

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CurrentCardContext from '../../../contexts/currentCardContext';
import CharacterContext from '../../../contexts/characterContext';


const attributes = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

export default function AttributesCard({ currentCard }) {
  const show = `card card__form${currentCard !== 2 ? ' fadeaway' : ''}`;
  const { nextState } = useContext(CurrentCardContext);
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <form className={show}>
          {attributes.map((attribute) => (
            <Input key={attribute} type="text" placeholder={attribute} onChange={(e) => { character.updateAttributes(e.target.value, attribute); }} />
          )) }
          <Button name="next" type="button" onClick={nextState} />
        </form>
      )}
    </CharacterContext.Consumer>
  );
}

AttributesCard.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

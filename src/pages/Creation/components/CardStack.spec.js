import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CardStack from './CardStack';
import CurrentCardContext from '../../../contexts/currentCardContext';
import CharacterContex from '../../../contexts/characterContext';
import character from '../../../utils/character';

function renderCard(currentCard) {
  return (
    render(
      <BrowserRouter>
        <CharacterContex.Provider value={{ character }}>
          <CurrentCardContext.Provider value={{ nextState: () => {} }}>
            <CardStack currentCard={currentCard} />
          </CurrentCardContext.Provider>
        </CharacterContex.Provider>
      </BrowserRouter>,
    ));
}

test('Check Race Card Render', () => {
  const RACECARD = 0;
  const { getByTitle } = renderCard(RACECARD);
  expect(getByTitle('RaceCard')).toBeTruthy();
});

test('Check Class Card Render', () => {
  const CLASSCARD = 1;
  const { getByTitle } = renderCard(CLASSCARD);
  expect(getByTitle('ClassCard')).toBeTruthy();
});

test('Check Attributes Card Render', () => {
  const ATTRIBUTESCARD = 2;
  const { getByTitle } = renderCard(ATTRIBUTESCARD);
  expect(getByTitle('AttributesCard')).toBeTruthy();
});

test('Check Traits Card Render', () => {
  const TRAITSCARD = 3;
  const { getByTitle } = renderCard(TRAITSCARD);
  expect(getByTitle('TraitsCard')).toBeTruthy();
});

test('Check Link To Game Render', () => {
  const RACECARD = 4;
  const { getByText } = renderCard(RACECARD);
  expect(getByText('Jogar')).toBeTruthy();
});

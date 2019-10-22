import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import CurrentCardContext from '../../../contexts/currentCardContext';
import CharacterContex from '../../../contexts/characterContext';
import character from '../../../utils/character';
import RaceCard from './RaceCard';

function renderCard(callback) {
  return (
    render(
      <CharacterContex.Provider value={{ character }}>
        <CurrentCardContext.Provider value={{ nextState: callback }}>
          <RaceCard />
        </CurrentCardContext.Provider>
      </CharacterContex.Provider>,
    ));
}


test('Check Race Card Content Render (4 Buttons)', () => {
  const ALLBUTTONS = 4;
  const callback = sinon.spy();
  const { getAllByRole } = renderCard(callback);
  getAllByRole('button').map((button) => fireEvent.click(button));
  expect(callback.callCount).toEqual(ALLBUTTONS);
  expect(getAllByRole('button').length).toEqual(ALLBUTTONS);
});

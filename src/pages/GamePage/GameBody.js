import React from 'react';
import CharacterSheet from './components/CharacterSheet';
// import InfoTab from './components/InfoTab'; TODO

export default function GameBody() {
  return (
    <div className="game__body">
      <CharacterSheet />
      {/* <InfoTab />  TODO */}
    </div>
  );
}

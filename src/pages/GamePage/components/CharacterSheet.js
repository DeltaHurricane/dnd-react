import React from 'react';
import MainStats from './MainStats';
import CharacterContext from '../../../contexts/characterContext';
import AdditionalInfo from './AdditionalInfo';

export default function CharacterSheet() {
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <div className="game__sheet">
          <MainStats characterAttributes={character.stats.attributes} race={character.stats.race} />
          <AdditionalInfo character={character} />
        </div>
      )}
    </CharacterContext.Consumer>
  );
}

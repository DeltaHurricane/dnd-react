import React from 'react';
import InfoSkills from './InfoSkills';
import InfoHealth from './InfoHealth';
import InfoTitle from './InfoTitle';


export default function AdditionalInfo({ character }) {
  return (
    <div className="info">
      <InfoTitle name={character.stats.traits.name} />
      <InfoHealth traits={character.stats.traits} />
      <InfoTitle name="Is Kills" />
      <InfoSkills stats={character.stats} />
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import InfoSkills from './InfoSkills';
import InfoHealth from './InfoHealth';
import InfoTitle from './InfoTitle';


export default function AdditionalInfo({ character }) {
  const { stats } = character;
  return (
    <div className="info">
      <InfoTitle name={stats.traits.name} />
      <InfoHealth traits={stats.traits} />
      <InfoTitle name="Is Kills" />
      <InfoSkills stats={stats} />
    </div>
  );
}

AdditionalInfo.propTypes = {
  character: PropTypes.object.isRequired,
};

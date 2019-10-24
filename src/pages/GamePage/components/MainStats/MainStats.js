import React from 'react';
import PropTypes from 'prop-types';
import CharacterFigure from './CharacterFigure';
import AttributesWrapper from './AttributesWrapper';
import { attributes } from '../../../../utils/attributesSkills';


export default function MainStats({ characterAttributes, race }) {
  return (
    <div className="char">
      <AttributesWrapper stat={characterAttributes} attributesNames={attributes.slice(0, 3)} side="left" />
      <CharacterFigure race={race} />
      <AttributesWrapper stat={characterAttributes} attributesNames={attributes.slice(3)} side="right" />
    </div>
  );
}

MainStats.propTypes = {
  characterAttributes: PropTypes.object.isRequired,
  race: PropTypes.string.isRequired,
};

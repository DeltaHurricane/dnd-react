import React from 'react';
import MainStats from './MainStats';
import CharacterContext from '../../../contexts/characterContext';
import { attributes, skills } from '../../../utils/attributesSkills';

export default function CharacterSheet() {
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <div className="game__sheet">
          <MainStats characterAttributes={character.stats.attributes} raceFigure={character.stats.race} />
          <AdditionalInfo character={character} />
        </div>
      )}
    </CharacterContext.Consumer>
  );
}

function AdditionalInfo({ character }) {
  return (
    <div className="info">
      <InfoTitle name={character.stats.traits.name} />
      <InfoHealth traits={character.stats.traits} />
      <InfoTitle name="Is Kills" />
      <InfoSkills stats={character.stats} />
    </div>
  );
}

function InfoTitle({ name }) {
  return (
    <div className="info__title">
      {name}
    </div>
  );
}

function InfoHealth({ traits }) {
  return (
    <div className="info__health">
      <div className="info__health__ca">{`CA ${traits.ca}`}</div>
      <div className="info__health__hp">{`HP ${traits.hp}`}</div>
      <div className="info__health__mana">{`Mana ${traits.mana}`}</div>
    </div>
  );
}

function InfoSkills({ stats }) {
  return (
    <div className="info__skills">
      {attributes.map((attribute) => (
        skills[attribute].map((skill) => (
          <Skill stats={stats} skillName={skill} skillAttribute={attribute} />
        ))))}
    </div>
  );
}

function Skill({ skillName, skillAttribute, stats }) {
  const mod = Math.floor((stats.attributes[skillAttribute] - 10) / 2);
  const modifier = mod >= 1 ? `+${mod}` : mod;
  return (
    <div className="info__skills__skill">
      <Rotator skillName={skillName} modifier={modifier} />
    </div>
  );
}

class Rotator extends React.Component {
  constructor(props) {
    super(props);
    this.skillName = props.skillName;
    this.modifier = props.modifier;
    this.state = { currentFace: 0 };
    this.changeFace = this.changeFace.bind(this);
    this.faceChoice = ['-front', '-left', '-right'];
  }

  changeFace() {
    const current = this.state.currentFace < 2 ? this.state.currentFace + 1 : 0;
    this.setState(() => ({ currentFace: current }));
  }


  render() {
    const show = `info__skills__skill__rotator info__skills__skill__rotator--show${this.faceChoice[this.state.currentFace]}`;
    return (
      <div className={show}>
        <div className="info__skills__skill__rotator__face info__skills__skill__rotator__face--front" onClick={this.changeFace} role="button" tabIndex={0}>
          {this.skillName}
          {this.modifier}
        </div>
        <div className="info__skills__skill__rotator__face info__skills__skill__rotator__face--left" onClick={this.changeFace} role="button" tabIndex={0}>left</div>
        <div className="info__skills__skill__rotator__face info__skills__skill__rotator__face--right" onClick={this.changeFace} role="button" tabIndex={0}>right</div>
      </div>
    );
  }
}

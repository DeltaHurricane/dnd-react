import React from 'react';
import SkillPannel from './SkillPannel';
import { getModifier } from '../../../utils/transformers';

class Rotator extends React.Component {
  constructor(props) {
    super(props);
    this.proficiency = props.proficiency;
    this.skillName = props.skillName;
    this.state = { currentFace: 0 };
    this.changeFace = this.changeFace.bind(this);
    this.faceChoice = ['untrained', 'proficient', 'expert'];
    this.untrained = getModifier(props.attributeValue, this.proficiency, this.faceChoice[0]);
    this.proficient = getModifier(props.attributeValue, this.proficiency, this.faceChoice[1]);
    this.expert = getModifier(props.attributeValue, this.proficiency, this.faceChoice[2]);
  }

  changeFace() {
    const { currentFace } = this.state;
    const current = currentFace < 2 ? currentFace + 1 : 0;
    this.setState(() => ({ currentFace: current }));
  }


  render() {
    const show = `info__skills-wrapper__skill__rotator info__skills-wrapper__skill__rotator--show-${this.faceChoice[this.state.currentFace]}`;
    return (
      <div className={show}>
        <SkillPannel
          name={this.faceChoice[0]}
          onClick={this.changeFace}
          modifier={this.untrained}
          skilName={this.skillName}
        />
        <SkillPannel
          name={this.faceChoice[1]}
          onClick={this.changeFace}
          modifier={this.proficient}
          skilName={this.skillName}
        />
        <SkillPannel
          name={this.faceChoice[2]}
          onClick={this.changeFace}
          modifier={this.expert}
          skilName={this.skillName}
        />
      </div>
    );
  }
}

export default Rotator;

import React from 'react';
import PropTypes from 'prop-types';
import SkillPannel from './SkillPannel';
import { getModifier } from '../../../../utils/transformers';
import { UNTRAINED, PROFICIENT, EXPERT } from './facheChoice';

class Rotator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentFace: UNTRAINED };
    this.changeFace = this.changeFace.bind(this);
    this.selectFace = this.selectFace.bind(this);
  }

  getContainerClassName() {
    const { currentFace } = this.state;
    return `info__skills-wrapper__skill__rotator info__skills-wrapper__skill__rotator--show-${currentFace.toLowerCase()}`;
  }

  changeFace() {
    const current = this.selectFace();
    this.setState(() => ({ currentFace: current }));
  }

  selectFace() {
    const { currentFace } = this.state;
    switch (currentFace) {
      case UNTRAINED:
        return PROFICIENT;
      case PROFICIENT:
        return EXPERT;
      default:
        return UNTRAINED;
    }
  }

  render() {
    const {
      skillName,
      attributeValue,
      proficiency,
    } = this.props;
    return (
      <div className={this.getContainerClassName()}>
        <SkillPannel
          name={UNTRAINED.toLowerCase()}
          onClick={this.changeFace}
          modifier={getModifier(attributeValue, proficiency, UNTRAINED.toLowerCase())}
          skillName={skillName}
        />
        <SkillPannel
          name={PROFICIENT.toLowerCase()}
          onClick={this.changeFace}
          modifier={getModifier(attributeValue, proficiency, PROFICIENT.toLowerCase())}
          skillName={skillName}
        />
        <SkillPannel
          name={EXPERT.toLowerCase()}
          onClick={this.changeFace}
          modifier={getModifier(attributeValue, proficiency, EXPERT.toLowerCase())}
          skillName={skillName}
        />
      </div>
    );
  }
}

export default Rotator;


Rotator.propTypes = {
  skillName: PropTypes.string.isRequired,
  attributeValue: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
};

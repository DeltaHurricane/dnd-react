import React from 'react';
import { mount } from 'enzyme';
import { attributes, skills } from '../../../../utils/attributesSkills';
import InfoSkills from './InfoSkills';
import DiceRollContext from '../../../../contexts/diceRollContext';
import Skill from '../Skill';


describe('Info Skills', () => {
  it('should create one element for each attribute and skills', () => {
    const props = {
      stats: {
        attributes: {
          STR: '3', DEX: '3', CON: '3', INT: '3', WIS: '3', CHA: '3',
        },
        class: 'teste',
        race: 'human',
        traits: {
          name: '3', ca: '3', hp: '3', mana: '3', lv: '3',
        },
      },
    };
    const mountedComponent = mount(
      <DiceRollContext.Provider value={{ diceRoll: () => { 'mock'; } }}>
        <InfoSkills {...props} />
      </DiceRollContext.Provider>,
    );
    const renderedSkills = mountedComponent.find(Skill);
    // expect(renderedSkills.debug()).toBeFalsy();
    attributes.forEach((att) => {
      skills[att].forEach((skill) => {
        expect(renderedSkills.forEach((name) => name.text().match(skill))).toBeTruthy();
      });
    });
  });
});

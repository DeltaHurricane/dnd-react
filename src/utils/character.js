class Character {
  constructor() {
    this.stats = {
      race: null,
      attributes: {},
      class: null,
      traits: {},
    };
    this.updateCharacterAttribute = this.updateCharacterAttribute.bind(this);
    this.updateRace = this.updateRace.bind(this);
    this.updateClass = this.updateClass.bind(this);
    this.updateAttributes = this.updateAttributes.bind(this);
    this.updateTraits = this.updateTraits.bind(this);
  }

  updateCharacterAttribute(key, value, propertieName) {
    if (propertieName) {
      const propertie = [];
      propertie[propertieName] = value;
      this.stats[key] = { ...this.stats[key], ...propertie };
    } else {
      this.stats[key] = value;
    }
    return this;
  }


  updateRace(characterRace) {
    return this.updateCharacterAttribute('race', characterRace);
  }

  updateClass(characterClass) {
    return this.updateCharacterAttribute('class', characterClass);
  }

  updateAttributes(characterAttributes, attributeName) {
    return this.updateCharacterAttribute('attributes', characterAttributes, attributeName);
  }

  updateTraits(characterTraits, traitName) {
    return this.updateCharacterAttribute('traits', characterTraits, traitName);
  }
}

export default new Character();

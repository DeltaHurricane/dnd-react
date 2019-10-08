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
    console.log(this);
  }


  updateRace(characterRace) {
    this.updateCharacterAttribute('race', characterRace);
  }

  updateClass(characterClass) {
    this.updateCharacterAttribute('class', characterClass);
  }

  updateAttributes(characterAttributes, attributeName) {
    this.updateCharacterAttribute('attributes', characterAttributes, attributeName);
  }

  updateTraits(characterTraits, traitName) {
    this.updateCharacterAttribute('traits', characterTraits, traitName);
  }
}

export default new Character();

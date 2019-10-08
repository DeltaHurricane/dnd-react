import React from 'react';
import Routes from './Routes';
import CharacterContext from './contexts/characterContext';
import './App.scss';
import characterLoad from './utils/character';
import getProperties from './services/getProperties';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: characterLoad,
      racesInfo: this.racesInfo,
      classesInfo: this.classesInfo,
    };

    this.getRaces = this.getRaces.bind(this);
    this.getClasses = this.getClasses.bind(this);
  }

  componentDidMount() {
    getProperties('classes').then(this.getClasses);
    getProperties('races').then(this.getRaces);
  }

  getRaces(racesInfo) {
    this.setState(() => ({ racesInfo }));
  }

  getClasses(classesInfo) {
    this.setState(() => ({ classesInfo }));
  }

  render() {
    return (
      <CharacterContext.Provider value={this.state}>
        <Routes />
      </CharacterContext.Provider>
    );
  }
}

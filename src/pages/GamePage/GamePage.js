import React from 'react';
import GameBody from './GameBody';
import AppHeader from '../../components/AppHeader/AppHeader';
import DiceRollContext from '../../contexts/diceRollContext';
import DiceRoll from './DiceModal';
import './GamePage.scss';

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rollValue: null,
      modifier: null,
      rollName: null,
      rolled: true,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(modifier, rollName) {
    const rollValue = this.diceRoll();
    this.setState({
      rollValue,
      modifier,
      rollName,
      rolled: true,
    });
  }

  hideModal() {
    this.setState({ rolled: false });
  }


  diceRoll() {
    return Math.floor(Math.random() * 20) + 1;
  }

  render() {
    const { rolled } = this.state;
    return (
      <div className="game" onClick={this.hideModal} role="button" tabIndex={0}>
        <AppHeader />
        <DiceRollContext.Provider value={{ showModal: this.showModal }}>
          <GameBody />
        </DiceRollContext.Provider>
        {rolled && <DiceRoll configs={this.state} />}
      </div>
    );
  }
}

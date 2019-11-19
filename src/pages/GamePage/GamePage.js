import React from 'react';
import socketIOClient from 'socket.io-client';
import GameBody from './GameBody';
import AppHeader from '../../components/AppHeader/AppHeader';
import DiceRollContext from '../../contexts/diceRollContext';
import DiceRoll from './DiceModal';
import './GamePage.scss';

const endpoint = 'http://127.0.0.1:5000';

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
    this.diceRoll = this.diceRoll.bind(this);
  }

  componentDidMount() {
    const socket = socketIOClient(endpoint);
    console.log(socket);
    socket.on('FromAPI', (data) => console.log(data));
  }

  showModal(modifier, rollName, rollValue) {
    this.setState({
      rollValue,
      modifier,
      rollName,
    });
  }

  hideModal() {
    this.setState({ rollValue: false });
  }


  diceRoll(modifier, rollName) {
    const rollValue = Math.floor(Math.random() * 20) + 1;
    this.showModal(modifier, rollName, rollValue);
  }

  render() {
    const { rollValue } = this.state;
    return (
      <div className="game" onClick={this.hideModal} role="button" tabIndex={0}>
        <AppHeader />
        <DiceRollContext.Provider value={{ diceRoll: this.diceRoll }}>
          <GameBody />
        </DiceRollContext.Provider>
        {rollValue && (
          <>
            <DiceRoll configs={this.state} />
            <div className="game__blur" />
          </>
        )}

      </div>
    );
  }
}

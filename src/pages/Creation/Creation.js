import React from 'react';
import Button from '../../components/Button/Button';
import CurrentCardContext from '../../contexts/currentCardContext';
import CardOrganizer from './Cards';

export default class Creation extends React.Component {
  FinalCard = 4;

  StartingCard = 0;

  constructor(props) {
    super(props);
    this.state = { currentCard: this.StartingCard };
    this.setCurrentcCard = this.setCurrentcCard.bind(this);
    this.proximoEstado = this.proximoEstado.bind(this);
    this.voltaEstado = this.voltaEstado.bind(this);
  }

  setCurrentcCard(currentCard) {
    this.setState({
      currentCard,
    });
  }

  voltaEstado() {
    const { currentCard } = this.state;
    if (currentCard > this.StartingCard) {
      this.setState((prevState) => ({ currentCard: prevState.currentCard - 1 }));
    }
  }

  proximoEstado() {
    const { currentCard } = this.state;
    if (currentCard < this.FinalCard) {
      this.setState((prevState) => ({ currentCard: prevState.currentCard + 1 }));
    }
  }


  render() {
    const { currentCard } = this.state;
    return (
      <CurrentCardContext.Provider value={this.proximoEstado}>
        <CardOrganizer currentCard={currentCard} next={this.ProximoEstado} />
        {currentCard > this.StartingCard && <Button name="<" onClick={this.voltaEstado} />}
      </CurrentCardContext.Provider>
    );
  }
}

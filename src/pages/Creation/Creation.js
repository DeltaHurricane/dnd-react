import React from 'react';
import Button from '../../components/Button/Button';
import CurrentCardContext from '../../contexts/currentCardContext';
import CardOrganizer from './components/CardOrganizer';

export default class Creation extends React.Component {
  FinalCard = 4;

  StartingCard = 0;

  constructor(props) {
    super(props);
    this.nextState = this.nextState.bind(this);
    this.state = { currentCard: this.StartingCard };
    this.setCurrentcCard = this.setCurrentcCard.bind(this);
    this.returnState = this.returnState.bind(this);
  }

  setCurrentcCard(currentCard) {
    this.setState({
      currentCard,
    });
  }

  returnState() {
    const { currentCard } = this.state;
    if (currentCard > this.StartingCard) {
      this.setState((prevState) => ({ currentCard: prevState.currentCard - 1 }));
    }
  }

  nextState() {
    const { currentCard } = this.state;
    if (currentCard < this.FinalCard) {
      this.setState((prevState) => ({ currentCard: prevState.currentCard + 1 }));
    }
  }


  render() {
    const { currentCard } = this.state;
    return (
      <CurrentCardContext.Provider value={this.nextState}>
        <CardOrganizer currentCard={currentCard} />
        {currentCard > this.StartingCard && <Button name="<" onClick={this.returnState} />}
      </CurrentCardContext.Provider>
    );
  }
}

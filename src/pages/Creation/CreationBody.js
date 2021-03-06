import React from 'react';
import CurrentCardContext from '../../contexts/currentCardContext';
import CardStack from './components/CardStack';
import ControlTab from './components/ControlTab';

export default class CreationBody extends React.Component {
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
      <CurrentCardContext.Provider value={{ nextState: this.nextState }}>
        <CardStack currentCard={currentCard} />
        <ControlTab
          currentCard={currentCard}
          StartingCard={this.StartingCard}
          returnState={this.returnState}
        />
      </CurrentCardContext.Provider>
    );
  }
}

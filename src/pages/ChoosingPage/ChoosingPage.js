import React from 'react';
import apiServices from '../../services/ApiServices';
import storageServices from '../../services/StorageServices';
import Button from '../../components/Button/Button';
import CharacterContext from '../../contexts/characterContext';


export default class ChoosingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadComplete: false,
      games: null,
    };
    this.renderGames = this.renderGames.bind(this);
    this.saveChoosen = this.saveChoosen.bind(this);
  }

  componentDidMount() {
    const games = apiServices.getGames();
    games
      .then((game) => this.renderGames(game));
  }


  saveChoosen(character, { _id }) {
    apiServices.getGameInfo(_id)
      .then((game) => {
        storageServices.setIn('currentGame', game);
        const previousChar = characterExists(game);
        if (previousChar) {
          storageServices.setIn('characterStats', { stats: previousChar.stats });
          character.updateStats(previousChar);
          this.setState({ }, () => {
            this.props.history.push('/game');
          });
        } else {
          this.setState({ }, () => {
            this.props.history.push('/creation');
          });
        }
      });
  }


  renderGames(games) {
    this.setState({ games, loadComplete: true }, () => {
    });
  }

  render() {
    const { loadComplete, games } = this.state;
    return (
      <CharacterContext.Consumer>
        {({ character }) => (
          <div className="choice">
            {!loadComplete && <div>loading</div>}
            {loadComplete && games.map((game) => <Button key={game.name} onClick={() => this.saveChoosen(character, game)} name={game.name} />)}
          </div>
        )}
      </CharacterContext.Consumer>
    );
  }
}


function characterExists(game) {
  const { username } = storageServices.getFrom('username');
  const previousChar = game.characters.filter((char) => char.username === username)[0];
  if (previousChar === undefined) {
    return false;
  }
  return previousChar;
}

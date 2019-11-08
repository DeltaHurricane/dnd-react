import baseUrl from '../utils/baseUrl';
import apiAbstraction from '../utils/apiAbstraction';

const ApiServices = {
  async getAddress(infoType, api = apiAbstraction) {
    const response = await api.fetch(`${baseUrl}/${infoType}`);
    const adresses = await response.json();
    return { results: adresses.results, infoType };
  },

  getFullInfo(adresses, api = apiAbstraction) {
    return Promise.all(adresses.map(async ({ url }) => {
      const response = await api.fetch(url);
      const fullInfo = response.json();
      return fullInfo;
    }));
  },

  async getLoginToken(login) {
    const myInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    };
    const response = await fetch('http://localhost:5000/login', myInit);
    return response.json();
  },

  async getGames(username) {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`http://localhost:5000/games/${username}`, myInit);
    return response.json();
  },

  async getGameInfo(username, id) {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`http://localhost:5000/games/${username}/${id}`, myInit);
    return response.json();
  },

  async setGameCharacter(game, character) {
    const myInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    };
    const response = await fetch(`http://localhost:5000/games/${game}`, myInit);
    return response.json();
  },
};

export default ApiServices;

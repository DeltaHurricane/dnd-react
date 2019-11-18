import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import apiAbstraction from '../utils/apiAbstraction';
import storageServices from './StorageServices';

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

  async getGames() {
    const { token } = storageServices.getFrom('token');
    const response = await axios.get('http://localhost:5000/games/user', { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  },

  async getGameInfo(id) {
    const { token } = storageServices.getFrom('token');
    const response = await axios.get(`http://localhost:5000/games/user/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  },

  async setGameCharacter(id, character) {
    const { token } = storageServices.getFrom('token');
    const response = await axios.post(`http://localhost:5000/games/${id}`, character, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  },
};

export default ApiServices;

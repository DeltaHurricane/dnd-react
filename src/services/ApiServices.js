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
};

export default ApiServices;

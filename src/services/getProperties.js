import StorageService from './StorageServices';
import whitelistFilter from '../utils/transformers';
import ApiServices from './ApiServices';

function getInfo(infoType, api = ApiServices) {
  return api.getAddress(infoType)
    .then(whitelistFilter)
    .then(api.getFullInfo);
}

export default async function loadApiInfo(infoType, storage = StorageService) {
  if (storage.exists(infoType)) {
    return storage.getFrom(infoType);
  }
  const info = await getInfo(infoType);
  storage.setIn(infoType, info);
  return info;
}

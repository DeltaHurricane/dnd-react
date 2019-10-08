import StorageServices from './StorageServices';
import character from '../utils/character';

export default function load() {
  if (StorageServices.exists('characterStats')) {
    character.stats = StorageServices.getFrom('characterStats');
  }
  return character;
}

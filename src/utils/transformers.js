import whitelist from './whitelist';


export default function whitelistFilter({ results, infoType }) {
  return results.filter(({ name }) => whitelist[infoType].includes(name));
}

export function getModifier(attribute, proficiency, train) {
  const untrained = 0;
  const trained = 1;
  const expert = 2;
  const mod = Math.floor((attribute - 10) / 2);
  if (train === 'expert') {
    const modWithProficience = mod + proficiency * expert;
    return modWithProficience >= 0 ? `+${modWithProficience}` : modWithProficience;
  } if (train === 'proficient') {
    const modWithProficience = mod + proficiency * trained;
    return modWithProficience >= 0 ? `+${modWithProficience}` : modWithProficience;
  }
  const modWithProficience = mod + proficiency * untrained;
  return modWithProficience >= 0 ? `+${modWithProficience}` : modWithProficience;
}

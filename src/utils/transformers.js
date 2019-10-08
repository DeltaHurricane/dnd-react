import whitelist from './whitelist';


export default function whitelistFilter({ results, infoType }) {
  return results.filter(({ name }) => whitelist[infoType].includes(name));
}

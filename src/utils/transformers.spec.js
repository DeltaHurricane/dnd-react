import '@babel/polyfill';
import whitelistFilter from './transformers';

describe('when testing whitelist entries', () => {
  const RESULTS = [{ name: 'Druid' }, { name: 'Human' }];
  it('should not permit invalid class values on whitelisting', () => {
    expect(whitelistFilter({ results: RESULTS, infoType: 'classes' })).toStrictEqual([{ name: 'Druid' }]);
  });
  it('should not permit invalid race values on whitelisting', () => {
    expect(whitelistFilter({ results: RESULTS, infoType: 'races' })).toStrictEqual([{ name: 'Human' }]);
  });
});

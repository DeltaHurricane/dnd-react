import '@babel/polyfill';
import ApiServices from './ApiServices';


const FAKE_API = {
  fetch: jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(({ results: 'MOCK_LIST' })),
  })),
};

const MOCK_VALUES = jest.fn();

MOCK_VALUES
  .mockReturnValueOnce('MOCK_TYPE')
  .mockReturnValueOnce(['FIRST_CALL', 'SECOND_CALL']);


describe('test Api services', () => {
  it('should return object with adress list and keytype',
    () => (ApiServices.getAddress(MOCK_VALUES(), FAKE_API)
      .then((data) => { expect(data).toStrictEqual({ results: 'MOCK_LIST', infoType: 'MOCK_TYPE' }); })));
  it('should return FAKE_API respose repeated n = array size passed',
    () => (ApiServices.getFullInfo(MOCK_VALUES(), FAKE_API)
      .then((data) => { expect(data).toStrictEqual([{ results: 'MOCK_LIST' }, { results: 'MOCK_LIST' }]); })));
  it('should call fetch 3 times', () => {
    expect(FAKE_API.fetch.mock.calls.length).toBe(3);
  });
  it('check first call to FAKE_API fetch', () => {
    expect(FAKE_API.fetch.mock.calls[0][0]).toBe('http://www.dnd5eapi.co/api/MOCK_TYPE');
  });
});

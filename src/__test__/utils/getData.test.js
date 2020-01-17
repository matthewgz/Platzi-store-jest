import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar un API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '13245' }));

    getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});

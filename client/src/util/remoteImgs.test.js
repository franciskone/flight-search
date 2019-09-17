import { airlineFaviconUrl } from './remoteImgs';
import { AIRLINE_FAVICON_ROOT_URL } from '../constants';

describe('airlineFaviconUrl', () => {
  it('return the correct url', () => {
    expect(airlineFaviconUrl('test')).toBe(`${AIRLINE_FAVICON_ROOT_URL}/test.png`);
  });
});

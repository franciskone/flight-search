import flightSearchAction, { flightSearchActionType } from './flightSearchActions';

const {
  SEARCH, SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_TRY_AGAIN,
} = flightSearchActionType;

const {
  search,
  searchSuccess,
  searchError,
  searchTryAgain,
} = flightSearchAction;

export const flightSearchParams = {
  originPlace: 'originPlace test',
  destinationPlace: 'destinationPlace test',
  outboundDate: 'outboundDate test',
  inboundDate: 'inboundDate test',
  adults: 'adults test',
};

describe('flightSearchActions', () => {
  it('search', () => {
    expect(search(flightSearchParams)).toEqual({
      type: SEARCH,
      payload: flightSearchParams,
    });
  });
  
  it('search success', () => {
    const payload = { a: 'test' };
    
    expect(searchSuccess(payload)).toEqual({
      type: SEARCH_SUCCESS,
      payload,
    });
  });
  
  it('search error', () => {
    const payload = 'test';
  
    expect(searchError(payload)).toEqual({
      type: SEARCH_ERROR,
      payload,
    });
  });
  
  it('search try again', () => {
    expect(searchTryAgain()).toEqual({
      type: SEARCH_TRY_AGAIN,
      payload: null,
    });
  });
});

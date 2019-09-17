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

describe('flightSearchActions', () => {
  it('search', () => {
    const payload = {
      originPlace: 'originPlace test',
      destinationPlace: 'destinationPlace test',
      outboundDate: 'outboundDate test',
      inboundDate: 'inboundDate test',
      adults: 'adults test',
    };
    
    expect(search(payload)).toEqual({
      type: SEARCH,
      payload,
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

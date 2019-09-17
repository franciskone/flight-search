import flightSearchReducer, { flightSearchReducerInitState, initItineraryData } from './flightSearchReducer';
import { flightSearchActionType } from './flightSearchActions';

describe('flightSearchReducer', () => {
  it('searchCase', () => {
    const testAction = {
      type: flightSearchActionType.SEARCH,
      payload: {
        test: 'hello',
      },
    };
    
    const testFinalState = {
      ...flightSearchReducerInitState,
      searchTryAgainParams: testAction.payload,
      isLoading: true,
      error: null,
    };
    
    expect(
      flightSearchReducer(flightSearchReducerInitState, testAction),
      testAction,
    ).toEqual(testFinalState);
  });

  it('searchSuccessCase', () => {
    const testInitState = {
      ...flightSearchReducerInitState,
      searchTryAgainParams: { test: 'a' },
      isLoading: true,
      error: 'error',
    };
    
    const testAction = {
      type: flightSearchActionType.SEARCH_SUCCESS,
      payload: {
        res: 'test',
      },
    };
    
    const testFinalState = {
      ...testInitState,
      ...testAction.payload,
      searchTryAgainParams: flightSearchReducerInitState.searchTryAgainParams,
      isLoading: false,
      error: null,
    };

    expect(
      flightSearchReducer(testInitState, testAction),
      testAction,
    ).toEqual(testFinalState);
  });

  it('searchErrorCase', () => {
    const testInitState = {
      ...flightSearchReducerInitState,
      searchTryAgainParams: { test: 'a' },
      isLoading: true,
      error: 'error',
    };
  
    const testAction = {
      type: flightSearchActionType.SEARCH_ERROR,
      payload: 'error message',
    };
  
    const testFinalState = {
      ...testInitState,
      ...initItineraryData,
      isLoading: false,
      error: testAction.payload,
    };
    
    expect(
      flightSearchReducer(testInitState, testAction),
      testAction,
    ).toEqual(testFinalState);
  });
});

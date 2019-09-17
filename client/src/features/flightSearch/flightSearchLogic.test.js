import { createMockStore } from 'redux-logic-test';
import flightSearchLogic from './flightSearchLogic';
import flightSearchActions from './flightSearchActions';
import { flightSearchParams } from './flightSearchActions.test';
import { FLIGHT_SEARCH_REDUCER_NAME } from './index';

describe('flight search logic', () => {
  describe('flightSearchLogic', () => {
    const createStore = flightSearchMock => createMockStore({
      logic: flightSearchLogic,
      injectedDeps: {
        API: {
          flightSearch: flightSearchMock,
        },
      },
    });

    const firstAction = flightSearchActions.search(flightSearchParams);

    it('fetch api response success -> dispatches searchSuccess action with correct params', () => {
      const flightSearchMockResponse = { a: 'test' };
      const flightSearchMock = jest.fn(() => new Promise((resolve) => {
        resolve(flightSearchMockResponse);
      }));
      
      const store = createStore(flightSearchMock);
      store.dispatch(firstAction);
      store.whenComplete(() => {
        expect(flightSearchMock.mock.calls.length).toBe(1);
        expect(flightSearchMock.mock.calls[0][0]).toEqual(flightSearchParams);
        expect(store.actions[0]).toEqual(firstAction);
        expect(store.actions[1])
          .toEqual(flightSearchActions.searchSuccess(flightSearchMockResponse));
      });
    });

    it('fetch api response error -> dispatches searchError with error message', () => {
      const flightSearchMock = jest.fn(() => new Promise((resolve, reject) => {
        reject(new Error('test error'));
      }));

      const store = createStore(flightSearchMock);

      store.dispatch(firstAction);

      store.whenComplete(() => {
        expect(flightSearchMock.mock.calls.length).toBe(1);
        expect(flightSearchMock.mock.calls[0][0]).toEqual(flightSearchParams);
        expect(store.actions[0]).toEqual(firstAction);
        expect(store.actions[1])
          .toEqual(flightSearchActions.searchError('Error retrieving itinerary data'));
      });
    });
  });
  
  describe('flightSearchTryAgainLogic', () => {
    const createStore = initialFlightReducerState => createMockStore({
      initialState: {
        [FLIGHT_SEARCH_REDUCER_NAME]: initialFlightReducerState,
      },
      injectedDeps: {
        API: {
          flightSearch: () => new Promise(resolve => resolve()),
        },
      },
      logic: flightSearchLogic,
    });
  
    const firstAction = flightSearchActions.searchTryAgain();
  
  
    it('if there are params in store, dispatch search action', () => {
      const store = createStore({ searchTryAgainParams: flightSearchParams });
      
      store.dispatch(firstAction);
      store.whenComplete(() => {
        expect(store.actions[0]).toEqual(firstAction);
        expect(store.actions[1])
          .toEqual(flightSearchActions.search(flightSearchParams));
      });
    });
    
    it('if there are NOT params in store, dispatch search error', () => {
      const store = createStore({ searchTryAgainParams: null });
      
      store.dispatch(firstAction);
      store.whenComplete(() => {
        expect(store.actions[0]).toEqual(firstAction);
        expect(store.actions[1])
          .toEqual(flightSearchActions.searchError("We don't have you search parameters anymore :-("));
      });
    });
  });
});


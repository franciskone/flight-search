import { createLogic } from 'redux-logic';
import flightSearchActions, { flightSearchActionType } from './flightSearchActions';
import { flightSearchTryAgainParamsSelector } from './flightSearchSelectors';

// TODO Franciskone: add tests
const flightSearchLogic = createLogic({
  type: flightSearchActionType.SEARCH,
  
  process({ action, API }, dispatch, done) {
    API.flightSearch(action.payload)
      .then((results) => {
        dispatch(flightSearchActions.searchSuccess(results));
        done();
      })
      .catch(() => {
        // TODO Franciskone: manage error properly in UI and reducer
        dispatch(flightSearchActions.searchError('Error retrieving itinerary data'));
        done();
      });
  },
});

const flightSearchtryAgainLogic = createLogic({
  type: flightSearchActionType.SEARCH_TRY_AGAIN,
  process({ getState, action }, dispatch, done) {
    const params = flightSearchTryAgainParamsSelector(getState());
    
    params
      ? dispatch(flightSearchActions.search(params))
      : dispatch(flightSearchActions.searchError("We don't have you search parameters anymore :-("));
    
    done();
  },
});

export default [
  flightSearchLogic,
  flightSearchtryAgainLogic,
];

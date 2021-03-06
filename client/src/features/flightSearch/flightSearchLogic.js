import { createLogic } from 'redux-logic';
import flightSearchActions, { flightSearchActionType } from './flightSearchActions';
import { flightSearchTryAgainParamsSelector } from './flightSearchSelectors';

const flightSearchLogic = createLogic({
  type: flightSearchActionType.SEARCH,
  
  process({ action, API }, dispatch, done) {
    API.flightSearch(action.payload)
      .then((results) => {
        dispatch(flightSearchActions.searchSuccess(results));
        done();
      })
      .catch(() => {
        dispatch(flightSearchActions.searchError('Error retrieving itinerary data'));
        done();
      });
  },
});

const flightSearchTryAgainLogic = createLogic({
  type: flightSearchActionType.SEARCH_TRY_AGAIN,
  process({ getState }, dispatch, done) {
    const params = flightSearchTryAgainParamsSelector(getState());
    
    params // eslint-disable-line no-unused-expressions
      ? dispatch(flightSearchActions.search(params))
      : dispatch(flightSearchActions.searchError("We don't have you search parameters anymore :-("));
    
    done();
  },
});

export default [
  flightSearchLogic,
  flightSearchTryAgainLogic,
];

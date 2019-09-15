import { createLogic } from 'redux-logic';
import { flightSearchActionType } from './flightSearchActions';
import { flightSearchActions } from './index';

// TODO Franciskone: add tests
const flightSearchLogic = createLogic({
  type: flightSearchActionType.SEARCH,
  
  process({ action, API }, dispatch, done) {
    API.flightSearch(action.payload)
      .then((results) => {
        dispatch(flightSearchActions.searchSuccess(results));
        done();
      })
      .catch((err) => {
        // TODO Franciskone: manage error properly in UI and reducer
        dispatch(flightSearchActions.searchError(err));
        done();
      });
  },
});

export default [flightSearchLogic];

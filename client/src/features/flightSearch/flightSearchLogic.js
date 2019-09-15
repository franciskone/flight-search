import { createLogic } from 'redux-logic';
import { flightSearchActionType } from './flightSearchActions';

const flightSearchLogic = createLogic({
  type: flightSearchActionType.SEARCH,
  
  process({ getState, action }, dispatch, done) {
    // fetch('http://localhost:4000/api/search')
    //   .then(response => response.json())
    //   .then((results) => {
    //     console.log(results);
    //   })
    //   .catch(console.error);
    //     console.log('action', action);
    //     done();
    //   };
});

export default [flightSearchLogic];

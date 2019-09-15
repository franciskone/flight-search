import { combineReducers, compose, createStore } from 'redux';
import { FLIGHT_SEARCH_REDUCER_NAME, flightSearchReducer } from '../features/flightSearch';
import { middleWares } from './middleWares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const rootReducer = combineReducers({
  [FLIGHT_SEARCH_REDUCER_NAME]: flightSearchReducer,
});

export const store = createStore(rootReducer, composeEnhancers(middleWares));

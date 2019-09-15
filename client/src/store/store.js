import { compose, createStore } from 'redux';
import { flightSearchReducer } from '../features/flightSearch';
import { middleWares } from './middleWares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
export const store = createStore(flightSearchReducer, composeEnhancers(middleWares));

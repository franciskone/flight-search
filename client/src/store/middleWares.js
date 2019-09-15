import { applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { flightSearchLogic } from '../features/flightSearch';
import { appInitLogic } from '../features/appInit';
import { flightSearch } from '../api';

const logicList = [
  ...appInitLogic,
  ...flightSearchLogic,
];

const deps = {
  API: {
    flightSearch,
  },
};

const logicMiddleWare = createLogicMiddleware(logicList, deps);

export const middleWares = applyMiddleware(logicMiddleWare);

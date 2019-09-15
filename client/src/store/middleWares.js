import { applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { flightSearchLogic } from '../features/flightSearch';
import { appInitLogic } from '../features/appInit';

const logicList = [
  ...appInitLogic,
  ...flightSearchLogic,
];

const deps = {
  API: {
    search: () => console.log('fetch serach API'),
  },
};

const logicMiddleWare = createLogicMiddleware(logicList, deps);

export const middleWares = applyMiddleware(logicMiddleWare);

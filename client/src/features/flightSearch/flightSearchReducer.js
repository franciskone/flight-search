import { flightSearchActionType } from './flightSearchActions';

const initData = {
  query: {},
  legsById: {},
  segmentsById: {},
  carriersById: {},
  agentsById: {},
  placesById: {},
  currenciesById: {},
  itineraries: [],
};

const initState = {
  isLoading: false,
  error: null,
  ...initData,
};

// TODO Franciskone: add tests
const flightSearchReducer = (state = initState, action) => {
  const reducers = {
    [flightSearchActionType.SEARCH]: searchCase,
    [flightSearchActionType.SEARCH_SUCCESS]: searchSuccessCase,
    [flightSearchActionType.SEARCH_ERROR]: searchErrorCase,
    default: () => state,
  };
  
  return reducers[action.type]
    ? reducers[action.type](state, action)
    : reducers.default();
};
export default flightSearchReducer;
export const FLIGHT_SEARCH_REDUCER_NAME = 'flightSearch';


function searchCase(state) {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
}

function searchSuccessCase(state, action) {
  return {
    ...state,
    ...action.payload,
    isLoading: false,
    error: null,
  };
}

function searchErrorCase(state, action) {
  return {
    ...state,
    ...initData,
    isLoading: false,
    error: action.payload,
  };
}

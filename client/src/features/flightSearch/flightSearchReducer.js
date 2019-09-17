import { flightSearchActionType } from './flightSearchActions';

const searchTryAgainParams = null;

export const initItineraryData = {
  query: {},
  legsById: {},
  segmentsById: {},
  carriersById: {},
  agentsById: {},
  placesById: {},
  currenciesById: {},
  itineraries: [],
};

export const flightSearchReducerInitState = {
  isLoading: false,
  error: null,
  searchTryAgainParams,
  ...initItineraryData,
};

const flightSearchReducer = (state = flightSearchReducerInitState, action) => {
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


function searchCase(state, action) {
  return {
    ...state,
    searchTryAgainParams: action.payload,
    isLoading: true,
    error: null,
  };
}

function searchSuccessCase(state, action) {
  return {
    ...state,
    ...action.payload,
    searchTryAgainParams: flightSearchReducerInitState.searchTryAgainParams,
    isLoading: false,
    error: null,
  };
}

function searchErrorCase(state, action) {
  return {
    ...state,
    ...initItineraryData,
    isLoading: false,
    error: action.payload,
  };
}

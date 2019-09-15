// TODO Franciskone: add tests
import { FLIGHT_SEARCH_REDUCER_NAME } from './flightSearchReducer';

const FALLBACK_VALUE = '---';
const flightSearchState = state => state[FLIGHT_SEARCH_REDUCER_NAME];

export const flightSearchIsLoadingSelector = state => flightSearchState(state).isLoading;
export const flightSearchQuerySelector = state => flightSearchState(state).query;
const flightSearchPlaceSelector = (state, placeId) => flightSearchState(state).placesById[placeId];

// TODO Franciskone: convert to reselectors
export const flightSearchQueryOriginCodeSelector = (state) => {
  const { OriginPlace } = flightSearchQuerySelector(state);
  
  if (OriginPlace) {
    const place = flightSearchPlaceSelector(state, OriginPlace);
    return place
      ? place.Code
      : FALLBACK_VALUE;
  }
  return FALLBACK_VALUE;
};

export const flightSearchQueryDestinationCodeSelector = (state) => {
  const { DestinationPlace } = flightSearchQuerySelector(state);
  
  if (DestinationPlace) {
    const place = flightSearchPlaceSelector(state, DestinationPlace);
    return place
      ? place.Code
      : FALLBACK_VALUE;
  }
  return FALLBACK_VALUE;
};

export const flightSearchQueryPassengersNumberSelector =
    state => flightSearchQuerySelector(state).Adults || 0;

export const flightSearchQueryPassengersCabinClassSelector =
    state => flightSearchQuerySelector(state).CabinClass || FALLBACK_VALUE;

export const flightSearchHasQuerySelector = state => !!flightSearchQuerySelector(state).SessionKey;

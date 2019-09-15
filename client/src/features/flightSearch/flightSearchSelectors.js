// TODO Franciskone: add tests
import { FLIGHT_SEARCH_REDUCER_NAME } from './flightSearchReducer';

const FALLBACK_VALUE = '---';
const flightSearchState = state => state[FLIGHT_SEARCH_REDUCER_NAME];

export const flightSearchIsLoadingSelector = state => flightSearchState(state).isLoading;
export const flightSearchQuerySelector = state => flightSearchState(state).query;
const flightSearchPlaceSelector = (state, placeId) => flightSearchState(state).placesById[placeId];

// TODO Franciskone: convert to reselectors

// Queries
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

// Agents
export const flightSearchAgentsSelector = state => flightSearchState(state).agentsById;

// Carriers
const flightSearchCarriersSelector = state => flightSearchState(state).carriersById;
const flightSearchCarrierByIdSelector = (state, carrierId) => flightSearchCarriersSelector(state)[carrierId];

// Places
const flightSearchPlacesSelector = state => flightSearchState(state).placesById;
const flightSearchPlaceByIdSelector = (state, placeId) => flightSearchPlacesSelector(state)[placeId];

// Legs
const flightSearchLegsSelector = state => flightSearchState(state).legsById;
const flightSearchLegByIdSelector = (state, legId) => flightSearchLegsSelector(state)[legId];
const flightSearchLegByIdForResultsSelector = (state, legId) => {
  const {
    Id, SegmentIds, Carriers, Departure, Arrival, OriginStation, DestinationStation, Duration
  } = flightSearchLegByIdSelector(state, legId);
  
  const carrier = flightSearchCarrierByIdSelector(state, Carriers[0]);
  const origin = flightSearchPlaceByIdSelector(state, OriginStation);
  const destination = flightSearchPlaceByIdSelector(state, DestinationStation);
  
  return {
    id: Id,
    carrier: carrier ? carrier.Code : null,
    duration: Duration,
    stops: SegmentIds.length,
    origin: {
      date: Departure,
      airport: origin ? origin.Code : FALLBACK_VALUE,
    },
    destination: {
      date: Arrival,
      airport: destination ? destination.Code : FALLBACK_VALUE,
    },
  };
};

// Itineraries
const flightSearchItinerariesSelector = state => flightSearchState(state).itineraries;
export const flightSearchItinerariesForResultsSelector = (state) => {
  const agents = flightSearchAgentsSelector(state);
  
  return flightSearchItinerariesSelector(state)
    .map(({ OutboundLegId, InboundLegId, PricingOptions }) => {
      const priceOption = PricingOptions[0];
      const agent = agents[priceOption.Agents[0]];
      
      return {
        id: `${OutboundLegId}_${InboundLegId}`,
        legs: [
          flightSearchLegByIdForResultsSelector(state, OutboundLegId),
          flightSearchLegByIdForResultsSelector(state, InboundLegId),
        ],
        price: priceOption.Price,
        agent: agent ? agent.Name : FALLBACK_VALUE,
      };
    });
};


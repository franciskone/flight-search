const prefix = 'flightSearch';

export const flightSearchActionType = {
  SEARCH: `${prefix}/SEARCH`,
  SEARCH_SUCCESS: `${prefix}/SEARCH_SUCCESS`,
  SEARCH_ERROR: `${prefix}/SEARCH_ERROR`,
};

const flightSearchAction = {
  search,
};
export default flightSearchAction;

function search({
  originPlace,
  destinationPlace,
  outboundDate,
  inboundDate,
  adults,
}) {
  return {
    type: flightSearchActionType.SEARCH,
    payload: {
      originPlace,
      destinationPlace,
      outboundDate,
      inboundDate,
      adults,
    },
  };
}

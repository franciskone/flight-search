import { actionCreator } from '../../util';

const prefix = 'flightSearch';

export const flightSearchActionType = {
  SEARCH: `${prefix}/SEARCH`,
  SEARCH_SUCCESS: `${prefix}/SEARCH_SUCCESS`,
  SEARCH_ERROR: `${prefix}/SEARCH_ERROR`,
  SEARCH_TRY_AGAIN: `${prefix}/SEARCH_TRY_AGAIN`,
};

const flightSearchAction = {
  search,
  searchSuccess,
  searchError,
  searchTryAgain,
};
export default flightSearchAction;

function search({
  originPlace,
  destinationPlace,
  outboundDate,
  inboundDate,
  adults,
}) {
  return actionCreator(
    flightSearchActionType.SEARCH,
    {
      originPlace,
      destinationPlace,
      outboundDate,
      inboundDate,
      adults,
    },
  );
}

function searchSuccess(res) {
  return actionCreator(flightSearchActionType.SEARCH_SUCCESS, res);
}

function searchError(err) {
  return actionCreator(flightSearchActionType.SEARCH_ERROR, err);
}

function searchTryAgain() {
  return actionCreator(flightSearchActionType.SEARCH_TRY_AGAIN);
}

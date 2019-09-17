import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {
  flightSearchActions,
  flightSearchErrorMessageSelector,
  flightSearchHasQuerySelector,
  flightSearchIsLoadingSelector,
  flightSearchTryAgainParamsSelector,
} from '../../features/flightSearch';

const mapStateToProps = state => ({
  isLoading: flightSearchIsLoadingSelector(state),
  hasQuery: flightSearchHasQuerySelector(state),
  errorMessage: flightSearchErrorMessageSelector(state),
  shouldSearchAgain: !!flightSearchTryAgainParamsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  searchItinerary: () => dispatch(flightSearchActions.searchTryAgain()),
});

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults);
export default SearchResultsContainer;

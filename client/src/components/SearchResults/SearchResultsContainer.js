import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {
  flightSearchHasQuerySelector,
  flightSearchIsLoadingSelector,
} from '../../features/flightSearch';

const mapStateToProps = state => ({
  isLoading: flightSearchIsLoadingSelector(state),
  hasQuery: flightSearchHasQuerySelector(state),
});

const SearchResultsContainer = connect(mapStateToProps)(SearchResults);
export default SearchResultsContainer;

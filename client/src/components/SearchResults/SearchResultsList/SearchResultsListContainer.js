import { connect } from 'react-redux';
import SearchResultsList from './SearchResultsList';
import { flightSearchItinerariesForResultsSelector, flightSearchQueryCurrency } from '../../../features/flightSearch';

const mapStateToProps = state => ({
  itineraries: flightSearchItinerariesForResultsSelector(state),
  currency: flightSearchQueryCurrency(state),
});

const SearchResultsLisContainer = connect(mapStateToProps)(SearchResultsList);

export default SearchResultsLisContainer;

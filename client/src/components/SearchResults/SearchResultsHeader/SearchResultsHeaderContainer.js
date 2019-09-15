import { connect } from 'react-redux';
import SearchResultsHeader from './SearchResultsHeader';
import {
  flightSearchQueryDestinationCodeSelector,
  flightSearchQueryOriginCodeSelector, flightSearchQueryPassengersCabinClassSelector,
  flightSearchQueryPassengersNumberSelector,
} from '../../../features/flightSearch'


const mapStateToProps = state => ({
  origin: flightSearchQueryOriginCodeSelector(state),
  destination: flightSearchQueryDestinationCodeSelector(state),
  passengers: flightSearchQueryPassengersNumberSelector(state),
  cabinClass: flightSearchQueryPassengersCabinClassSelector(state),
});

const SearchResultsHeaderContainer = connect(mapStateToProps)(SearchResultsHeader);

export default SearchResultsHeaderContainer;

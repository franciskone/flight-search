import React from 'react';
import { connect } from 'react-redux';
import SearchResultsList from './SearchResultsList';
import { flightSearchItinerariesForResultsSelector } from '../../../features/flightSearch';


const mapStateToProps = state => ({
  itineraries: flightSearchItinerariesForResultsSelector(state),
});

const SearchResultsLisContainer = connect(mapStateToProps)(SearchResultsList);

export default SearchResultsLisContainer;

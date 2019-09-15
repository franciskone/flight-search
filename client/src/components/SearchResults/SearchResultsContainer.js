import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { flightSearchHasQuerySelector, flightSearchIsLoadingSelector } from '../../features/flightSearch';

const fakeItineraries = [
  {
    id: '11235-1909211735--32302-0-13554-1909211915',
    flights: [
      {
        carrier: 'Alitalia',
        origin: {
          date: '2019-09-21T17:35:00',
          airport: 'EDI',
        },
        destination: {
          date: '2019-09-21T19:15:00',
          airport: 'LHR',
        },
        duration: 90,
        stops: 0,
      },
      {
        carrier: 'Alitalia',
        origin: {
          date: '2019-09-28T09:40:00',
          airport: 'EDI',
        },
        destination: {
          date: '2019-09-29T09:30:00',
          airport: 'LHR',
        },
        duration: 50,
        stops: 1,
      },
    ],
    price: 256,
    agent: 'omegaflightstore.com',
  },
  {
    id: '11235-1909211735--32302-0-13554-1909211917',
    flights: [
      {
        carrier: 'Alitalia',
        origin: {
          date: '2019-09-21T17:35:00',
          airport: 'EDI',
        },
        destination: {
          date: '2019-09-21T19:15:00',
          airport: 'LHR',
        },
        duration: 90,
        stops: 0,
      },
      {
        carrier: 'Alitalia',
        origin: {
          date: '2019-09-28T09:40:00',
          airport: 'EDI',
        },
        destination: {
          date: '2019-09-29T09:30:00',
          airport: 'LHR',
        },
        duration: 50,
        stops: 1,
      },
    ],
    price: 256,
    agent: 'omegaflightstore.com',
  },
  {
    id: '11235-1909211735--32302-0-13554-1909211918',
    flights: [
      {
        carrier: 'Alitalia',
        origin: {
          date: '2019-09-21T17:35:00',
          airport: 'EDI',
        },
        destination: {
          date: '2019-09-21T19:15:00',
          airport: 'LHR',
        },
        duration: 90,
        stops: 0,
      },
    ],
    price: 256,
    agent: 'omegaflightstore.com',
  },
]; // TODO Franciskone: DELETE

const mapStateToProps = state => ({
  isLoading: flightSearchIsLoadingSelector(state),
  itineraries: [],
  hasQuery: flightSearchHasQuerySelector(state),
});

const SearchResultsContainer = connect(mapStateToProps)(SearchResults);
export default SearchResultsContainer;

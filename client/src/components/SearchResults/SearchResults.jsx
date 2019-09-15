import React from 'react';
import PropTypes from 'prop-types';

import STYLE from './SearchResults.scss';
import { styleGetter } from '../../util';
import SearchResultsHeader from './SearchResultsHeader';
import SearchResultsActions from './SearchResultsActions';
import ItineraryItem, { ItineraryType } from './ItineraryItem';

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
]; // TODO Franciskone: DELETE

const c = styleGetter(STYLE);
const SearchResults = ({ itineraries }) => ( // TODO Franciskone: add tests
  <div className={c('SearchResults')}>
    <SearchResultsHeader
      origin="edi"
      destination="lon"
      passengers={1}
      cabinClass="economy"
    />
    <SearchResultsActions />
    <div className={c('SearchResults__itineraries')}>
      {
        itineraries.map(({
          flights, price, id, agent,
        }) => (
          <ItineraryItem
           key={id}
           id={id}
           agent={agent}
           flights={flights}
           price={price}
          />
        ))
      }
    </div>
  </div>
);

SearchResults.propTypes = {
  itineraries: PropTypes.arrayOf(PropTypes.shape(ItineraryType)),
};
SearchResults.defaultProps = {
  itineraries: fakeItineraries, // TODO Franciskone: DELETE
};

export default SearchResults;


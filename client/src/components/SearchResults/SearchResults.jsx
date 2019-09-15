import React from 'react';
import PropTypes from 'prop-types';

import STYLE from './SearchResults.scss';
import { styleGetter } from '../../util';
import SearchResultsHeader from './SearchResultsHeader';
import SearchResultsActions from './SearchResultsActions';
import ItineraryItem, { ItineraryType } from './ItineraryItem';
import Spinner from '../Spinner';
import SearchResultsList from "./SearchResultsList/SearchResultsList"

const c = styleGetter(STYLE);
const SearchResults = ({ itineraries, isLoading, hasQuery }) => ( // TODO Franciskone: add tests
  <div className={c('SearchResults')}>
    { isLoading
      ? <Spinner label="Searching" />
      : hasQuery && (
        <React.Fragment>
          <SearchResultsHeader />
          <SearchResultsActions />
  
          <div className={c('SearchResults__itineraries')}>
            {/* TODO Franciskone: add infinite scrolling */}
            <SearchResultsList />
            {
              itineraries.map(({
                legs, price, id, agent,
              }) => (
                <ItineraryItem
                  key={id}
                  id={id}
                  agent={agent}
                  legs={legs}
                  price={price}
                />
              ))
            }
          </div>
        </React.Fragment>
      )
    }
  </div>
);

SearchResults.propTypes = {
  itineraries: PropTypes.arrayOf(PropTypes.shape(ItineraryType)),
  isLoading: PropTypes.bool.isRequired,
  hasQuery: PropTypes.bool.isRequired,
};
SearchResults.defaultProps = {
  itineraries: [],
};

export default SearchResults;


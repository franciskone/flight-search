import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsHeader from './SearchResultsHeader';
import SearchResultsActions from './SearchResultsActions';
import Spinner from '../Spinner';
import SearchResultsList from './SearchResultsList';

const SearchResults = ({ isLoading, hasQuery }) => ( // TODO Franciskone: add tests
  <div>
    { isLoading
      ? <Spinner label="Searching" />
      : hasQuery && (
        <React.Fragment>
          <SearchResultsHeader />
          <SearchResultsActions />
          <SearchResultsList />
        </React.Fragment>
      )
    }
  </div>
);

SearchResults.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasQuery: PropTypes.bool.isRequired,
};

export default SearchResults;


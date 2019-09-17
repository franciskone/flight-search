import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsHeader from './SearchResultsHeader';
import SearchResultsActions from './SearchResultsActions';
import Spinner from '../Spinner';
import SearchResultsList from './SearchResultsList';
import SearchResultsError from './SearchResultsError';

const SearchResults = ({
  isLoading, hasQuery, errorMessage, searchItinerary, shouldSearchAgain,
}) => {
  const errorAction = shouldSearchAgain
    ? searchItinerary
    : () => window.location.reload();
  
  const errorButtonLabel = shouldSearchAgain
    ? 'Try again'
    : 'Reload the page';
  
  return ( // TODO Franciskone: add tests
    <div>
      { isLoading
        ? <Spinner label="Searching" />
        : errorMessage
          ?
            <SearchResultsError
              message={errorMessage}
              buttonLabel={errorButtonLabel}
              action={errorAction}
            />
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
};

SearchResults.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasQuery: PropTypes.bool.isRequired,
  searchItinerary: PropTypes.func.isRequired,
  shouldSearchAgain: PropTypes.bool.isRequired,
};

export default SearchResults;


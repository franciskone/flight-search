import React from 'react';
// import PropTypes from 'prop-types';

import STYLE from './SearchResults.scss';
import { styleGetter } from '../../util';
import SearchResultsHeader from './SearchResultsHeader';
import SearchResultsActions from './SearchResultsActions';

const c = styleGetter(STYLE);

const SearchResults = () => (
  <div className={c('SearchResults')}>
    <SearchResultsHeader
      origin="edi"
      destination="lon"
      passengers={1}
      cabinClass="economy"
    />
    <SearchResultsActions />
  </div>
);

SearchResults.propTypes = {};
SearchResults.defaultProps = {};

export default SearchResults;


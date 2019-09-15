import React from 'react';
import PropTypes from 'prop-types';
import withInfiniteScroll, { ArrayDataSource } from 'bpk-component-infinite-scroll';

import ItineraryItem, { ItineraryType } from '../ItineraryItem';
import { styleGetter } from '../../../util';

import STYLE from './SearchResultsList.scss';

const c = styleGetter(STYLE);

const SearchResultsList = ({ itineraries }) => (
  <div className={c('SearchResultsList')}>
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
  </div>);

SearchResultsList.propTypes = {
  itineraries: PropTypes.arrayOf(PropTypes.shape(ItineraryType)).isRequired,
};
SearchResultsList.defaultProps = {};

export default SearchResultsList;


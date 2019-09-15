import React from 'react';
import PropTypes from 'prop-types';
import withInfiniteScroll, { ArrayDataSource } from 'bpk-component-infinite-scroll';
import BpkButton from 'bpk-component-button';

import ItineraryItem, { ItineraryType } from '../ItineraryItem';
import { styleGetter } from '../../../util';

import STYLE from './SearchResultsList.scss';

const c = styleGetter(STYLE);

const SearchResultsList = ({ elements }) => (
  <div className={c('SearchResultsList')}>
    {
      elements.map(({
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
);

SearchResultsList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape(ItineraryType)).isRequired,
};

const InfiniteList = withInfiniteScroll(SearchResultsList);

const SeeMoreButton = ({ onSeeMoreClick }) => (
  <div className={c('SeeMore')}>
    <BpkButton large onClick={onSeeMoreClick}>See More</BpkButton>
  </div>
);

export default ({ itineraries }) => {
  const dataSource = new ArrayDataSource(itineraries);
  
  return (
    <InfiniteList
      dataSource={dataSource}
      renderSeeMoreComponent={SeeMoreButton}
      seeMoreAfter={1}
    />
  );
};


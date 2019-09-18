import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import withInfiniteScroll, { ArrayDataSource } from 'bpk-component-infinite-scroll';
import BpkButton from 'bpk-component-button';

import ItineraryItem, { ItineraryType } from '../ItineraryItem';
import { styleGetter } from '../../../util';

import STYLE from './SearchResultsList.scss';

const c = styleGetter(STYLE);

export const CurrencyContext = createContext('£');

export const SearchResultsFullListPresentation = ({ elements }) => {
  const currency = useContext(CurrencyContext);
  
  return (
    <div className={c('SearchResultsList')}>
      {
        elements.map(({
          legs, price, id, agent,
        }) => (
          <ItineraryItem
            key={id}
            agent={agent}
            legs={legs}
            price={price}
            currency={currency}
          />
        ))
      }
    </div>
  );
};

SearchResultsFullListPresentation.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    ...ItineraryType,
  })).isRequired,
};

const InfiniteList = withInfiniteScroll(SearchResultsFullListPresentation);

const SeeMoreButton = ({ onSeeMoreClick }) => (
  <div className={c('SeeMore')}>
    <BpkButton large onClick={onSeeMoreClick}>See More</BpkButton>
  </div>
);

export default ({ itineraries, currency }) => {
  const dataSource = new ArrayDataSource(itineraries);
  
  return (
    <CurrencyContext.Provider value={currency}>
      <InfiniteList
        dataSource={dataSource}
        renderSeeMoreComponent={SeeMoreButton}
        seeMoreAfter={1}
      />
    </CurrencyContext.Provider>
  );
};


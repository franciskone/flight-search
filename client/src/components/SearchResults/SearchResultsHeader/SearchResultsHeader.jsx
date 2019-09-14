import React from 'react';
import PropTypes from 'prop-types';

import BpkLongArrowRight from 'bpk-component-icon/lg/long-arrow-right';
import STYLE from './SearchResultsHeader.scss';
import { styleGetter } from '../../../util';

const c = styleGetter(STYLE);

export const formatPassengers = (amount, cabinClass) => {
  const travellers = amount > 1
    ? `${amount} travellers`
    : `${amount} traveller`;

  return cabinClass
    ? `${travellers}, ${cabinClass}`
    : travellers;
};

const SearchResultsHeader = ({
  origin, destination, passengers, cabinClass,
}) => (
  <div className={c('SearchResultsHeader')}>
    <div className={c('SearchResultsHeader__top')}>
      {origin}
      <BpkLongArrowRight className={c('SearchResultsHeader__arrow')} /> { /* TODO Franciskone: make the icon a little bigger  */}
      {destination}
    </div>

    <div className={c('SearchResultsHeader__bottom')}>
      {formatPassengers(passengers, cabinClass)}
    </div>
  </div>);

SearchResultsHeader.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  passengers: PropTypes.number.isRequired,
  cabinClass: PropTypes.string,
};
SearchResultsHeader.defaultProps = {
  cabinClass: null,
};

export default SearchResultsHeader;


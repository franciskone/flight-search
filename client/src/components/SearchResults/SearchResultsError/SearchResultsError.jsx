import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';


import { styleGetter } from '../../../util';
import STYLE from './SearchResultsError.scss';

const c = styleGetter(STYLE);

const SearchResultsError = ({ message, action, buttonLabel }) => (
  <BpkCard className={c('SearchResultsError')}>
    <BpkText
      className={c('SearchResultsErrorMessage')}
      textStyle="xl"
    >
      {message}
    </BpkText>
    
    <BpkButton
      large
      onClick={action}
    >
      {buttonLabel}
    </BpkButton>
  </BpkCard>
);

SearchResultsError.propTypes = {
  message: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default SearchResultsError;

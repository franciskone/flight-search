import React from 'react';
import PropTypes from 'prop-types';
import { BpkExtraLargeSpinner, SPINNER_TYPES } from 'bpk-component-spinner';
import BpkText from 'bpk-component-text';
import { styleGetter } from '../../util';

import STYLE from './Spinner.scss';

const c = styleGetter(STYLE);

const Spinner = ({ label }) => (
  <div className={c('Spinner')}>
    <BpkExtraLargeSpinner type={SPINNER_TYPES.primary} />
    { label && <BpkText textStyle="xl">{label}</BpkText> }
  </div>
);

Spinner.propTypes = {
  label: PropTypes.string,
};
Spinner.defaultProps = {
  label: null,
};

export default Spinner;


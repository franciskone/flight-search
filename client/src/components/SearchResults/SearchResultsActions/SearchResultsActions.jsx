import React from 'react';
import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';
import { withAlignment } from 'bpk-component-icon';
import { lineHeightLg, iconSizeLg } from 'bpk-tokens/tokens/base.es6';
import BpkLargePriceAlertIcon from 'bpk-component-icon/lg/price-alerts';

import { fakeOnClick, styleGetter } from '../../../util';
import STYLE from './SearchResultsActions.scss';

const c = styleGetter(STYLE);

const actionItemOnKeyPress = action => evt =>
  evt.charCode === 13 && action(); // TODO Franciskone: add test

const ActionItem = ({
  action, children, isLast = false,
}) => ( // TODO Franciskone: add snapshot test
  <div
    className={c(
      'SearchResultsActions__action-item',
        { 'SearchResultsActions__action-item--is-last': isLast },
      )
    }
    role="button"
    onClick={action}
    onKeyPress={actionItemOnKeyPress(action)}
    tabIndex="0"
  >
    <BpkText textStyle="lg">{children}</BpkText>
  </div>
);
ActionItem.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLast: PropTypes.bool,
};
ActionItem.defaultProps = {
  isLast: false,
};

const AlignedPriceAlert = withAlignment(
  BpkLargePriceAlertIcon, lineHeightLg, iconSizeLg,
);

// TODO Franciskone: add redux actions to sort, filter and add price alert
const SearchResultsActions = () => ( // TODO Franciskone: add snapshot test
  <div className={c('SearchResultsActions')}>
    <ActionItem action={() => fakeOnClick('Filter')}>
      Filter
    </ActionItem>
    
    <ActionItem action={() => fakeOnClick('Sort')}>
      Sort
    </ActionItem>
    
    <ActionItem action={() => fakeOnClick('Price Alert')} isLast>
      <AlignedPriceAlert
        className={c('SearchResultsActions__alert-icon')}
      />
      Price alerts
    </ActionItem>
  </div>
);

export default SearchResultsActions;


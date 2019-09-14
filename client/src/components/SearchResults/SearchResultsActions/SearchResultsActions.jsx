import React from 'react';
import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';

import { fakeOnClick, styleGetter } from '../../../util';
import STYLE from './SearchResultsActions.scss';
import SearchResultsHeader from '../SearchResultsHeader/SearchResultsHeader';

const c = styleGetter(STYLE);

const ActionItemOnKeyPress = action => evt =>
  evt.charCode === 13 && action(); // TODO Franciskone: add test

const ActionItem = ({ label, action, children }) => ( // TODO Franciskone: add snapshot test
  <div
    className={c('SearchResultsActions__action-item')}
    role="button"
    onClick={action}
    onKeyPress={ActionItemOnKeyPress(action)}
    tabIndex="0"
  >
    { children || <BpkText textStyle="lg">{label}</BpkText> }
  </div>
);
ActionItem.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
};
ActionItem.defaultProps = {
  label: null,
  children: null,
};

// TODO Franciskone: add redux actions to sort, filter and add price alert
const SearchResultsActions = () => (
  <div className={c('SearchResultsActions')}>
    <div className={c('SearchResultsActions__action-list')}>
      <ActionItem
        label="Filter"
        action={() => fakeOnClick('Filter')}
      />
      <ActionItem
        label="Sort"
        action={() => fakeOnClick('Sort')}
      />
    </div>
    <div className={c('SearchResultsActions__price-alert--right-padding')}>
      <ActionItem
        action={() => fakeOnClick('Price Alert')}
      >
        <BpkText textStyle="lg">Price alerts</BpkText>
      </ActionItem>
    </div>
  </div>
);

export default SearchResultsActions;


import React from 'react';
import TestRenderer from 'react-test-renderer';

import SearchResultsActions from './SearchResultsActions';

describe('SearchResultsActions', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<SearchResultsActions />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


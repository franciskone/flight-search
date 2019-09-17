import React from 'react';
import TestRenderer from 'react-test-renderer';

import SearchResultsError from './SearchResultsError';

describe('SearchResultsError', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(
      <SearchResultsError
        message="test message"
        buttonLabel="test label"
        action={() => null}
      />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});

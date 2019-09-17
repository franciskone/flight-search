import React from 'react';
import TestRenderer from 'react-test-renderer';

import SearchResults from './SearchResults';

describe('SearchResults', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(
      <SearchResults
        isLoading={false}
        hasQuery={false}
        searchItinerary={() => 'test'}
        shouldSearchAgain={false}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


import React from 'react';
import TestRenderer from 'react-test-renderer';

import { SearchResultsFullListPresentation } from './SearchResultsList';
import { flightSearchItinerariesSelectorOutput } from '../../../features/flightSearch/flightSearchSelectors.test';

describe('SearchResultsFullListPresentation', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(
      <SearchResultsFullListPresentation
        elements={flightSearchItinerariesSelectorOutput}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import TestRenderer from 'react-test-renderer';

import { SearchResultsFullListPresentation, CurrencyContext } from './SearchResultsList';
import { flightSearchItinerariesSelectorOutput } from '../../../features/flightSearch/flightSearchSelectors.test';

describe('SearchResultsFullListPresentation', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(
      <CurrencyContext.Provider value="£">
        <SearchResultsFullListPresentation
          elements={flightSearchItinerariesSelectorOutput}
        />
      </CurrencyContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

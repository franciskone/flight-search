import React from 'react';
import TestRenderer from 'react-test-renderer';

import SearchResultsActions, { actionItemOnKeyPress } from './SearchResultsActions';

describe('SearchResultsActions', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<SearchResultsActions />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  it('actionItemOnKeyPress', () => {
    const testAction = jest.fn(() => null);
    const action = actionItemOnKeyPress(testAction);
    
    action({ charCode: 13 });
    action({ charCode: 0 });
  
    expect(testAction.mock.calls.length).toBe(1);
  });
});


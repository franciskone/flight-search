import React from 'react';
import TestRenderer from 'react-test-renderer';

import Spinner from './Spinner';

describe('Spinner', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

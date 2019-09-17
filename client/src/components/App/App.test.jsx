import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import { App } from './App';

// TODO Franciskone: add https://github.com/dmitry-zaets/redux-mock-store
describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});


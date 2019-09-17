import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import { App } from './App';
import { WithStore } from '../../store';


describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <WithStore>
        <App appInit={() => null} />
      </WithStore>
      , div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App appInit={() => null} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});


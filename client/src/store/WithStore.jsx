import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const WithCustomStore = ({ customStore, children }) => (
  <Provider store={customStore}>
    {children}
  </Provider>
);

export const WithStore = ({ children }) => (
  <WithCustomStore customStore={store}>
    { children }
  </WithCustomStore>
);

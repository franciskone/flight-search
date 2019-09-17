import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import STYLES from './App.scss';
import Header from '../Header';
import SearchResults from '../SearchResults';
import { WithStore } from '../../store';
import appInitAction from '../../features/appInit/appInitActions';

const c = className => STYLES[className] || 'UNKNOWN';

export const App = ({ appInit }) => {
  useEffect(() => {
    appInit();
  }, []);
  
  return (
    <div className={c('App')}>
      <Header />
      <main className={c('App__main')}>
        <SearchResults />
      </main>
    </div>
  );
};

const mapDispatchToProps = {
  appInit: appInitAction.init,
};

const AppContainer = connect(null, mapDispatchToProps)(App);

const AppWithStore = () => (
  <WithStore>
    <AppContainer />
  </WithStore>
);
export default AppWithStore;

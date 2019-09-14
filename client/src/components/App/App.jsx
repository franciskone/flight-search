import React from 'react';

import STYLES from './App.scss';
import Header from '../Header';
import SearchResults from '../SearchResults/';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <Header />
    <main className={c('App__main')}>
      <SearchResults />
    </main>
  </div>
);

export default App;

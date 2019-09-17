import React from 'react';
import BpkLargeMenuIcon from 'bpk-component-icon/lg/menu';

import logo from './logo.svg';
import STYLES from './Header.scss';
import { fakeOnClick, styleGetter } from '../../util';

const c = styleGetter(STYLES);

const Header = () => (
  <header className={c('Header')}>
    <a href="/">
      <span className={c('Header__hidden-text')}>Skyscanner</span>
      <img className={c('Header__logo-image')} alt="Skyscanner" src={logo} />
    </a>
    <button
      className={c('Header__menu-button')}
      onClick={() => fakeOnClick('Menu icon')}
    >
      <BpkLargeMenuIcon className={c('Header__menu-icon')} />
    </button>
  </header>
);

export default Header;

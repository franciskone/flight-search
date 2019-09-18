import React from 'react';
import BpkLargeMenuIcon from 'bpk-component-icon/lg/menu';

import logo from './logo.svg';
import STYLES from './Header.scss';
import { actionItemOnKeyPress, fakeOnClick, styleGetter } from '../../util';

const c = styleGetter(STYLES);

const Header = () => (
  <header className={c('Header')}>
    <a href="/">
      <span className={c('Header__hidden-text')}>Skyscanner</span>
      <img className={c('Header__logo-image')} alt="Skyscanner" src={logo} />
    </a>
    <div
      tabIndex="0"
      onKeyPress={actionItemOnKeyPress(() => fakeOnClick('Menu icon'))}
      className={c('Header__menu-button')}
      role="button"
      onClick={() => fakeOnClick('Menu icon')}
    >
      <BpkLargeMenuIcon className={c('Header__menu-icon')} />
    </div>
  </header>
);

export default Header;

import React from 'react';

import burgerMenuIcon from './burgerMenuIcon.svg';
import logo from './logo.svg';
import STYLES from './Header.scss';
import styleGetter from '../../util/style';
import { fakeOnClick } from '../../util';

const c = styleGetter(STYLES);

const Header = () => (
  <header className={c('Header')}>
    <a href="/">
      <span className={c('Header__hidden-text')}>Skyscanner</span>
      <img className={c('Header__logo-image')} alt="Skyscanner" src={logo} />
    </a>
    <button onClick={() => fakeOnClick('Menu icon')}>
      <img className={c('Header__menu-image')} alt="menu" src={burgerMenuIcon} />
    </button>
  </header>
);

export default Header;

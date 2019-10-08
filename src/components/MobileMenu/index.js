import React from 'react';
import { withRouter } from 'react-router-dom';

import './mobileMenu.css';

import Menu from '../../assets/menu.svg';

const MobileMenu = ({ toggleMobileMenu, menuOpen, history }) => {
  return (
    <div
      className={`mobile-menu--container ${
        menuOpen ? 'openMenu' : ''
      }`}
    >
      <div className="mobile-menu--header">
        <div
          className="mobile-menu--burger"
          onClick={toggleMobileMenu}
        >
          <img src={Menu} />
        </div>
        <div className="mobile-menu--headline">Tattoo Ink</div>
      </div>

      <ul className="mobile-menu--link-container">
        <li>
          <a onClick={() => history.push('/home')}>Home</a>
        </li>
        <li>
          <a onClick={() => history.push('/about')}>About Us</a>
        </li>
        <li>
          <a onClick={() => history.push('/gallery')}>Gallery</a>
        </li>
        <li>
          <a onClick={() => history.push('/contact')}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(MobileMenu);

import React from 'react';
import { AuthUserContext } from '../Session';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

import './header.css';

import WhiteMenu from '../../assets/white-menu.svg';

const Header = props => {
  return (
    <AuthUserContext.Consumer>
      {authUser => <HeaderInner authUser={authUser} {...props} />}
    </AuthUserContext.Consumer>
  );
};

const HeaderInner = ({
  authUser,
  toggleMobileMenu,
  history,
  firebase,
}) => {
  return (
    <div className="header--container">
      <div className="header--section-one">
        <div className="header--burger" onClick={toggleMobileMenu}>
          <img src={WhiteMenu} />
        </div>
      </div>

      {/* <div className="header--user-info">
        <span onClick={() => history.push('/signin')}>Log In</span> |{' '}
        <span onClick={() => history.push('/signup')}>Sign Up</span>
      </div> */}
    </div>
  );
};

export default withRouter(withFirebase(Header));

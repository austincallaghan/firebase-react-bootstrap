import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

import LandingPage from '../components/Landing';
import SignUpPage from '../components/SignUp';
import SignInPage from '../components/SignIn';
import About from '../components/About';

import AuthRoutes from './Auth';

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      {/* <Route path={'/gallery'} component={Tattoos} /> */}
      <Route path={'/about'} component={About} />
      <Route path={ROUTES.AUTH} component={AuthRoutes} />
      <Route path={ROUTES.LANDING} component={LandingPage} />
    </Switch>
  );
}

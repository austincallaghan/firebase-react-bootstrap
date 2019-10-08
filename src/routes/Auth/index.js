import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MyBookings } from './MyBookings';
import * as ROUTES from '../../constants/routes';

const AuthRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        exact
        path={`${match.path}${ROUTES.MY_BOOKINGS}`}
        component={MyBookings}
      />
    </Switch>
  );
};

export default AuthRoutes;

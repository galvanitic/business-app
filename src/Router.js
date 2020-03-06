import React from 'react';
import { Switch, Route, Redirect } from "react-router";
import LandingPage from './components/LandingPage';
import LandingPageProtected from './components/LandingPageProtected';

const checkAuth = () => {
  return true;
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/" />}
      />
  )
}

const Router = () => {
  return(
    <Switch>
      <Route path='/' component={LandingPage} />
      <ProtectedRoute path='/edit' component={LandingPageProtected} />
    </Switch>
  )
}

export default Router;
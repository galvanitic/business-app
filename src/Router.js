import React from 'react';
import { Switch, Route, Redirect } from "react-router";
import Listings from './containers/Listings';
import SmallBusinessDetails from './components/SmallBusinessDetails';
import AddListing from './containers/AddListing';

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
      <Route exact path='/' component={Listings} />
      <Route path='/details' component={SmallBusinessDetails} />
      <ProtectedRoute path='/add' component={AddListing} />
    </Switch>
  )
}

export default Router;
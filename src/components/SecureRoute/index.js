import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function SecureRoute(props) {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
  const loginPath = '/login';

  if (!isAuthenticated) {
    // const renderComponent = () => <Redirect to={{ pathname: loginPath }} />;
    // return <Route {...props} component={renderComponent} render={undefined} />
    return <Redirect to={{ pathname: loginPath }} />;
  }
  return <Route {...props} />
}

export default SecureRoute;

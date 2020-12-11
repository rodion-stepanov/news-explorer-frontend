import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  React.useEffect(() => {
    !props.loggedIn && props.setIsLoginPopupOpen(true);
  }, [])

  return (
    <Route>
      {
        !props.isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    </Route>
  )
}

export default ProtectedRoute;
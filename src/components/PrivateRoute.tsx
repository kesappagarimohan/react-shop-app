import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { StoreType } from "../types";
const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  // extracting component prop & whatever is remaining is kept inside
  const isAuthenticated = useSelector<StoreType>(
    (store) => !!store.userSession.user
  );
  // let isAuthenticated = false; // get the auth status
  const RoutedComponent = component as React.FunctionComponent;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <RoutedComponent />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location.pathname },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;

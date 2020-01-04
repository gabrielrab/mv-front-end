import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { isAutenticated } from "./services/auth";
import Index from "./pages/Index";
import Login from "./pages/Login/Login";

const PrivatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivatedRoute path="/" exact component={Index} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

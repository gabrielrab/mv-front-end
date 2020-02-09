import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { isAutenticated } from "./services/auth";
import Index from "./pages/Index";
import Login from "./pages/Login/Login";
import CreateOrder from "./pages/CreateOrder";
import { AccountProvider } from "./services/context";

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
        <AccountProvider>
          <PrivatedRoute path="/" exact component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/order" component={CreateOrder} />
        </AccountProvider>
      </Switch>
    </BrowserRouter>
  );
}

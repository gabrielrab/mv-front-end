import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
}

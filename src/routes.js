import React from "react";
import { Route, IndexRoute } from "react-router";

// Components
import App from "./components/app";
import Home from "./screens/home/index";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);

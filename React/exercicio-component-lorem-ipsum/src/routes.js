import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlanetsSreen from "./screens/planets";
import Planet from "./components/planets/planet";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" Component={PlanetsSreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

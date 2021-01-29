import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Footer from "./components/Footer";

const generateClassName = createGenerateClassName({
  productionPrefix: "leg",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Switch>
          <Route path="/">
            <Footer />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

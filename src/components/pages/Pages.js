import React from "react";
import Home from "./home/Home";
import "./pages.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Pages = () => {
  return (
    <div className="pages">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Pages;

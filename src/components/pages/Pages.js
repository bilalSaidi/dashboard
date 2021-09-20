import React from "react";
import Home from "./Home/Home";
import Users from "./Users/Users";
import "./pages.css";
import { Switch, Route } from "react-router-dom";
const Pages = () => {
  return (
    <div className="pages">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
};

export default Pages;

import React from "react";
import Home from "./home/Home";
import Users from "./Users/Users";
import User from "./Users/User";
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
        <Route path="/user/:id" children={<User />}></Route>
      </Switch>
    </div>
  );
};

export default Pages;

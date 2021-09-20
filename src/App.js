import React from "react";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Pages from "./components/pages/Pages";
import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <div className="bodyPage">
          <Sidebar />
          <div className="pages">
            <Pages />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

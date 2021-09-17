import React from "react";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Pages from "./components/pages/Pages";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="bodyPage">
        <Sidebar />
        <div className="pages">
          <Pages />
        </div>
      </div>
    </div>
  );
};

export default App;

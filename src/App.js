import React from "react";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Pages from "./components/pages/Pages";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

const BODYPAGES = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
`;

const App = () => {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <BODYPAGES>
          <Sidebar />
          <Pages />
        </BODYPAGES>
      </div>
    </Router>
  );
};

export default App;

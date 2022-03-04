import React from "react";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Pages from "./components/pages/Pages";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const BODYPAGES = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.openSideBar ? "15% 85%" : "0% 100%"};
  transition: all 0.5s ease-out;
`;

const App = () => {
  const [openSideBar, setOpenSideBar] = useState("true");

  return (
    <Router>
      <div className="app">
        <Topbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        {openSideBar ? (
          <BODYPAGES openSideBar>
            <Sidebar />
            <Pages />
          </BODYPAGES>
        ) : (
          <BODYPAGES>
            <Sidebar />
            <Pages />
          </BODYPAGES>
        )}
      </div>
    </Router>
  );
};

export default App;

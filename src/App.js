import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import "./styles.scss";
import {Main} from "./components/Main/Main";

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100
  );
  return (
    <div className="App__personal-account-container">
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleOpen={setSidebarIsOpen} />
      <div
        id="content-wrapper"
        className="App__personalaccount-wrapper non-auth"
      >
        <Main />
      </div>
    </div>
  );
};

export default App;

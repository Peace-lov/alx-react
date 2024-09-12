import React from "react";
import ALX_logo from "./ALX_logo.jpg";
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <>
      <div className="App">
        <img src={ALX_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;

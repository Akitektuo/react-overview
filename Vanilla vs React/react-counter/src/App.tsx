import React from "react";
import "./App.css";
import { Counter } from "./Counter";

const App = () => (
  <div className="app">
    <div className="appContent">
      <Counter className="counter" />
      <Counter className="counter" initialCount={7} />
    </div>
  </div>
);

export default App;

import React from "react";
import "./App.css";
import { TicTacToeGame } from "./ticTacToe/TicTacToeGame";

const App = () => (
  <div className="app">
    <div className="appContent">
      <TicTacToeGame />
    </div>
  </div>
);

export default App;

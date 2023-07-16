import React from "react";
import styles from "./App.module.scss";
import { TicTacToeGame } from "./ticTacToe/TicTacToeGame";

const App = () => (
  <div className={styles.app}>
    <div className={styles.appContent}>
      <TicTacToeGame />
    </div>
  </div>
);

export default App;

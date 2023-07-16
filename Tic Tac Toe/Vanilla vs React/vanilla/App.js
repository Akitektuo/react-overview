import importStyle from "./import-style.js";
import { TicTacToeGame } from "./ticTacToe/TicTacToeGame.js";

importStyle("App.css");

export const App = () => {
    const ticTacToeGame = TicTacToeGame();

    // <div className="appContent">
    const appContentElement = document.createElement("div");
    appContentElement.className = "appContent";
    appContentElement.appendChild(ticTacToeGame);

    // <div className="app">
    const appElement = document.createElement("div");
    appElement.className = "app";
    appElement.appendChild(appContentElement);

    return appElement;
};
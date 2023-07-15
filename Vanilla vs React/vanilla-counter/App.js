import importStyle from "./import-style.js";
import { Counter } from "./Counter.js";

importStyle("App.css");

export const App = () => {
    // <Counter className="counter" />
    const counterElements = [
        Counter({ className: "counter" }),
        Counter({ className: "counter", initialCount: 7 })
    ];

    // <div className="appContent">
    const appContentElement = document.createElement("div");
    appContentElement.className = "appContent";
    appContentElement.append(...counterElements);

    // <div className="app">
    const appElement = document.createElement("div");
    appElement.className = "app";
    appElement.appendChild(appContentElement);

    return appElement;
};
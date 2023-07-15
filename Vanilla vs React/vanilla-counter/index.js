import importStyle from "./import-style.js";
import { App } from "./App.js";

importStyle("index.css");

document.querySelector("#root").appendChild(App());
import importStyle from "../import-style.js";

importStyle("ticTacToe/Box.css");

export const Box = ({ state, onClick }) => {
    const element = document.createElement("div");
    
    const update = (newState) => {
        element.innerText = newState;

        return element;
    }

    element.className = "box";
    element.onclick = () => {
        if (!element.innerText) {
            onClick?.();
        }
    }

    update(state);

    return {
        node: element,
        update
    }
}
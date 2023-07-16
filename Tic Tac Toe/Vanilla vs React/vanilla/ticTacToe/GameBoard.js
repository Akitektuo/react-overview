import importStyle from "../import-style.js";
import { Box } from "./Box.js";

importStyle("ticTacToe/GameBoard.css");

export const GameBoard = ({ board , onClick }) => {
    const updateMap = [];

    const boardRowElements = board.map((row, rowIndex) => {
        const boxElements = row.map((state, columnIndex) => {
            const box = Box({
                state,
                onClick: () => onClick(rowIndex, columnIndex)
            });

            updateMap[rowIndex * 10 + columnIndex] = box.update;

            return box.node;
        });

        const boardRowElements = document.createElement("div");
        boardRowElements.className = "row";
        boardRowElements.append(...boxElements);

        return boardRowElements;
    });

    const gameBoardElement = document.createElement("div");
    gameBoardElement.className = "gameBoard";
    gameBoardElement.append(...boardRowElements);

    const update = (rowIndex, columnIndex, newState) => {
        updateMap[rowIndex * 10 + columnIndex](newState);
    }

    return {
        node: gameBoardElement,
        update
    }
}
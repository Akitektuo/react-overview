import { GameBoard } from "./GameBoard.js";
import { TurnIndicator } from "./TurnIndicator.js";

const EMPTY_GAME_STATE = {
    board: [
        ["", "", ""],
        ["", "", ""], 
        ["", "", ""]
    ],
    turn: "X"
};

const checkAllEqual = (first, second, third) => {
    if (first === second && second === third) {
        return first;
    }
    return "";
}

const checkGameLogic = (board, announceStateAndReset) => {
    if (board.every(row => row.every(box => box === ""))) {
        return;
    }

    const winner = checkAllEqual(board[0][0], board[0][1], board[0][2]) ||
        checkAllEqual(board[1][0], board[1][1], board[1][2]) ||
        checkAllEqual(board[2][0], board[2][1], board[2][2]) ||
        checkAllEqual(board[0][0], board[1][0], board[2][0]) ||
        checkAllEqual(board[0][1], board[1][1], board[2][1]) ||
        checkAllEqual(board[0][2], board[1][2], board[2][2]) ||
        checkAllEqual(board[0][0], board[1][1], board[2][2]) ||
        checkAllEqual(board[0][2], board[1][1], board[2][0]);

    if (winner) {
        announceStateAndReset(`${winner} wins!`);
    }

    if (!board.some(row => row.includes(""))) {
        announceStateAndReset("It's a tie...");
    }
}

export const TicTacToeGame = () => {
    const gameState = { ...EMPTY_GAME_STATE };

    const resetState = () => {
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
                gameState.board[rowIndex][columnIndex] = "";
                gameBoard.update(rowIndex, columnIndex, "");
            }
        }
        gameState.turn = EMPTY_GAME_STATE.turn;
        turnIndicator.update("X");
    }

    const handleBoardClick = (rowIndex, columnIndex) => {
        const newState = gameState.turn;
        gameState.board[rowIndex][columnIndex] = gameState.turn;
        gameBoard.update(rowIndex, columnIndex, newState);

        const newTurn = gameState.turn === "X" ? "O" : "X";
        gameState.turn = newTurn;
        turnIndicator.update(newTurn);

        const announceStateAndReset = (message) => setTimeout(() => {
            resetState();
            alert(message);
        }, 100);

        checkGameLogic(gameState.board, announceStateAndReset);
    }

    const turnIndicator = TurnIndicator({ turn: gameState.turn });
    const gameBoard = GameBoard({ 
        board: gameState.board,
        onClick: handleBoardClick
    });

    const element = document.createElement("div");
    element.append(turnIndicator.node, gameBoard.node);
    return element;
}
import { useCallback, useEffect, useState } from "react";
import { BoardType, BoxStateEnum, TurnEnum } from "./TicTacToeGame.types";
import { TurnIndicator } from "./TurnIndicator";
import { GameBoard } from "./GameBoard";

const checkAllEqual = (first: BoxStateEnum, second: BoxStateEnum, third: BoxStateEnum) => {
    if (first === second && second === third) {
        return first;
    }
    return BoxStateEnum.EMPTY;
}

const checkGameLogic = (board: BoardType, announceStateAndReset: (message: string) => void) => {
    if (board.every(row => row.every(box => box === BoxStateEnum.EMPTY))) {
        return;
    }

    if (!board.some(row => row.includes(BoxStateEnum.EMPTY))) {
        announceStateAndReset("It's a tie...");
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
}

export const TicTacToeGame = () => {
    const [gameState, setGameState] = useState({
        board: [
            [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY],
            [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY], 
            [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY]
        ],
        turn: TurnEnum.X
    });

    const updateGameState = useCallback((rowIndex: number, columnIndex: number) =>
        setGameState(gameState => {
            const newState = gameState.turn === TurnEnum.X ? BoxStateEnum.X : BoxStateEnum.O;
            const board = [...gameState.board];
            board[rowIndex][columnIndex] = newState;

            return {
                turn: gameState.turn === TurnEnum.X ? TurnEnum.O : TurnEnum.X,
                board
            };
        }), []);

    useEffect(() => {
        const board = gameState.board;

        const announceStateAndReset = (message: string) => setTimeout(() => {
            alert(message);
            setGameState({
                board: [
                    [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY],
                    [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY], 
                    [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY]
                ],
                turn: TurnEnum.X
            });
        }, 100);

        checkGameLogic(board, announceStateAndReset);
    }, [gameState.board]);

    return <>
        <TurnIndicator turn={gameState.turn} />
        <GameBoard board={gameState.board} onClick={updateGameState} />
    </>;
}
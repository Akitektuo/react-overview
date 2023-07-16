import { useCallback, useEffect, useState } from "react";
import { BoxStateEnum, TurnEnum } from "./TicTacToeGame.types";
import { TurnIndicator } from "./TurnIndicator";
import { GameBoard } from "./GameBoard";
import { AlertDialog } from "../alertDialog/AlertDialog";
import { useGameLogic } from "./UseGameLogic";

export const TicTacToeGame = () => {
    const [gameState, setGameState] = useState({
        board: [
            [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY],
            [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY], 
            [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY]
        ],
        turn: TurnEnum.X
    });
    const [dialogMessage, setDialogMessage] = useState("");
    const gameEvaluationResult = useGameLogic(gameState.board);

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

    const handleDialogClick = useCallback(() => {
        setDialogMessage("");
        setGameState({
            board: [
                [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY],
                [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY], 
                [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY]
            ],
            turn: TurnEnum.X
        });
    }, []);

    useEffect(() => {
        setDialogMessage(gameEvaluationResult);
    }, [gameEvaluationResult]);

    return <>
        <TurnIndicator turn={gameState.turn} />
        <GameBoard board={gameState.board} onClick={updateGameState} />
        <AlertDialog message={dialogMessage} onClick={handleDialogClick} />
    </>;
}
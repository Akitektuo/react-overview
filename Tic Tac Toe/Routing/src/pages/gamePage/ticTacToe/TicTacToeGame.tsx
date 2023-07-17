import { useContext, useEffect } from "react";
import { TurnIndicator } from "./components/TurnIndicator";
import { GameBoard } from "./components/GameBoard";
import { AlertDialog } from "../../../components/alertDialog/AlertDialog";
import { useGameLogic } from "./hooks/UseGameLogic";
import { TicTacToeGameContext } from "./TicTacToeGame.store";
import { observer } from "mobx-react";

export const TicTacToeGame = observer(() => {
    const { 
        gameState, 
        dialogMessage, 
        handleBoxSelection, 
        setDialogMessage, 
        reset 
    } = useContext(TicTacToeGameContext);
    const gameEvaluationResult = useGameLogic(gameState.board);

    useEffect(() => {
        setDialogMessage(gameEvaluationResult);
    }, [setDialogMessage, gameEvaluationResult]);

    return <>
        <TurnIndicator turn={gameState.turn} />
        <GameBoard board={gameState.board} onClick={handleBoxSelection} />
        <AlertDialog message={dialogMessage} onClick={reset} />
    </>;
});
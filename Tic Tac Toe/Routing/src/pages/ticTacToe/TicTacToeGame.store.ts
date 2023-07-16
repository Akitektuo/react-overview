import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { BoxStateEnum, EMPTY_TIC_TAC_TOE_STATE, TicTacToeStateType, TurnEnum } from "./TicTacToeGame.types";

export class TicTacToeGameStore {
    public gameState: TicTacToeStateType = EMPTY_TIC_TAC_TOE_STATE;
    public dialogMessage: string = "";

    constructor () {
        makeAutoObservable(this);
    }

    public handleBoxSelection = (rowIndex: number, columnIndex: number) => {
        const newState = this.gameState.turn === TurnEnum.X ? BoxStateEnum.X : BoxStateEnum.O;
        const newTurn = this.gameState.turn === TurnEnum.X ? TurnEnum.O : TurnEnum.X;

        this.gameState.board[rowIndex][columnIndex] = newState;
        this.gameState.turn = newTurn;
    }

    public setDialogMessage = (message: string) => this.dialogMessage = message;

    public reset = () => {
        this.gameState = EMPTY_TIC_TAC_TOE_STATE;
        this.dialogMessage = "";
    }
}

export const ticTacToeGameStore = new TicTacToeGameStore();
export const TicTacToeGameContext = createContext(ticTacToeGameStore);
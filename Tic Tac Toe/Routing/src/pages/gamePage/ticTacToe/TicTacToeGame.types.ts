export enum TurnEnum {
    X,
    O
}

export enum BoxStateEnum {
    EMPTY = "",
    X = "X",
    O = "O"
}

export type BoardType = BoxStateEnum[][];

export interface TicTacToeStateType {
    board: BoardType;
    turn: TurnEnum;
}

export const EMPTY_TIC_TAC_TOE_STATE: TicTacToeStateType = {
    board: [
        [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY],
        [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY], 
        [BoxStateEnum.EMPTY, BoxStateEnum.EMPTY, BoxStateEnum.EMPTY]
    ],
    turn: TurnEnum.X
}
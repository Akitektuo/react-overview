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
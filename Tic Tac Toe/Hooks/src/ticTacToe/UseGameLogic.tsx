import { useMemo } from "react";
import { BoardType, BoxStateEnum } from "./TicTacToeGame.types";

const checkAllEqual = (first: BoxStateEnum, second: BoxStateEnum, third: BoxStateEnum) => {
    if (first === second && second === third) {
        return first;
    }
    return BoxStateEnum.EMPTY;
}

export const useGameLogic = (board: BoardType) => {
    const checkGameLogic = useMemo(() => {
        if (board.every(row => row.every(box => box === BoxStateEnum.EMPTY))) {
            return "";
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
            return `${winner} wins!`;
        }
    
        if (!board.some(row => row.includes(BoxStateEnum.EMPTY))) {
            return "It's a tie...";
        }
    
        return "";
    }, [board]);

    return checkGameLogic;
}
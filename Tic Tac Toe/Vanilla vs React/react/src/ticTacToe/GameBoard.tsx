import { Box } from "./Box";
import { BoardType } from "./TicTacToeGame.types"
import "./GameBoard.css";

interface Props {
    board: BoardType;
    onClick?: (rowIndex: number, columnIndex: number) => void;
}

export const GameBoard = ({ board, onClick }: Props) => (
    <div className="gameBoard">
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((box, columnIndex) => (
                    <Box key={rowIndex * 10 + columnIndex} state={box} onClick={() => onClick?.(rowIndex, columnIndex)} />
                ))}
            </div>
        ))}
    </div>
);
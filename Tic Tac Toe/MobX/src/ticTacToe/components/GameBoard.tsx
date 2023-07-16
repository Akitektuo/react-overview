import { Box } from "./Box";
import { BoardType } from "../TicTacToeGame.types"
import styles from "./GameBoard.module.scss";

interface Props {
    board: BoardType;
    onClick?: (rowIndex: number, columnIndex: number) => void;
}

export const GameBoard = ({ board, onClick }: Props) => (
    <div className={styles.gameBoard}>
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
                {row.map((box, columnIndex) => (
                    <Box key={rowIndex * 10 + columnIndex} state={box} onClick={() => onClick?.(rowIndex, columnIndex)} />
                ))}
            </div>
        ))}
    </div>
);
import { TicTacToeGame } from "./ticTacToe/TicTacToeGame";
import styles from "./GamePage.module.scss";

export const GamePage = () => (
    <div className={styles.gamePage}>
        <div className={styles.gamePageContent}>
            <TicTacToeGame />
        </div>
    </div>
)
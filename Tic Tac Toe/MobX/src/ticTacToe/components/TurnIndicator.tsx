import classNames from "classnames";
import { TurnEnum } from "../TicTacToeGame.types";
import styles from "./TurnIndicator.module.scss";

interface Props {
    turn: TurnEnum;
}

export const TurnIndicator = ({ turn }: Props) => {
    const turnDisplay = turn === TurnEnum.X ?
        "❌" : "⭕";

    return (
        <h1 className={classNames(styles.turnIndicator, {
            [styles.oTurn]: turn === TurnEnum.O
        })}>
            It's {turnDisplay}'s turn
        </h1>
    );
}
import { BoxStateEnum } from "./TicTacToeGame.types";
import styles from "./Box.module.scss";
import { useCallback } from "react";

interface Props {
    state: BoxStateEnum;
    onClick?: () => void;
}

export const Box = ({ state, onClick }: Props) => {
    const handleClick = useCallback(() => {
        if (!state) {
            onClick?.();
        }
    }, [state, onClick]);

    return(
        <div className={styles.box} onClick={handleClick}>{state}</div>
    );
}
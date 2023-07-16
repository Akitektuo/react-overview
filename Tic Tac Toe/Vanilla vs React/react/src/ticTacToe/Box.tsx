import { BoxStateEnum } from "./TicTacToeGame.types";
import "./Box.css";
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
    }, [state]);

    return(
        <div className="box" onClick={handleClick}>{state}</div>
    );
}
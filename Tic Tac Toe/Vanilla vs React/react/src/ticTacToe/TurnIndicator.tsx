import { TurnEnum } from "./TicTacToeGame.types"

interface Props {
    turn: TurnEnum;
}

export const TurnIndicator = ({ turn }: Props) => {
    const turnDisplay = turn === TurnEnum.X ?
        "❌" : "⭕";

    return (
        <h1>It's {turnDisplay}'s turn</h1>
    );
}
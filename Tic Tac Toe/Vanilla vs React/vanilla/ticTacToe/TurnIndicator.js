export const TurnIndicator = ({ turn }) => {
    const element = document.createElement("h1");

    const update = (newTurn) => {
        const turnDisplay = newTurn === "X" ? "❌" : "⭕";

        element.innerText = `It's ${turnDisplay}'s turn`;

        return element;
    }

    update(turn);

    return {
        node: element,
        update
    }
}
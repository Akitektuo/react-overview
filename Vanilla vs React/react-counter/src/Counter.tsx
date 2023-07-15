import { useState } from "react";
import "./Counter.css";
import { CountIndicator } from "./CountIndicator";

interface Props {
    initialCount?: number;
    className?: string;
}

export const Counter = ({ initialCount = 0, className }: Props) => {
    const [count, setCount] = useState(initialCount);

    const handleClick = () => setCount(count + 1);

    return (
        <button className={`counterButton ${className}`} onClick={handleClick}>
            Clicked me <CountIndicator count={count} /> time{count === 1 ? "" : "s"}
        </button>
    );
}
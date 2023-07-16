import importStyle from "./import-style.js";
import { CountIndicator } from "./CountIndicator.js";

importStyle("Counter.css");

export const Counter = ({ initialCount = 0, className }) => {
    let count = initialCount;

    const countIndicatorElement = CountIndicator({ count });

    const handleClick = () => {
        count++;
        countIndicatorElement.update(count);
        buttonElement.childNodes.item(3).textContent = count === 1 ? "" : "s";
    }

    // <button className={`counterButton ${className}`} onClick={handleClick}>
    const buttonElement = document.createElement("button");
    buttonElement.className = `counterButton ${className}`;
    buttonElement.onclick = handleClick;
    buttonElement.append("Clicked me ", countIndicatorElement.node, " time", count === 1 ? "" : "s");

    return buttonElement;
}
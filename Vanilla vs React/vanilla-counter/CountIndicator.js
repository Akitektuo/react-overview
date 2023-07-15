import importStyle from "./import-style.js";

importStyle("CountIndicator.css");

const getColorFrom = (count) => {
    if (!count)
        return "black";

    switch (count % 7) {
        case 0:
            return "violet"
        case 1:
            return "indigo"
        case 2:
            return "blue"
        case 3:
            return "green"
        case 4:
            return "yellow"
        case 5:
            return "orange"
        case 6:
            return "red"
    }

    return "black";
}

export const CountIndicator = ({ count }) => {
    const element = document.createElement("div");
    
    const update = (newCount) => {
        element.className = `countIndicator ${getColorFrom(newCount)}`;
        element.innerText = newCount;

        return element;
    }

    update(count);

    return {
        node: element,
        update
    }
}
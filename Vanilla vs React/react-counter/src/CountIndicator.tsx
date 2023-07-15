import "./CountIndicator.css";

interface Props {
    count: number;
}

const getColorFrom = (count: number) => {
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

export const CountIndicator = ({ count }: Props) => (
    <div className={`countIndicator ${getColorFrom(count)}`}>{count}</div>
);
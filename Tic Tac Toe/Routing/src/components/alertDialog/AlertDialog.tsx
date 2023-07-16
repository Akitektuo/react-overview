import styles from "./AlertDialog.module.scss";

interface Props {
    message: string;
    onClick: () => void;
}

export const AlertDialog = ({ message, onClick }: Props) => {
    if (!message) {
        return null;
    }

    return (
        <div className={styles.alertDialog}>
            <h2>{message}</h2>
            <button className={styles.closeButton} onClick={onClick}>Close</button>
        </div>
    );
}
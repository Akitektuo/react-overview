import { useParams } from "react-router-dom";
import styles from "./RecordPage.module.scss";
import { RECORDS } from "../shared/Data";

const getRandomDate = () => new Date(Math.random() * new Date().getTime());

export const RecordPage = () => {
    const { id } = useParams();

    const idNumber = id ? parseInt(id) : 0;

    const record = RECORDS.find(record => record.id === idNumber);

    return (
        <div className={styles.recordPage}>
            {record ? (
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        <td>{record?.id}</td>
                        <td>{record?.name}</td>
                        <td>{record?.score}</td>
                        <td>{getRandomDate().toLocaleDateString()}</td>
                    </tbody>
                </table>
            ) : (
                <h2>Invalid ID: <b>{id}</b></h2>
            )}
        </div>
    );
}
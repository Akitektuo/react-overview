import { RECORDS } from "../../shared/Data";
import { RecordItem } from "./RecordItem";
import styles from "./RankingsPage.module.scss";

export const RankingsPage = () => (
    <div className={styles.rankingsPage}>
        {RECORDS.map(record => (
            <RecordItem key={record.id} record={record} />
        ))}
    </div>
);
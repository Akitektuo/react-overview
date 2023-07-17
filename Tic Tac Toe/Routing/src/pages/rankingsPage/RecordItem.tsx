import styles from "./RecordItem.module.scss";
import { Record } from "../../shared/Data";
import { NavLink } from "react-router-dom";
import { RECORD_ROUTE } from "../../shared/RoutesConstants";

interface Props {
    record: Record;
}

export const RecordItem = ({ record }: Props) => <>
    <NavLink to={`${RECORD_ROUTE}/${record.id}`} className={styles.recordItem}>
        <span>{record.name}</span>
        <span>{record.score}</span>
    </NavLink>
</>;
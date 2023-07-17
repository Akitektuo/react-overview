import { BASE_ROUTE, RANKINGS_ROUTE } from "../shared/RoutesConstants";
import styles from "./NavigationBar.module.scss";
import { NavigationBarItem } from "./NavigationBarItem";

export const NavigationBar = () => (
    <div className={styles.navigationBar}>
        <NavigationBarItem text="Game" url={BASE_ROUTE} />
        <NavigationBarItem text="Rankings" url={RANKINGS_ROUTE} />
    </div>
);
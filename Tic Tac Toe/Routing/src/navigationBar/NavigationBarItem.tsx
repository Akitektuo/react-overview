import { NavLink } from "react-router-dom";
import styles from "./NavigationBarItem.module.scss";
import classNames from "classnames";

interface Props {
    text: string;
    url: string;
}

export const NavigationBarItem = ({ text, url }: Props) => (
    <NavLink 
        to={url} 
        className={({ isActive }) => classNames(styles.navigationBarItem, {
            [styles.active]: isActive
        })}>
        {text}
    </NavLink>
);
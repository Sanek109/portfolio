import React from 'react';
import styles from './NavMenu.module.scss';
import {NavLink} from "react-router-dom";

let NavMenu = () => {
  return (
    <div className={styles.navMenu}>
        <div className={styles.link}>
            <NavLink activeClassName={styles.activeLink} exact to='/'>
                Главная
            </NavLink>
        </div>
        <div className={styles.link}>
            <NavLink activeClassName={styles.activeLink} to='/skills'>
                Скилы
            </NavLink>
        </div>
        <div className={styles.link}>
            <NavLink activeClassName={styles.activeLink} to='/projects'>
                Проекты
            </NavLink>
        </div>
        <div className={styles.link}>
            <NavLink activeClassName={styles.activeLink} to='/contacts'>
                Контакты
            </NavLink>
        </div>
    </div>
  );
}

export default NavMenu;

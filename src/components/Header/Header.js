import React from 'react';
import styles from './Header.module.scss';
import NavMenu from "../NavMenu/NavMenu";

let Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <NavMenu />
            </div>
        </div>
    );
}

export default Header;

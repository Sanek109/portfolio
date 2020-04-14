import React from 'react';
import styles from './Slogan.module.scss';
import {NavLink} from "react-router-dom";

let Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <button>
                    <NavLink to='/contacts'>
                        Нанать меня
                    </NavLink>
                </button>
            </div>
            <hr/>
        </div>
    );
}

export default Slogan;

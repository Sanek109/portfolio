import React from 'react';
import preloaderImg from './../../../images/preloader/preloader_2.gif';
import styles from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloaderImg} />
        </div>
    )
}

export default Preloader;

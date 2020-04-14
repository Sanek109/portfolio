import React from 'react';
import styles from './Main.module.scss';
import avatar from './../../images/my_photo_2.png'

let Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <h2>Здравствуйте</h2>
                    <h1>Меня зовут Александр Набздоров! </h1>
                    <h3>Я front-end developer</h3>
                </div>
                <div className={styles.photo}>
                    <img src={avatar} alt="Главное фото"/>
                </div>
            </div>

        </div>
    );
}

export default Main;

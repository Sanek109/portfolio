import React from 'react';
import styles from './Footer.module.scss';
import vk from './../../images/icon_network/icon_vk.png'
import instagram from './../../images/icon_network/icon_instagram.png'
import linkedin from './../../images/icon_network/icon_linkedin.png'
import facebook from './../../images/icon_network/icon_facebook.png'

let Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div><h2>Alexandr Nabzdorov</h2></div>
                <div className={styles.iconNetwork}>
                    <a href='https://vk.com/audiquattro2000' target="_blank">
                        <img src={vk} alt='vk'/>
                    </a>
                    <a href='https://www.instagram.com/alexreactredux/' target='_blank'>
                        <img src={instagram} alt='instagram'/>
                    </a>
                    <a href='https://www.linkedin.com/in/alexander-nabzdorov-6b02231a5/' target="_blank">
                        <img src={linkedin} alt='linkedIn'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100000713657159' target='_blank'>
                        <img src={facebook} alt='facebook'/>
                    </a>
                </div>
                <div><h2>© 2019 Все права защищены</h2></div>
            </div>
        </div>
    );
}

export default Footer;

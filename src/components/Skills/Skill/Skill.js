import React from 'react';
import styles from './Skill.module.scss';

let Skill = ({icon, titleSkill}) => {
    return (
    <div className={styles.skill}>
        <img src={icon} alt='' />
        <h2>{titleSkill}</h2>
    </div>
    );
}

export default Skill;

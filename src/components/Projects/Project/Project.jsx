import React from 'react';
import styles from './Project.module.scss';

let Project = ({bgc, title, description, url}) => {
    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + bgc + ')',
    };

    return (
        <div className={styles.project}>
            <div className={styles.imageProject} style={divStyle}>
                <a href={url} target='_blank'><button>Код</button></a>
            </div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    );
}

export default Project;

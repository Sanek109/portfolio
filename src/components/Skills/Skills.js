import React, {useState} from 'react';
import styles from './Skills.module.scss';
import Skill from "./Skill/Skill";
import iconReact from "./../../images/icon_skill/icon_react.png"
import iconRedux from './../../images/icon_skill/icon_redux.png'
import iconHtml from './../../images/icon_skill/icon_html.png'
import iconCss from './../../images/icon_skill/icon_css.png'
import iconJquery from './../../images/icon_skill/icon_jquery.png'
import iconJavaScript from './../../images/icon_skill/icon_js.png'
import iconFlex from './../../images/icon_skill/icon_flex.png'
import iconGit from './../../images/icon_skill/icon_git.png'
import iconSass from './../../images/icon_skill/icon_sass.png'


let Skills = () => {
    const [iconSkills] = useState([
        {id: 1, icon: iconReact, title: 'React'},
        {id: 2, icon: iconRedux, title: 'Redux'},
        {id: 3, icon: iconJavaScript, title: 'JavaScript'},
        {id: 4, icon: iconSass, title: 'Sass'},
        {id: 5, icon: iconHtml, title: 'HTML5'},
        {id: 6, icon: iconCss, title: 'CSS'},
        {id: 7, icon: iconFlex, title: 'Flex'},
        {id: 8, icon: iconJquery, title: 'JQuery'},
        {id: 9, icon: iconGit, title: 'GitHub'}
    ])
    let todoSkills = iconSkills.map((skill) => <Skill key={skill.id} icon={skill.icon} titleSkill={skill.title} />)
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.mySkills}>
                    <h1>Мои навыки</h1>
                </div>
                <div className={styles.listSkills}>
                    {todoSkills}
                </div>
            </div>
        </div>
    );
}

export default Skills;

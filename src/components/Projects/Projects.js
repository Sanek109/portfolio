import React, {useState} from 'react';
import styles from './Projects.module.scss';
import Project from "./Project/Project";
import imageSocialNetwork from './../../images/image_project/social_network.png';
import imageTodolist from './../../images/image_project/todolist.png';
import imageTestSite from './../../images/image_project/test_site.png';


let Projects = () => {
    const [projects] = useState([
        {id: 1, background: imageSocialNetwork, urlLink: 'https://github.com/Sanek109/demo-network', title: 'Социальная сеть', description: 'React, Redux, Redux-thunk, redux-form, axios' },
        {id: 2, background: imageTodolist, urlLink: 'https://github.com/Sanek109/todolist', title: 'Todolist', description: 'React, Redux, react-redux' },
        {id: 3, background: imageTestSite, urlLink: 'https://github.com/Sanek109/test-site', title: 'Сайт(верстка)', description: 'Html, css, grid, flex, gulp' }
    ])

    let myProjects = projects.map(project => <Project url={project.urlLink} key={project.id} bgc={project.background} title={project.title} description={project.description} />)
  return (
    <div className={styles.projects}>
        <div className={styles.container}>
            <h1>Проекты</h1>
            <div className={styles.myProject}>
                {myProjects}
            </div>
        </div>
    </div>
  );
}

export default Projects;

import React from 'react';
import Card from './Card';
import projectsInfo from '../../Assets/projectsInfo.json';
import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects-wrapper">
            <h1 className="title projects">Recent Projects</h1>
            <div className="project-cards-wrapper">
                {Object.entries(projectsInfo).map(([projectKey, project]) => {
                    return (
                        <Card
                            key={projectKey}
                            id={projectKey}
                            title={project.title}
                            descriptionArr={project.description}
                            techArr={project.tech}
                            gitLink={project.git}
                            webLink={project.web}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;

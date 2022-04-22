import React from 'react';
import projectData from '../projectData';
import { FaGithub } from 'react-icons/fa';

const Project = () => {

    return (
        <section className="grid">
        {projectData.map(project => (
            <div id={`project-${project.id}`} className="grid-row my-5 position-relative project-div" key={project.id}>
                <h3 className="m-0">
                    {project.title}
                </h3>
                <img className="position-relative project-img" src={require(`../../assets/${project.image.src}.png`)} alt={project.image.alt}/>
                <a id="repo-link" className="position-absolute bottom-0 start-0 project-links" href={project.github}>
                    <FaGithub />
                </a>
                <a id="app-link" className="position-absolute bottom-0 end-0 project-links" href={project.deployed}>
                    Depolyed App
                </a>
            </div>
        ))}
        </section>
    )
}

export default Project;
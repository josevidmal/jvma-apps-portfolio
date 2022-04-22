import React from 'react';
import projectData from '../projectData';
import { FaGithub } from 'react-icons/fa';

const Project = () => {

    return (
        <section className="container-fluid px-md-0">
            <div className="row justify-content-between">
        {projectData.map(project => (
            <div id={`project-${project.id}`} className="p-0 my-3 position-relative col-md-5 mx-md-2 project-div" key={project.id}>
                <h4 className="m-0">
                    {project.title}
                </h4>
                <img className="position-relative project-img" src={require(`../../assets/${project.image.src}.png`)} alt={project.image.alt}/>
                <a id="repo-link" className="position-absolute bottom-0 start-0 project-links" href={project.github}>
                    <FaGithub />
                </a>
                <a id="app-link" className="position-absolute bottom-0 end-0 project-links" href={project.deployed}>
                    Depolyed App
                </a>
            </div>
        ))}
            </div>
        </section>
    )
}

export default Project;
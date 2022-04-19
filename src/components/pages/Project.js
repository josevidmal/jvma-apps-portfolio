import React from 'react';
import projectData from '../projectData';

const Project = () => {

    return (
        <section>
        {projectData.map(project => ( 
            <div style={{maxWidth: "100px"}}>
                <img src={require(`../../assets/${project.image.src}.png`)} alt={project.image.alt}/>
                <h2>
                    {project.title}
                </h2>
                <a href={project.github}>
                    GitHub
                </a>
                <a href={project.deployed}>
                    Depolyed App
                </a>
            </div>
        ))}
        </section>
    )
}

export default Project;
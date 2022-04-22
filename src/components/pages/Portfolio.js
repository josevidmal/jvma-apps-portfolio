import React from 'react'
import Project from '../pages/Project'

const Portfolio = () => {
    return (
        <section className="container-fluid py-4 px-md-5 main-section">
            <h2 className="row justify-content-center justify-content-md-start my-4 px-md-2">Portfolio</h2>
            <Project />
        </section>
    );
}

export default Portfolio
import React from 'react';
import ResumePdf from '../../assets/Resume - Jose Vidal Maza Alonso.pdf' 

const Resume = () => {
    return (
        <section className="container-fluid p-4 px-md-5 main-section">
            <h2 className="row justify-content-center justify-content-md-start my-4 px-md-2">Resume</h2>
            <p id="resume-download">Download my <span><a id="resume-link" href={ResumePdf} download>Resume</a></span></p>
            <h4>Front-end Skills</h4>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>Responsive Web Design (RWD)</li>
                    <li>JavaScript ES+6</li>
                    <li>React.js</li>
                    <li>Progressive Web Applications (PWA)</li>
                    <li>Webpack</li>
                    <li>Workbox</li>
                </ul>
            <h4>Back-end Skills</h4>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL: MySQL, Sequelize</li>
                    <li>NoSQL: MongoDB, Mongoose, IndexedDB</li>
                    <li>GraphQL</li>
                    <li>RESTful APIs</li>
                    <li>Object Oriented Programming (OOP)</li>
                    <li>Object Relational Mapping (ORM)</li>
                    <li>Object Document Mapping (ODM)</li>
                    <li>Model View Controller (MVC)</li>
                </ul>
        </section>
    );
}

export default Resume;
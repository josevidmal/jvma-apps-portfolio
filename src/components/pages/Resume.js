import React from 'react';
import ResumePdf from '../../assets/Resume - Jose Vidal Maza Alonso.pdf' 

const Resume = () => {
    return (
        <section>
            <h1>Resume</h1>
            <p>Download my <span><a href={ResumePdf} download>Resume</a></span></p>
            <h2>Front-end Skills</h2>
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
            <h2>Back-end Skills</h2>
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
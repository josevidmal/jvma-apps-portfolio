import React from 'react';

const AboutMe = () => {
    return (
        <section className="container-fluid p-4 px-md-5 main-section">
            <h2 className="row justify-content-center justify-content-md-start my-4 px-md-2">About Me</h2>
            <img id="profile-img" className="row justify-content-center mx-auto my-4 mx-md-0" src={require("../../assets/profile-image.png")} alt="profile"/>
            <p id="brand-statement" className="row justify-content-center my-4 px-md-2">
                Passionate Full Stack web developer with experience in sales, supply chain and customer service, with a Bachelor's 
                Degree in International Business from Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM). Skills 
                and technologies include HTML5, CSS3, JavaScript ES6+, RESTful APIs, Node.js, NPM, Express.js, SQL (MySQL), Sequelize, 
                NoSQL (MongoDB), Mongoose, React.js, OOP, ORM, ODM, MVC, PWA, Bootstrap, Heroku, GIT and GitHub. Strengths in problem 
                solving, creativity, teamwork, negotiation and delivering results on time. Very interested in taking coding challenges 
                to take my current skills to the next level and obtain new knowledge in additional technologies and programming languages. 
                Eager to work with other programmers to satisfy the end user's needs, finding solutions through collaboration, being able 
                to provide my unique and structured approaches and enrich myself with valuable perspectives from colleagues. Potential to 
                create innovative web solutions targeted towards Commercial and Supply Chain areas, thanks to my knowledge of common 
                problems and needs in those fields. Currently enrolled at ITESM Coding Bootcamp.
            </p>
        </section>
    );
}

export default AboutMe;
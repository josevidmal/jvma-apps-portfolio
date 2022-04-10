import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="nav">
                <li className="nav-item"><a className="nav-link" href="#about-me">About Me</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
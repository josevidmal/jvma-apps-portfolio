import React from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
    console.log("navigation", currentPage)
    return (
        <nav className="col-8">
            <ul className="nav">
                <li className="nav-item"><a className="nav-link" href="#about-me" onClick={() => handlePageChange('AboutMe')}>About Me</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
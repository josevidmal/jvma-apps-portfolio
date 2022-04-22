import React from 'react';
import '../../src/App.css' 

const Navigation = ({ currentPage, handlePageChange }) => {
    console.log("navigation", currentPage)
    return (
        <nav className="col-12 col-sm-12 col-md-8 container-fluid custom-nav">
            <ul className="nav justify-content-center">
                <li className="col-6 col-sm-3 nav-item"><a className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} href="#about-me" onClick={() => handlePageChange('AboutMe')}>About Me</a></li>
                <li className="col-6 col-sm-3 nav-item"><a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a></li>
                <li className="col-6 col-sm-3 nav-item"><a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
                <li className="col-6 col-sm-3 nav-item"><a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
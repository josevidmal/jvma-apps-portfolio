import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="custom-footer">
            <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link" id="github" href="https://github.com/josevidmal"><FaGithub /></a></li>
                <li className="nav-item"><a className="nav-link" id="linkedin" href="https://www.linkedin.com/in/jose-vidal-maza-alonso-73477646/"><FaLinkedin /></a></li>
                <li className="nav-item"><a className="nav-link" id="stack-overflow" href="https://stackoverflow.com/users/17156054/jos%c3%a9-vidal"><FaStackOverflow /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;
import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <ul className="nav">
                <li className="nav-item"><a className="nav-link" id="github" href="https://github.com/josevidmal" target="_blank"><FaGithub /></a></li>
                <li className="nav-item"><a className="nav-link" id="linkedin" href="https://www.linkedin.com/in/jose-vidal-maza-alonso-73477646/" target="_blank"><FaLinkedin /></a></li>
                <li className="nav-item"><a className="nav-link" id="stack-overflow" href="https://stackoverflow.com/users/17156054/jos%c3%a9-vidal" target="_blank"><FaStackOverflow /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;
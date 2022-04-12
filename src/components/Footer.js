import React from 'react';
import GitHubLogo from '../assets/github-logo.png';
import LinkedInLogo from '../assets/linkedin-logo.png';
import StackOverflowLogo from '../assets/stack-overflow-logo.png';

const Footer = () => {
    return (
        <footer>
            <ul className="nav">
                <li className="nav-item"><a className="nav-link" id="github" href="https://github.com/josevidmal" target="_blank"><img src={GitHubLogo}/></a></li>
                <li className="nav-item"><a className="nav-link" id="linkedin" href="https://www.linkedin.com/in/jose-vidal-maza-alonso-73477646/" target="_blank"><img src={LinkedInLogo} /></a></li>
                <li className="nav-item"><a className="nav-link" id="stack-overflow" href="https://stackoverflow.com/users/17156054/jos%c3%a9-vidal" target="_blank"><img src={StackOverflowLogo}/></a></li>
            </ul>
        </footer>
    );
}

export default Footer;
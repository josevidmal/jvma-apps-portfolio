import React from 'react';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a className="contact-links" id="github" href="https://github.com/josevidmal" target="_blank"><img src={require("../assets/github-logo.png")}/></a></li>
                <li><a className="contact-links" id="linkedin" href="https://www.linkedin.com/in/jose-vidal-maza-alonso-73477646/" target="_blank"><img src={require("../assets/linkedin-logo.png")} /></a></li>
                <li><a className="contact-links" id="stack-overflow" href="https://stackoverflow.com/users/17156054/jos%c3%a9-vidal" target="_blank"><img src={require("../assets/stack-overflow-logo.png")}/></a></li>
            </ul>
        </footer>
    )
}

export default Footer;
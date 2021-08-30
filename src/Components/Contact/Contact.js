import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss'

const Cesume = () => {
    return <div className="contact-wrapper">
        <div>
            <h1 className="footer-title">Let's Connect</h1>
        </div>
        <div>
            <a className="footer-link" href="https://www.linkedin.com/in/ketanmalik/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin']} size="3x" />
            </a>
            <a className="footer-link" href="https://github.com/ketanmalik" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="footer-icon" icon={['fab', 'github-square']} size="3x" />
            </a>
            <a className="footer-link" href="mailto:malik.ke@northeastern.edu">
                <FontAwesomeIcon className="footer-icon" icon="envelope" size="3x" />
            </a>
        </div>
        <div className="copyright-text">
            &copy;Copyright&emsp;|&emsp;Ketan Malik&emsp;|&emsp;2020
        </div>
    </div>
}

export default Cesume;

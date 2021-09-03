import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Resume.scss'

const Resume = () => {
    return <div className="resume-wrapper">
        <h1 className="title">Resume</h1>
        <a href="https://drive.google.com/file/d/1oV_pBfjg0swwN9-Zu31I5qW-PrVmHmaS/view?usp=sharing" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="resume-icon" icon="file-pdf" size="7x" />
        </a>
        <div className="dummy"></div>
        <div className="go-to-top" onClick={() => scroll.scrollToTop()}>
            <FontAwesomeIcon className="go-to-top-icon" icon="arrow-up" size="1x" />
        </div>
    </div>
}

export default Resume;

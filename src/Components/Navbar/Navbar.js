import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import DarkModeToggle from "react-dark-mode-toggle";
import './Navbar.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'light',
        }
    }

    switchMode = () => {
        const { mode } = this.state;
        console.log(document.documentElement.style);
        if (mode === 'dark') {
            document.body.classList.remove('dark-mode');
            this.setState({ mode: 'light' });
            const root = document.documentElement;
            root.style.setProperty('--background-color', '#ffffff');
            root.style.setProperty('--primary-text-color', '#021b39');
            root.style.setProperty('--primary-text-color-hover', '#397fd4');
            root.style.setProperty('--secondary-text-color', '#fff');
            root.style.setProperty('--heading-text-color', '#3a80d4');
            root.style.setProperty('--primary-p-text-color', '#021b39');
            root.style.setProperty('--card-tech-border', '#b69dd0');
            root.style.setProperty('--card-tech-bg', '#d8bdf56e');
            root.style.setProperty('--card-tech-color', '#723ba7');
            root.style.setProperty('--anchor-link-color', '#143966');
            root.style.setProperty('--footer-bg', '#143966');
            root.style.setProperty('--footer-title-color', '#fff');
            root.style.setProperty('--footer-icon', '#fff');
        } else {
            document.body.classList.add('dark-mode');
            this.setState({ mode: 'dark' });
            const root = document.documentElement;
            root.style.setProperty('--background-color', '#272733');
            root.style.setProperty('--primary-text-color', '#2986b8');
            root.style.setProperty('--primary-text-color-hover', '#a67de9');
            root.style.setProperty('--secondary-text-color', '#a67de9');
            root.style.setProperty('--primary-p-text-color', '#ffffff');
            root.style.setProperty('--card-tech-border', '#a19ca1');
            root.style.setProperty('--card-tech-bg', '#00000063');
            root.style.setProperty('--card-tech-color', '#ffffff');
            root.style.setProperty('--anchor-link-color', '#bdd1f1');
            root.style.setProperty('--footer-bg', '#20202b');
            root.style.setProperty('--footer-title-color', '#397fd4');
            root.style.setProperty('--footer-icon', '#bdd1f1');
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        const { mode } = this.state;
        return <div className="navbar-wrapper">
            <ul className="navbar-links-list">
                <li><Link to="about-wrapper" spy={true} smooth={true} duration={500}>About</Link></li>
                <li><Link to="projects-wrapper" spy={true} smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="resume-wrapper" spy={true} smooth={true} duration={500}>Resume</Link></li>
                <li><Link to="contact-wrapper" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>

            <ul className="navbar-links-right-list">
                <li><Link to="home-wrapper" spy={true} smooth={true} duration={500}>Ketan Malik</Link></li>
                <DarkModeToggle
                    onChange={this.switchMode}
                    checked={mode === 'dark'}
                    size={80}
                />
                <div style={{ marginRight: "1em" }}></div>
            </ul>
            {/* <button onClick={this.scrollToTop}>scroll to top</button> */}
        </div>
    }
}

export default Navbar;
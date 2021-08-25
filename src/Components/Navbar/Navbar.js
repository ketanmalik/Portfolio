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
            activeLink: '',
        }
    }

    setActiveLink = (activeLink) => {
        this.setState({ activeLink });
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
            root.style.setProperty('--primary-text-color-hover', '#B46506');
            root.style.setProperty('--secondary-text-color', '#fff');
        } else {
            document.body.classList.add('dark-mode');
            this.setState({ mode: 'dark' });
            const root = document.documentElement;
            root.style.setProperty('--background-color', '#272733');
            root.style.setProperty('--primary-text-color', '#2986b8');
            root.style.setProperty('--primary-text-color-hover', '#a67de9');
            root.style.setProperty('--secondary-text-color', '#a67de9');
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        const { activeLink, mode } = this.state;
        return <div className="navbar-wrapper">
            <ul className="navbar-links-list">
                <li><Link activeClass="active" to="about-wrapper" spy={true} smooth={true} duration={500}>About</Link></li>
                <li><Link activeClass="active" to="skills-wrapper" spy={true} smooth={true} duration={500}>Skills</Link></li>
                <li><Link activeClass="active" to="projects-wrapper" spy={true} smooth={true} duration={500}>Project</Link></li>
                <li><Link activeClass="active" to="resume-wrapper" spy={true} smooth={true} duration={500}>Resume</Link></li>
                <li><Link activeClass="active" to="contact-wrapper" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>

            <ul className="navbar-links-right-list">
                <li><Link activeClass="active" to="home-wrapper" spy={true} smooth={true} duration={500}>Ketan Malik</Link></li>
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
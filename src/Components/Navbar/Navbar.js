import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        } else {
            document.body.classList.add('dark-mode');
            this.setState({ mode: 'dark' });
            const root = document.documentElement;
            root.style.setProperty('--background-color', '#272733');
            root.style.setProperty('--primary-text-color', '#2986b8');
            root.style.setProperty('--primary-text-color-hover', '#a67de9');
        }
    }

    render() {
        const { activeLink, mode } = this.state;
        return <div className="navbar-wrapper">
            <ul className="navbar-links-list">
                <li><Link className={activeLink === 'about' ? 'active' : ''} to='/about' onClick={() => this.setActiveLink('about')}>About</Link></li>
                <li><Link className={activeLink === 'skills' ? 'active' : ''} to='/skills' onClick={() => this.setActiveLink('skills')}>Skills</Link></li>
                <li><Link className={activeLink === 'project' ? 'active' : ''} to="/project" onClick={() => this.setActiveLink('project')}>Project</Link></li>
                <li><Link className={activeLink === 'resume' ? 'active' : ''} to="/resume" onClick={() => this.setActiveLink('resume')}>Resume</Link></li>
                <li><Link className={activeLink === 'contact' ? 'active' : ''} to="/contact" onClick={() => this.setActiveLink('contact')}>Contact</Link></li>
            </ul>

            {/* <button onClick={this.switchMode}>click</button> */}
            <ul className="navbar-links-right-list">
                <li><Link to="/" onClick={() => this.setActiveLink('')}>Ketan Malik</Link></li>
                <DarkModeToggle
                    onChange={this.switchMode}
                    checked={mode === 'dark'}
                    size={80}
                />
                <div style={{ marginRight: "1em" }}></div>
            </ul>
            {/* <div className="navbar-right-align">

            </div> */}

        </div>
    }
}

export default Navbar;
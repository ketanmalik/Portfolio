import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../../Assets/particlesConfig.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-scroll";
import './Home.scss';

class Home extends Component {
    render() {
        return <div className="home-wrapper">
            <Particles params={particlesConfig} />
            <div className="intro-wrapper">
                <div className="home-intro">
                    <h1 style={{ fontSize: "2.5em" }}>KETAN MALIK</h1>
                    <div class="typewriter">
                        <h2>SOFTWARE ENGINEER | WEB DEVELOPER</h2>
                    </div>
                </div>
            </div>
            <div className='explore-wrapper'>
                <Link className='explore-text' activeClass="active" to="about-wrapper" spy={true} smooth={true} duration={500}>
                    Explore
                    &nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon="chevron-circle-down" className='home-explore-btn' size="1x" />
                </Link>
            </div>

        </div>
    }
}

export default Home;

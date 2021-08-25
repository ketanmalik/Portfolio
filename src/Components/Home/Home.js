import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../../Assets/particlesConfig.json';
import './Home.scss';

class Home extends Component {
    render() {
        return <div className="home-wrapper">
            <Particles params={particlesConfig} />
            <div className="intro-wrapper">
                <div className="home-intro">
                    <h1 style={{fontSize: "2.5em"}}>KETAN MALIK</h1>
                    <div class="typewriter">
                        <h2>SOFTWARE ENGINEER | WEB DEVELOPER</h2>
                    </div>
                </div>
            </div>

        </div>
    }
}

export default Home;

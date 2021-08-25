import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../../Assets/particlesConfig.json';

class Home extends Component {
    render() {
        return <div>
            <Particles params={particlesConfig} />
            <Link to="/about">About</Link>
            <br></br>
            <Link to="/skills">Skills</Link>
        </div>
    }
}

export default Home;

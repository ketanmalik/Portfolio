import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return <div>
            <Link to="/about">About</Link>
            <br></br>
            <Link to="/skills">Skills</Link>
        </div>
    }
}

export default Home;

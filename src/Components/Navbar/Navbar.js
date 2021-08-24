import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../../Assets/particlesConfig.json';

class Navbar extends Component {
    state = {
        mode: 'light',
    }

    switchMode = () => {
        const { mode } = this.state;
        console.log(document.body.classList);
        if (mode === 'dark') {
            document.body.classList.remove('dark-mode');
            this.setState({ mode: 'light' });
        } else {
            document.body.classList.add('dark-mode');
            this.setState({ mode: 'dark' });
        }
    }

    render() {
        return <div>
            <button onClick={this.switchMode}>click</button>
            <Particles params={particlesConfig} />
        </div>
    }
}

export default Navbar;
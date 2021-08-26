import React, { Component } from 'react';
import react from '../../Assets/react.png';
import redux from '../../Assets/redux.png';
import './Projects.scss';

class ImgCard extends Component {
    render() {
        return <React.Fragment>
            <div className="imgCard-wrapper">
                <span>
                    <img src={redux} className="tech-img" alt="Technology" />
                    <p>React</p>
                </span>
                <span>
                    <img src={react} className="tech-img" alt="Technology" />
                    <p>React</p>
                </span>
                <span>
                    <img src={redux} className="tech-img" alt="Technology" />
                    <p>React</p>
                </span>
                <span>
                    <img src={redux} className="tech-img" alt="Technology" />
                    <p>React</p>
                </span>
                <span>
                    <img src={redux} className="tech-img" alt="Technology" />
                    <p>React</p>
                </span>
                <span>
                    <img src={redux} className="tech-img" alt="Technology" />
                    <p>React</p>
                </span>
                <span>
                    <img src={redux} className="tech-img" alt="Technology" />
                    <p>React</p>
                </span>
                <span>
                    <img src={redux} className="tech-img" alt="Technology" />
                    <p>React</p>
                </span>
            </div>
        </React.Fragment>
    }
}

export default ImgCard;
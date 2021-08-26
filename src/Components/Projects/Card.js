import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageMapping from '../../Assets/ImageMapping.json';

class Card extends Component {
    render() {
        const { title, descriptionArr, techArr, gitLink, webLink } = this.props;
        const imgUrl = `/Images/${imageMapping[title]}`;
        const description = descriptionArr.map((desc, i) => <p key={i}>{desc}</p>);
        const technologies = techArr.map((tech, i) => <div key={i} className="card-inner-tech">{tech}</div>)
        return <div className="card">
            <img className="card-img" src={`${imgUrl}`} alt="Project" />
            <div className="card-inner">
                {description}
                <div className="card-inner-tech-list">
                    {technologies}
                </div>
            </div>
            <h2 className="card-inner-title">{title}</h2>
            {title === 'Target Redesign' ?
                <div className="card-inner-link">
                    <a href={gitLink} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        &nbsp;&nbsp;Axure RP Prototype
                        </a>
                </div>
                : (
                    <div className="card-inner-link">
                        <a href={gitLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                            &nbsp;&nbsp;Github code
                        </a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href={webLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="laptop-code" size="1x" />
                        &nbsp;&nbsp;View website
                        </a>
                    </div>
                )}
        </div>
    }
}

export default Card;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageMapping from '../../Assets/ImageMapping.json';

const Card = (props) => {
    const { title, descriptionArr, techArr, gitLink, webLink } = props;
    const imgUrl = `/Images/${imageMapping[title]}`;
    const description = descriptionArr && descriptionArr.map((desc, i) => <p key={i}>{desc}</p>);
    const technologies = techArr && techArr.map((tech, i) => <div key={i} className="card-body-hidden-tech">{tech}</div>)
    return <a className="card" href={webLink} target="_blank" rel="noreferrer">
        <div className="card-body">
            <div style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }} className="card-body-img">
                <div className="card-body-hidden">
                    {description}
                    <div className="card-body-hidden-tech-list">
                        {technologies}
                    </div>
                </div>
            </div>
        </div>
        <div className="card-footer">
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
    </a>
}

export default Card;
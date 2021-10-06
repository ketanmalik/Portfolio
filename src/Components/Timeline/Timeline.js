import React from 'react';
import './Experience.scss';

const Timeline = () => {
    return (
        <div className="timeline-wrapper">
            <h1 className="title">Timeline</h1>
            <div className="timeline-component"></div>
            <div className="timeline-elements-wrapper">
                <div style={{marginLeft: "5%"}}></div>
                <div className="timeline-element"></div>
                <div className="timeline-element"></div>
                <div className="timeline-element"></div>
                <div className="timeline-element"></div>
            </div>


            {/* <div className="timeline-component">
                <div className="timeline-element">
                    <div className="timeline-sub-element"></div>
                </div>
                <div className="timeline-element">
                    <div className="timeline-sub-element"></div>
                </div>
                <div className="timeline-element">
                    <div className="timeline-sub-element"></div>
                </div>
                <div className="timeline-element">
                    <div className="timeline-sub-element"></div>
                </div>
            </div> */}

        </div>
    )
}

export default Timeline;
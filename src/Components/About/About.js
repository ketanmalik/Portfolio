import React, { Component } from 'react';
import img from '../../Assets/IMG.png';
import './About.scss';

class About extends Component {
    render() {
        return <div id="about-wrapper">
            <h1 className="title">About</h1>
            <div className="about-text">
                <img className="my-img" src={img} alt="Ketan Malik" />
                <div>
                    <p>
                        I'm Ketan Malik, an Information Systems graduate student at Northeastern University. I have focused
                        my career path and academic pursuits on learning and developing important skills necessary to excel
                        in software and web development by gaining industrial experience and taking relevant courses and projects
                        in my master’s education
                </p>
                    <p>
                        I love developing full-stack web applications from scratch and I'm a little biased towards front-end web
                        development because I have a thing for beautiful and clean UI/UX. I always believe in writing high-quality
                        code that is scalable and maintainable. Since every user expects the website to behave perfectly across all
                        of their devices so, it's important to me to develop fully responsive applications that meet this requirement.
                        Over the years, I've become more accountable to myself for the work I do because I strongly believe that a
                        well-designed product can play a huge role in the company's future.
                </p>
                    <p>

                        I've always felt that learning is not confined to the four walls of a classroom and I see myself as a broad-minded
                        individual who's always open to suggestions. I'm quite adaptive and can wear multiple hats at a time as required by
                        the work culture.
                </p>
                    <p>
                        I'd love to engage in discussion with friends, colleagues, and companies over similar interests!
                </p>
                </div>
            </div>
        </div>
    }
}

export default About;

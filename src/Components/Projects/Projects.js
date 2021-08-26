import React, { Component } from 'react';
import Card from './Card';
import './Projects.scss';
class Projects extends Component {
    render() {
        const project1Description = [
            "A fully responsive website build with create-react-app and hosted on Heroku; it mocks an Aircraft's parts manufacturing company",
            "A user can explore the inventory, add items to the cart, place the order, and make payment via PayPal",
            "Users can either create account or login using Google/Facebook to view orders and admins can perform CRUD operations on the inventory",
        ];
        const project1Tech = ["React", "Redux", "Node.js", "Express.js", "REST", "HTML5", "CSS3", "Heroku", "Bootstrap"];

        const project2Description = [
            "This one's a dynamic website I built when I wanted to learn GraphQL, ESRI's ArcGIS, and Semantic-UI React! It aims at reporting water leakages",
            "Users can report a water leakage incident incident within the USA and can also track the status of their report",
            "This project actually gave hands-on experience with a lot of new technologies I wanted to learn",
        ];
        const project2Tech = ["React", "Redux", "GraphQL", "ESRI ArcGIS", "Semantic-UI React", "HTML5", "CSS3", "Heroku"];

        const project3Description = [
            "This was just a fun project when I wanted to play the plain-old Tetris game! Its mainly about JavaScript, HTML, and CSS",
            "Players can play it on any device and can simply reset the game with just a press of a button. I also hosted it on Google Firebase so that I could play it anytime!",
        ];
        const project3Tech = ["React", "JavaScript", "HTML5", "CSS3", "Google Firebase"];

        const project4Description = [
            "A team project to redesign existing Target's website to identify and overcome its shortcomings using various UX research methods",
            "Our team went through Parallel Design, Online Surveys, and System Usability Scale research methods to identify the main pain points and resolve them",
            "Along with Axure RP 10, we also used Balsamiq, Moqups, and Figma just to try different prototyping tools",
        ];
        const project4Tech = ["Axure RP 10", "Figma", "Balsamiq", "Moqups", "UI/UX Research Methods"];

        const project5Description = [
            "A simple Burger Builder application created using create-react-app to add the ingredients to a burger and then finally order it! Firebase API were used in this project",
            "This project was part of a Udemy course I took on React and it was one of the first projects I built while pursuing this online course",
            "No CSS library was used for styling and everything was built from scratch in this course. I finally deployed it on Firebase ",
        ];
        const project5Tech = ["React", "Redux", "JavaScript", "HTML", "CSS", "Google APIs", "Google Firebase"];

        return <div className="projects-wrapper">
            <h1 className="title">Recent Projects</h1>
            <div className="project-cards-wrapper">
                <Card
                    id="project1"
                    title="Falcon Aviation"
                    descriptionArr={project1Description}
                    techArr={project1Tech}
                    gitLink="https://github.com/ketanmalik/Final-Project"
                    webLink="https://falconaviationproject.herokuapp.com/"
                />

                <Card
                    id="project2"
                    title="Driblets"
                    descriptionArr={project2Description}
                    techArr={project2Tech}
                    gitLink="https://github.com/ketanmalik/driblets"
                    webLink="https://driblets.herokuapp.com/"
                />

                <Card
                    id="project3"
                    title="Tetris Game"
                    descriptionArr={project3Description}
                    techArr={project3Tech}
                    gitLink="https://github.com/ketanmalik/Tetris-Game/"
                    webLink="https://the-tetris-game.web.app/"
                />

                <Card
                    id="project4"
                    title="Target Redesign"
                    descriptionArr={project4Description}
                    techArr={project4Tech}
                    gitLink="https://cyuxsk.axshare.com/#id=5z2mbl&p=homepage"
                    webLink="https://cyuxsk.axshare.com/#id=5z2mbl&p=homepage"
                />

                <Card
                    id="project5"
                    title="Burger Builder"
                    descriptionArr={project5Description}
                    techArr={project5Tech}
                    gitLink="https://github.com/ketanmalik/"
                    webLink="https://burger-builder-dbs.web.app/"
                />

            </div>
        </div>
    }
}

export default Projects;

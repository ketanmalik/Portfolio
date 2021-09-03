import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleDown, faGamepad, faLaptopCode, faFilePdf, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

library.add(fab, faChevronCircleDown, faGamepad, faLaptopCode, faFilePdf, faEnvelope, faArrowUp);

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

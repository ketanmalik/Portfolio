import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/skills" exact component={Projects} />
        <Route path="/skills" exact component={Resume} />
        <Route path="/skills" exact component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

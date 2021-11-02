import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Contact from './components/Contact';
// import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
// import Projects from './components/Projects';
import Projects from './components/Projects/index';
import HeroSection from './components/HeroSection/index';
import { homeObjOne, homeObjTwo, homeObjThree } from './components/Projects/Data';
import Services from './components/Services/index';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route path="/" exact>
            {/* <Home /> */}
            <HeroSection />
          </Route>
          <Route path="/blog">
            <Blog />
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects {...homeObjOne} />
            <Projects {...homeObjTwo} />
            <Projects {...homeObjThree} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

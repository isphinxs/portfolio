import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h3>Hi, my name is Sam! </h3>
        </header>
        <body>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;

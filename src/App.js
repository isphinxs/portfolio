import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

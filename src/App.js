import React from 'react';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

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
        </body>
      </div>
    </Router>
  );
}

export default App;

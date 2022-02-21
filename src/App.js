import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Navbar from './components/Navbar';
import Projects from './components/Projects/index';
import HeroSection from './components/HeroSection/index';
import { projectObjOne, projectObjTwo, projectObjThree } from './components/Projects/Data';
import Blog from './components/Blog/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <Router>
        <Navbar />
        <HeroSection />
        <About />
        <Projects {...projectObjOne} />
        <Projects {...projectObjTwo} />
        <Projects {...projectObjThree} />
        <Blog />
        <Contact />
        <Footer />
    </Router>
  );
}

export default App;

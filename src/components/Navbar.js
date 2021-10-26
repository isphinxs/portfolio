import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <ul className="navbar">
            <li><h3><em>Hi, my name is Sam!</em></h3></li>
            <li><NavLink to="/">ABOUT</NavLink></li>
            <li><NavLink to="/Projects">PROJECTS</NavLink></li>
            <li><NavLink to="/Blog">BLOG</NavLink></li>
            <li><NavLink to="/Contact">CONTACT</NavLink></li>
        </ul>
    )
}

export default Navbar;
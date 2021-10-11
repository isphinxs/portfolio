import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <ul className="navbar">
            <li><h3><em>Hi, my name is Sam!</em></h3></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/Projects">Projects</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
    )
}

export default Navbar;
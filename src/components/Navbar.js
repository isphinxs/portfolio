import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <ul className="navbar">
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/Projects">Projects</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
    )
}

export default Navbar;
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setDropdown(!dropdown);
    }

    const closeMenu = () => {
        setClick(false);
        setDropdown(false);
    }

    return(
        <>
            <Nav>
                <NavLink to="/" exact><em>Hi, my name is Sam!</em></NavLink>
                <Bars onClick={handleClick} />
                {dropdown && <Dropdown closeMenu={closeMenu} />}
                <NavMenu>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/projects">PROJECTS</NavLink>
                    <NavLink to="/blog">BLOG</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import { NameLogo } from '../Footer/FooterElements';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setDropdown(!dropdown);
    }

    const closeMenu = () => {
        setClick(false);
        setDropdown(false);
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <>
            <Nav scrollNav={scrollNav}>
                <NameLogo onClick={toggleHome}>Sam</NameLogo>
                <Bars onClick={handleClick} />
                {dropdown && <Dropdown closeMenu={closeMenu} />}
                <NavMenu>
                    <NavLink to="about"
                        activeClass="active"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >ABOUT</NavLink>
                    <NavLink to="projects"
                        activeClass="active"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >PROJECTS</NavLink>
                    <NavLink to="blog"
                        activeClass="active"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >BLOG</NavLink>
                    <NavLink to="contact"
                        activeClass="active"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >CONTACT</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;
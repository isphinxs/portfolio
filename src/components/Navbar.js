import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

function Navbar() {
    const Nav = styled.nav`
        background: #25A18E;
        color: #FFF;
        font-weight: 600;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem (calc(100vw - 1000px) / 2);
        z-index: 10;
    `

    const NavLink = styled(Link)`
        color: #FFF;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem;
        height: 100%;
        cursor: pointer;
        &.active {
            color: #004E64;
        }
    `
    
    const Bars = styled(FaBars)`
        display: none;
        color: #FFF;
        @media screen and (max-width: 768px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 75%);
            font-size: 1.8rem;
            cursor: pointer;
        }
    `

    const NavMenu = styled.div`
        display: flex;
        align-items: center;
        @media screen and (max-width: 768px) {
            display: none;
        }
    `

    return(
        <>
            <Nav>
                <NavLink to="/" exact><em>Hi, my name is Sam!</em></NavLink>
                <Bars />
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
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    // fix and add margin -80
    background: #25A18E;
    color: #FFF;
    font-weight: 600;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem (calc(100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
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

export const Bars = styled(FaBars)`
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

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
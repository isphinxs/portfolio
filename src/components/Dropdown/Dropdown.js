import React from 'react';
import { Link } from 'react-scroll';
import { MenuItems } from './MenuItems';
import './Dropdown.css';

const Dropdown = props => {
    return(
        <>
            <ul onClick={props.closeMenu} className='dropdown-menu'>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.className} to={item.path} onClick={props.closeMenu}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown;
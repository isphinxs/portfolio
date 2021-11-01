import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Dropdown.css';

const Dropdown = props => {
    const [click, setClick] = useState(false);    
    const handleClick = () => {
        setClick(!click);
    }
    
    return(
        <>
            <ul onClick={props.closeMenu} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.className} to={item.path} onClick={() => {
                                setClick(false);
                            }}>
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
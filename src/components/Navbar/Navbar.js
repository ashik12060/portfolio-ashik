import './Navbar.css';
import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Navbar = () => {
    
    const [click, setClick] = useState(false);
 const handleClick =()=> setClick(!click);
    return (
        <div className="header">
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: 'white'}}/>) : ( <FaBars size={20} style={{color: 'white'}}/>)}
                
               
            </div>
        </div>
    );
};

export default Navbar;
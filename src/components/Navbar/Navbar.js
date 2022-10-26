import './Navbar.css';
import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Navbar = () => {
    
    const [click, setClick] = useState(false);
 const handleClick =()=> setClick(!click);

 const [color, setColor] = useState(false);
 const changeColor = ()=>{
    if(window.scrollY >=100){
        setColor(true);
    }
    else{
        setColor(true);
    }
 };
 window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1 className="">Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                <li>
                    <Link to="/" className="nav-style">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-style">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-style">Contact</Link>
                </li>
                <li>
                    <Link to="/projects" className="nav-style">Projects</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: 'white'}}/>) : ( <FaBars size={20} style={{color: 'white'}}/>)}
                
               
            </div>
        </div>
    );
};

export default Navbar;
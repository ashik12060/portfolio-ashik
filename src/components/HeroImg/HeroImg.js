import './HeroImg.css';
import React from 'react';
import heroImg from '../../assets/hero-img1.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={heroImg} alt="heroImg" />
            </div>
            <div className="content">
                <p>I'm a freelancer!</p>
                <h1>React Developer</h1>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    );
};

export default HeroImg;
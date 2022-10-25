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
                <p>I'm Ashik Mahmood!</p>
                <h1>React Developer</h1>
                <div className="btn-style">
                    <div className="btn-grp">
                        <a className="btn" href="https://drive.google.com/file/d/1JCCL82cb0_u8r9gWoKTYvAoTzFQZccIp/view?usp=sharing" >RESUME</a>
                    </div>
                    <div>
                        <Link to="/contact" className="btn btn-light">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;
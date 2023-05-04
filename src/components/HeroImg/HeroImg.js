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
                <p className="text-al">I'm Ashik Mahmood!</p>
                <h1 className="header-style ">Web Developer</h1>
                <div className="btn-style">
                    <div className=" btn-container-1">
                       
                        <a  className=" btn-btn new-btn-form" href="https://drive.google.com/file/d/1-BQbPRzQAqdGNYv-ScO4C_-sta8pJF8u/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a>

                    </div>
                    


                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;
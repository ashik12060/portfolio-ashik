import './AboutContent.css';

import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/ashik.jpg';

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am i?</h1>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi natus obcaecati voluptatibus quasi, qui vel?</p>
                <Link to="/contact">
                <button className="btn">Contact</button>
                </Link>

            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img1} alt="img" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
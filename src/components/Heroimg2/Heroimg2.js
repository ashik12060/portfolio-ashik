import React, { Component } from 'react';
import './Heroimg2.css';
import HeroImg from '../../assets/hero2.jpg';
class Heroimg2 extends Component {
    render() {
        return (
            <div className="hero-img">
                <div className="img-container">
                    <img className="hero-img2" src={HeroImg} alt="HeroImg" />
                </div>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
                
            </div>
        );
    }
};

export default Heroimg2;
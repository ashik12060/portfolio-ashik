import './Card.css';
import React from 'react';

const Card = (props) => {
    return (
        <div className="project-container">
            <div className="project-card">
                <img src={props.pImg} alt="panda-ecommerce" />
                <h2 className="project-title">{props.title}</h2>
                <p>{props.text}</p>
                <div className="pro-details">
                    
                    <div className="pro-btns">
                        <span>
                            <a className="btn" href={props.view}>view</a>
                        </span>

                        <span>
                            <a className="btn" href={props.source}>Source</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
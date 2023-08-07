import "./Card.css";
import React from "react";

const Card = (props) => {
  return (
    <div className="project-container">
      <div className="project-card">
        <div>
          <img src={props.pImg} alt="panda-ecommerce" />
          <h2 className="project-title">{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <div className="pro-details">
          <div className="pro-btns">
            <span>
              <a
                className="btn"
                href={props.view}
                target="_blank"
                rel="noopener noreferrer"
              >
                view
              </a>
            </span>

            <span>
              <a
                className="btn"
                href={props.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

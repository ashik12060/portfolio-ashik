import React from "react";
import "./Expertise.css";
import Expertise from "./Expertise";
const ExpertiseProgress = () => {
  return (
    <div className="bg-progress">
      <h1>My Expertise</h1>
      <hr/>
      <div className="expertise-container">
            <h6>HTML</h6>
            <Expertise progress={90} />
            <h6 >CSS</h6>
            <Expertise progress={85} />
            <h6 >TAILWIND CSS</h6>
            <Expertise progress={80} />
            <h6 >BOOTSTRAP</h6>
            <Expertise progress={75} />
            <h6 >JAVASCRIPT</h6>
            <Expertise progress={75} />
            <h6 >REACT JS</h6>
            <Expertise progress={70} />
         
        
      </div>
    </div>
  );
};

export default ExpertiseProgress;

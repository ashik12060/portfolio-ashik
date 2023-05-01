import './Card.css';
import React from 'react';
import Card from './Card';
import WorkCardData from './WorkCardData';

const WorkCard = () => {
    return (
        
        <div>
            <h1 className="heading-trop">My Projects</h1> <hr />
            <div className="work-container">
            
            {
                WorkCardData.map((val,ind)=>{
                    return (
                        <Card 
                        key={ind}
                        pImg={val.urlImg}
                        title={val.title}
                        text={val.title}
                        view={val.view}
                        source={val.source}
                        ></Card>
                    )
                })
            }
                
            </div>
        </div>
    );
};

export default WorkCard;
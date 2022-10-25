import './Card.css';
import React from 'react';
import Card from './Card';
import WorkCardData from './WorkCardData';

const WorkCard = () => {
    return (
        
        <div>
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
                        ></Card>
                    )
                })
            }
                
            </div>
        </div>
    );
};

export default WorkCard;
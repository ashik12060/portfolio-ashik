import React, { useEffect, useState } from 'react'
import './Expertise.css'
import { ProgressBar } from 'react-bootstrap';
const Expertise = ({progress}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const duration = 5000; // 5000 milliseconds = 5 seconds

  useEffect(() => {
    let interval;
    let currentTime = 0;
    const step = 100;

    const updateProgress = () => {
      currentTime += step;
      const newProgress = (currentTime / duration) * progress;
      setCurrentProgress(newProgress >= progress ? progress : newProgress);
      if (currentTime >= duration) {
        clearInterval(interval);
      }
    };

    interval = setInterval(updateProgress, step);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div> 
    
      <ProgressBar   
    now={currentProgress} 
    
    className='custom-progress-bar'
    label={`${Math.round(currentProgress)}%`} />
    </div>
  )
}

export default Expertise;
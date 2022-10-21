import React from 'react';
import Footer from '../components/Footer/Footer';
import Heroimg2 from '../components/Heroimg2/Heroimg2';
import Navbar from '../components/Navbar/Navbar';
const Projects = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Heroimg2 heading="PROJECTS." text="Some of my recent works"></Heroimg2>
            <Footer></Footer>
            
        </div>
    );
};

export default Projects;
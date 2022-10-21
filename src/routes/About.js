import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Heroimg2 from '../components/Heroimg2/Heroimg2';
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Heroimg2 heading="ABOUT" text="I am a friendly Front-End Developer."></Heroimg2>
            <Footer></Footer>
            
        </div>
    );
};

export default About;